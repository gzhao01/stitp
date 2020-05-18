// var models = require('../db');
// var express = require('express');
// var router = express.Router();
// var mysql = require('mysql');
// var $sql = require('../sqlMap');

// //连接数据库
// var conn = mysql.createConnection(models.mysql);

// conn.connect();

// var jsonWrite = function(res, ret) {
//   if(typeof ret === 'undefined') {
//     res.json({
//       code: '1',
//       msg: 'fail'
//     });
//   }
//   else {
//     res.json(ret);
//   }
// }

// router.post('/addUser', (req, res) => {
//   var sql = $sql.user.add;
//   var params = req.body;
//   console.log(params);
//   conn.query(sql, [params.username, params.age], function(err, result){
//     if(err) {
//       console.log(err);
//     }
//     if (result) {
//       jsonWrite(res,result);
//     }
//   })
// })

// module.exports = router;

var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

//here is an example
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;    
    var params = req.body;    
    console.log(params);
    conn.query(sql, [params.username, params.age], function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//================login=======================
//here is the function realization
router.post('/loginSubmit',(req, res) => {
  var sql = $sql.user.loginSubmit;
  //JSON.stringify(reqBody): {"params":{"userName","student123 nickName"}}
  var params= req.body;
  conn.query(sql,[params.userName, params.pass],function(err, result){
    if(err) {
      console.log("login submit: "+err);
    }
    if(result){
      var id = result[0].s_std_id;
      console.log("login submit: "+id);
      res.send({id: id});
    }
  })
})

//================pInfo=====================
router.get('/getPInfo',(req,res) => {
  var sql = $sql.user.getPInfo;
  //req.query returns {id: "id_num"}
  var std_id = req.query.id;
  console.log(std_id);
  conn.query(sql, [std_id], function(err, result){
    if(err){
      console.log("getPInof err: " + err);
    }
    if(result){
      //result is an array
      var std_info = result[0];
      res.json({std_info: std_info}); 
    }
  })
})
module.exports = router;

router.get('/getPoints',(req,res) => {
  //get student id thranfered from request page
  var s_std_id = req.query.std_id;
  //response values
  var result_point = 0;
  var abl_points = 0;
  //handle with gpa
  var sqlGPA = $sql.user.getGPAPoints;
  conn.query(sqlGPA, [s_std_id], function(err, result){
    if(err){
      console.log("getGPAPoints err: " + err);
    }
    if(result){
      //result:
      //[ RowDataPacket { s_points_num: '90', credit: 3.5 },
      //RowDataPacket { s_points_num: '80', credit: 2.5 } ]
      //var gpa_points = result;
      let numerator = 0;
      let denominator = 0;
      for(k in result){
        let point = result[k].s_points_num;
        let credit = result[k].credit;
        numerator += point * credit;
        denominator += credit; 
      }
      result_point = numerator/denominator/20;
    }

    //handle with abl points
    var sqlAbl = $sql.user.getAblPoints;
    conn.query(sqlAbl, [s_std_id], function(err,result){
      if(err){
        console.log(err);
      }
      if(result){
        for(el of result){
          abl_points += el.s_abl_points_num; 
        }
        //保留两位小数 tofixed
        res.json({
          result_point: result_point.toFixed(2),
          abl_points:abl_points
        }); 
      }
    }) 
  })
})

//===================courses====================
//params:           pageSize: size,
//                currentPage: toPage
//                     id: id
//return:           courseList  (Array)
//                  totalCount
//courses
router.get('/getCoursesInfo',(req, res)=>{
  var std_id = req.query.id;
  var pageSize = req.query.pageSize;
  var currentPage = req.query.currentPage;
  
  var sql = $sql.user.getCourses;
  var sqlGetCoursesInfo = $sql.user.getCoursesInfo;
  conn.query(sqlGetCoursesInfo, [std_id], function(err,result){
    if(err){
      console.log("getCourses err: " + err);
    }
    if(result){
      let totalCount = result.length;
      let courseList = [];
      //get current page's courses
      let start = (currentPage-1)*pageSize;
      let currentPageLength = result.length - start;
      for(i = start; i<Math.min(pageSize,currentPageLength); i++){
        courseList.push(result[i]);
      }
      //get teacher's name
      res.json({totalCount:totalCount, courseList: courseList})
    }
  })
})


router.get('/getCourseDetail',(req, res) => {
  var course_id = req.query.course_id;
  var sql = $sql.user.getCourseDetail;
  conn.query(sql, [course_id], function(err, result){
    if(err) {
      console.log("getCourse Detail: " + err);
    }
    if(result) {
      res.json({courseDetail: result[0]});
    }
  })
})

router.get('/getCourseMaterial',(req, res) => {
 var course_id = req.query.course_id;
 var sql = $sql.user.getCourseMaterial;
 conn.query(sql, [course_id], function(err, result){
   if(err){
     console.log("getMaterial: " + err);
   }
   if(result){
     res.json({courseMaterial: result});
   }
 })
})

router.get('/getCoursePoints',(req, res) => {
  var course_id = req.query.course_id;
  var std_id = req.query.std_id;
  var sql = $sql.user.getCoursePointsRatio;
  var sql_points = $sql.user.getCoursePoints;
  //get course points ratio
  conn.query(sql, [course_id], function(err, result){
    if(err) {
      console.log("getCoursePoints: " + err);
    }
    if(result) {
        var course_points_ratio = result;
        conn.query(sql_points,[std_id],function(err, result){
          if(err){
            console.log("get points err: " + err);
          }
          if(result){
            res.json({c_ratio: course_points_ratio, l_points: result});
          }
        }) 
    }
  })
})

router.get('/getCourseSchedule', (req, res) => {
  var course_id = req.query.course_id;
  var sql = $sql.user.getCourseSchedule;
  conn.query(sql, [course_id], function(err, result){
    if(err) {
      console.log("getCourseSchedule err: " + err);
    }
    if(result) {
      res.json({c_schedule: result});
    }
  })
})
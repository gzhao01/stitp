// var sqlMap = {
//   user: {
//     add: 'insert into user(name,age) values(?,?)'
//   }
// }

// module.exports = sqlMap;

// sql语句
var sqlMap = {
  // 学生
  user: {
      add: 'insert into user(id, name, age) values (10, ?, ?)',
      loginSubmit: 'select s_std_id from student where s_nickname = ? and s_password = ?',  
      //=============pInfo================
      getPInfo: 'select * from student where s_std_id = ?',
      getGPAPoints: 'select s_points_num, credit from s_points where s_std_id = ?',
      getAblPoints: 'select s_abl_points_num from s_abl_points where s_std_id = ?',
      //===============courses===============
      getCourses: 'select * from learn right JOIN	course on learn.c_id = course.c_id where s_std_id = ?',
      //get courses info in student courses page
      getCoursesInfo: 
      `select *
      from teacher 
      NATURAL JOIN teach
      NATURAL join course
      NATURAL join learn
      NATURAL join student
      where student.s_std_id = ?`,
      //get course in course page
      getCourseDetail: 
      `
        select * 
        from course
        NATURAL JOIN teach
        NATURAL JOIN teacher
        where course.c_id = ?
      `,
      //get course materials
      getCourseMaterial:
      `
        select *
        from c_materials
        where c_id = ?
      `,
      //get course points
      getCoursePointsRatio: `
        select p_ratio, p_name
        from course
        NATURAL JOIN c_points
        where c_id = ?
        ORDER BY p_name
      `,
      getCoursePoints: `
        select l_points_num 
        from l_points
        NATURAL JOIN learn
        NATURAL JOIN course
        where c_id = ?
        ORDER BY l_points_name
      `,
      getCourseSchedule: `
        select c_schedule_week, c_schedule_content
        from c_schedule
        NATURAL JOIN course
        where c_id = ?
      `,
      getNotice: `
        select s_notice_content, s_notice_time, s_notice_title
        from s_notice
        where s_std_id = ?
      `,
      changeResume: `
        update student
        set s_resume = ?
        where s_std_id = ?
      `
    }
}
  
module.exports = sqlMap;
//student id
let default_id = 0;
//course id
let default_course_id = 0;
//in case users close buffer
try{
  if(localStorage.id){
    default_id = localStorage.id;
  }
  if(localStorage.course_id){
    default_course_id = localStorage.course_id;
  }
}catch(e){
  console.log(e);
}

export default{
  id: default_id,
  course_id: default_course_id
}
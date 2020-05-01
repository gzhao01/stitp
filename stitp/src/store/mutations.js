export default{
  changeID(state, id){
    state.id = id;
    localStorage.id = id;
    console.log("after mutation id:" + id)
  },
  changeCourseID(state, course_id){
    state.course_id = course_id;
    localStorage.course_id = course_id;
  }
}
export default{
  //ctx: 上下文 context
  changeID(ctx, id){
    // console.log(ctx);
    ctx.commit('changeID',id);
  },
  changeCourseID(ctx, course_id){
    ctx.commit('changeCourseID',course_id);
  }
}
<template>
  <div class='callapce'>
		<div class='collapse-item' v-for="(item, index) in lists" :key="index">
			<div class='item-hd' :data-flag="index">
				<div class='title'>周{{item}}</div>
				<div class='collapse-down'>
          <i class="el-icon-arrow-down downImg"></i>
        </div>
			</div>
			<div class='item-mn'>
        {{item}}
			</div>
      <el-divider></el-divider>
		</div>
	</div>
</template>
<script>
export default{
  name: 'Collapse',
  data () {
    return {
      lists: [1,2,3,4,5]
    }
  },
  methods: {
    collapse () {
            let addEvent = document.addEventListener ?
            (elem,type,listener,useCapture)=>{
              elem.addEventListener(type,listener,useCapture);
            }	:
            (elem,type,listener,useCapture)=>{
              elem.attachEvent('on'+type,listener);
            };
          let addClass = (node,className)=>{
            let current = node.className||'';
            if((' '+current+' ').indexOf(' '+className+' ')===-1){
              node.className = current?(current+' '+className):className;
            }
          }
          let delClass = (node,className)=>{
            let current = node.className||'';
            node.className = (' '+current+' ').replace(' '+className+' ',' ').trim();
          }
          let $ = selector=>{
            return [].slice.call(document.querySelectorAll(selector));
          };
          let oItemHds = $('.item-hd');
          let oItemMns = $('.item-mn');
          let oDownImgs = $('.downImg');
          
          for(let oItemHd of oItemHds){
            addEvent(oItemHd,'click',(ev)=>{
              let flag = ev.currentTarget.dataset.flag;
              if(flag){
                // console.log('flag:',flag);
                let oItemMn = oItemMns[flag];
                let oDownImg = oDownImgs[flag];
                let current = oItemMn.className||'';
                let className = 'show';
                if((' '+current+' ').indexOf(' '+className+' ')===-1){
                  addClass(oItemMn,className);
                  addClass(oDownImg,'rotate');
                }else{
                  delClass(oItemMn,className);
                  delClass(oDownImg,'rotate');
                }
          
              }
            })
          }
    }
  },
  mounted () {
    this.collapse()
  }
}
</script>
<style scoped>
.el-divider{
  margin: 0
}
.callapce{
	padding:20px;
	border:1px solid #e9eef3;
	border-radius:4px;
	--down-lh:48px; 
	--img-down:12px;
}
.collapse-item{
	background-color: #e9eef3;
	border-bottom: 1px solid #e9eef3;
  color: #303133;
  font-size: 13px;
  text-align: justify;
}
.collapse-item:first-child{
	border-top: 1px solid #e9eef3;
}
.item-hd{
	position:relative;
	height: var(--down-lh);
        line-height: var(--down-lh);
        cursor: pointer;
}
.item-hd .title{
	display:inline-block;
}
.item-hd .collapse-down{
	float: right;
	display:inline-block;
	margin-right: 8px;
}
.item-hd .downImg{
	width:var(--img-down);
	height:var(--img-down);
	vertical-align: middle;
	transform:rotate(-90deg);
	transition: all .3s linear;
}
.item-hd .downImg.rotate{
	transform: rotate(0);
}
.item-mn{
	overflow:hidden;
	max-height: 0;
	box-sizing: border-box;
	font-size: 13px;
	color: #303133;
	transition:all .3s ease-out;
}
.show{
	/* 这里max-height设置一个足够大的数，但不能太大 */
	transition-timing-function: ease-in;
	max-height:100px;
	padding-bottom: 20px;
}
 
</style>
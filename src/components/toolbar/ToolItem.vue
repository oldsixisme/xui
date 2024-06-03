<style>
.toolItem,
.toolItemText {
	position: relative;
	top:0px;
  display: inline-block;
  cursor: pointer;
  padding: 5px;
  padding-top: 6px;
  transform: all 0.2s;
  font-size: 14px;
  /* color: #0066CC; */
  border-radius: 2px;
  margin-right:4px ;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:500;
  /* color:rgba(52,56,75,1); */
  transition: all 0.3s;
}

.toolItem:hover {
  background-color: #2d8cf0;
  color: #fff;
  border-radius: 4px;
}
.toolItem i {
	position: relative;
	top:1px;
  font-size: 18px;
  /* line-height: 15px; */
  color: #1c7bef;
  /* font-weight: 400; */
  border-radius: 10px;
  background-color: #fff;
  /* height:16px;
  width:16px; */
  padding: 2px 2px;
}
.toolItem:hover i {
  color: #fff;
  background-color: #1c7bef;;
}
</style>

<template>

  
  <tool-bar-slot v-if="renderType === 'slot'"  :tool="tool"></tool-bar-slot>
  <div v-else class="toolItem" @click="handleClick">
    <Icon v-if="tool.icon" :type="tool.icon" :style="'background-color:'+tool.icolor+' !important;'" />
    {{tool.title}} 
  </div>
 
</template>

<script>
import ToolBarSlot from './slot';
export default {
  components:{ToolBarSlot},
  inject:['toolRoot'],
  data(){
    return {
      renderType:'',
    }
  },
  props: {
    tool: {
      type: Object,
      default() {
        return {};
      }
    },
    
  },
  methods:{
      handleClick(){         
         this.$emit('selectTool',this.tool);
      }
  },
  created(){
    if(this.tool.slot){
      this.renderType = 'slot';
    }else{
      this.renderType = 'normal';
    }
  }
};
</script>


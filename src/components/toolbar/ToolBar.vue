<style>
.toolbar {
  background-color: #e6ecff;
  font-size: 14px;
  border: 1px solid #CCCCCC;
  margin-bottom: 4px;
  margin-top: 1px;
  padding: 4px;
  line-height: 16px;
}
</style>
<template>
  <div class="toolbar" >
    <ToolItem @on-click="reciveSelect" @selectTool="reciveSelect" v-for="(item,index) in tools" :tool="item" :key="index"></ToolItem>
  </div>
</template>

<script>
import ToolItem from "./ToolItem.vue";
export default {
  name: "ToolBar",
  provide(){
    return {
      toolRoot: this
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { ToolItem },
  data() {
    return {
      tools: this.data
    };
  },
  methods:{
      reciveSelect(x){
        this.$emit('selectTool',x);
        this.$emit('on-click',x);
      }
  }
};
</script>

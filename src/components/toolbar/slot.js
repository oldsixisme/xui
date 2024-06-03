// export default {
//     name:'ToolSlot',
//     functional: true,
//     inject:['toolRoot'],
//     props:{
//        tool:{
//            type: Object,
//            default: null,
//        },

//     },
//     render: (h,ctx)=>{
//         console.info(ctx);
//         return h('div',{
//             style:'display:inline-block'
//         }, ctx.injections.toolRoot.$scopedSlots[ctx.props.tool.slot]({

//             tool: ctx.props.tool,

//         }));
//     }

// }

import { h } from "vue";

export default {
  name: "ToolSlot",
  inject: ["toolRoot"],
  props: {
    tool: {
      type: Object,
      default: null,
    },
  },
  render() {
    // console.info(this.toolRoot);
    return h(
      "div",
      {
        class: {
          toolItem: false,
        },
        style: {
          display: 'inline-block'
        }
      },
      this.toolRoot.$slots[this.tool.slot]({
        tool: this.tool,
      })
    );
  },
};

// import { h } from 'vue'

// const ToolSlot = (props, context) => {
//     console.info(props,context);
//   return h('div',{class:'toolItem'}, context.slots[0])
// }

// ToolSlot.props = ['tool']

// export default ToolSlot

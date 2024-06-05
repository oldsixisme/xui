import Button from "./components/button.vue";
import ToolBar from './components/toolbar/ToolBar.vue';
import Input from './components/input.vue'


export const install = function(app, options) {
    if (install.installed) return;
    app.component(Button.name, Button);
    app.component(Input.name, Input);
    app.component(ToolBar.name, ToolBar);
};
const API = {install,ToolBar,Input,Button};
export default API;

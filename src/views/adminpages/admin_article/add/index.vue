<template>
    <el-row>
   <quill-editor v-model="content"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)">
   </quill-editor>
 </el-row>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
  
export default {
  data:function(){
   return{
    content:'',
    editorOption:{
          //theme:'bubble'
          modules:{
            toolbar:[
              ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
              ['blockquote', 'code-block'],     //引用，代码块
              [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
              [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
              [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
              [{ 'direction': 'rtl' }],             // 文本方向
              [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
              [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
              [{ 'font': [] }],     //字体
              [{ 'align': [] }],    //对齐方式
              ['clean'],    //清除字体样式
              ['image']    //上传图片
            ]
          },
          theme:'snow'
        }
   }
  },
  methods:{
   onEditorBlur(editor){//失去焦点事件 
  },
   onEditorFocus(editor){//获得焦点事件
   },
   onEditorChange({editor,html,text}){//编辑器文本发生变化
    //this.content可以实时获取到当前编辑器内的文本内容
    console.log(this.content);
   }
  }
}
</script>
<style>
 .quill-editor {
  height: 500px;
 }
</style>
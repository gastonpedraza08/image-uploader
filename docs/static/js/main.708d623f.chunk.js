(this["webpackJsonpimage-uploader"]=this["webpackJsonpimage-uploader"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(3),a=n.n(s),i=n(4);function r(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(c){console.error("Fallback: Oops, unable to copy",c)}document.body.removeChild(t)}(e)}n(9);var o=n.p+"static/media/image.3710b8a3.svg",l=n(0);function d(){var e=Object(c.useState)({url:"",isLoading:!1}),t=Object(i.a)(e,2),n=t[0],s=t[1],a=function(e){s({url:"",isLoading:!0});var t=new FileReader;t.onloadend=function(){var e={base64:t.result,extension:"jpeg"},n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};fetch("https://sleepwalk08-image-uploader.herokuapp.com/api/upload",n).then((function(e){return e.json()})).then((function(e){setTimeout((function(){s({url:e.url,isLoading:!1})}),2e3)})).catch((function(e){console.log(e)}))},t.readAsDataURL(e)};return n.isLoading?Object(l.jsx)("div",{className:"spinner-border m-5",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(l.jsx)("div",{className:"card py-4 px-2",style:{width:"20rem"},children:Object(l.jsxs)("div",{className:"card-body",children:[""===n.url||n.isLoading?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h5",{className:"card-title text-center",children:"Upload Your Image"}),Object(l.jsx)("p",{className:"text-center",children:"File should be Jpeg, Png,..."})]}):Object(l.jsx)("h5",{className:"card-title text-center mb-3",children:"Uploaded Successfully!!!"}),Object(l.jsx)("div",{className:"div-content",children:""===n.url||n.isLoading?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("div",{onDragOver:function(e){return e.preventDefault()},onDrop:function(e){e.preventDefault();var t=e.dataTransfer.files[0];a(t)},className:"py-4 px-3 img-content",children:Object(l.jsxs)("div",{className:"mt-2 row justify-content-center align-items-center",children:[Object(l.jsx)("img",{src:o,alt:"drag-and-drop",className:"w-50"}),Object(l.jsx)("p",{className:"text-center mt-4 mb-2",children:"Drag & Drop your image here"})]})})}),Object(l.jsx)("div",{className:"mt-3 mb-1",children:Object(l.jsx)("p",{className:"text-center",children:"Or"})}),Object(l.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"d-flex justify-content-center",id:"form-file",children:[Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),document.getElementById("file-input").click()},children:"Select a file"}),Object(l.jsx)("input",{onChange:function(e){var t=e.target.files[0];a(t)},id:"file-input",type:"file",style:{display:"none"}})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:n.url,alt:"",className:"content-with-image"}),Object(l.jsxs)("div",{className:"input-group mb-3 mt-4",children:[Object(l.jsx)("input",{type:"text",className:"form-control",value:n.url,disabled:!0,"aria-describedby":"button-addon2"}),Object(l.jsx)("button",{onClick:function(){return r(n.url)},className:"btn btn-outline-secondary",type:"button",id:"button-addon2",children:"Copy"})]})]})})]})})}n(11);function u(){return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"vh-100 vw-100 row align-items-center justify-content-center",children:Object(l.jsx)(d,{})})})}a.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.708d623f.chunk.js.map
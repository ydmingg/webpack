// 可以将css直接引入到js中进行打包
import "./style/index.css"
// 引入图片
import img_me from "./assets/me.png"


document.body.insertAdjacentHTML("beforeend",`<h2>欢迎回来</h2>`)
document.body.insertAdjacentHTML("beforeend", `<img width="80" src="${img_me}" />`)

setTimeout(() => { 
    document.body.style.backgroundColor= "#ccc"
},2000)
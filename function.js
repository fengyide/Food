/*
* @Author: 123
* @Date:   2018-09-15 09:27:55
* @Last Modified by:   123
* @Last Modified time: 2018-09-15 09:35:02
*/
window.onload=function(){
	let btn=document.querySelector(".right1");
	let fugai=document.querySelector(".fugai");
	console.log(btn,fugai);
	btn.onclick=function(){
		fugai.style.display="block";
	}
}
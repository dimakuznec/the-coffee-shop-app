let jsContent = document.querySelector('.js-content');
let jsImgCoffeeCup = document.querySelector('.js-img-coffee-cup');



document.onmousemove = (e)=>{
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;

    jsImgCoffeeCup.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
	jsContent.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
   
};
function plus() {
	document.getElementById('kk').innerHTML = number[0]++ + 1;
}
function minus() {
	if (number[0] > 0) {
		document.getElementById('kk').innerHTML = number[0]-- - 1;
	} else if (number[0] == -1) {
		number.splice(0, 1, 0);
		document.getElementById('kk').innerHTML = 0;
	} else {
		document.getElementById('kk').innerHTML = 0;
	}
}
const number = [ parseInt(document.getElementById('kk').innerHTML) ];
// const notify = [ parseInt(document.getElementById('notify').innerHTML) ];

function cart() {
	if (number[0] > 0) {
		document.getElementById('notify').innerHTML = number[0];
		document.getElementById('notify').style.display = 'inline';
		number.splice(0, 1, 0);
		document.getElementById('kk').innerHTML = 0;
	}
}
function img() {
	document.getElementById('img3').src = 'images/image-product-2.jpg';
	document.getElementById('img33').src = 'images/image-product-2.jpg';
	document.getElementById('lol').classList.add('active');
	document.getElementById('lola').classList.remove('active');
	document.getElementById('lolc').classList.remove('active');
	document.getElementById('lold').classList.remove('active');
}
function imga() {
	document.getElementById('img3').src = 'images/image-product-1.jpg';
	document.getElementById('img33').src = 'images/image-product-1.jpg';
	document.getElementById('lola').classList.add('active');
	document.getElementById('lol').classList.remove('active');
	document.getElementById('lolc').classList.remove('active');
	document.getElementById('lold').classList.remove('active');
}
imga();
function imgc() {
	document.getElementById('img3').src = 'images/image-product-3.jpg';
	document.getElementById('img33').src = 'images/image-product-3.jpg';
	document.getElementById('lolc').classList.add('active');
	document.getElementById('lol').classList.remove('active');
	document.getElementById('lola').classList.remove('active');
	document.getElementById('lold').classList.remove('active');
}
function imgd() {
	document.getElementById('img3').src = 'images/image-product-4.jpg';
	document.getElementById('img33').src = 'images/image-product-4.jpg';
	document.getElementById('lold').classList.add('active');
	document.getElementById('lola').classList.remove('active');
	document.getElementById('lol').classList.remove('active');
	document.getElementById('lolc').classList.remove('active');
}
function cartopen() {
	let x = document.getElementById('caco');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}
let margin = 0;

function modal() {
	document.getElementById('onoff').classList.add('activer');
}
function removemodal() {
	document.getElementById('onoff').classList.remove('activer');
}
function next() {
	if (margin > -300) {
		document.getElementById('img33').style.marginRight = `${(margin -= 100)}%`;
		console.log(margin)
	} else if(margin === -300) {
		margin = 0
		document.getElementById('img33').style.marginRight = '0%';
		console.log(margin)
	}
}
function prev() {
	// document.getElementById('img33').style.marginRight = `${(margin += 100)}%`;
	if (margin > 0) {
		document.getElementById('img33').style.marginRight = `${(margin += 100)}%`;
	} else {
		document.getElementById('img33').style.marginRight = '0%';
	}
}

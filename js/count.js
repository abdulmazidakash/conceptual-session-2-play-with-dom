let sum = 0;
function clickMe(){
	// console.log('clicked');
	const h2 = document.getElementById('count');
	sum += 1;
	h2.innerText = sum;
}

const minusBtn = document.getElementById('minus-btn');

minusBtn.addEventListener('click', function(){
	const h2 = document.getElementById('count');
	sum -= 1;
	h2.innerText = sum;
})
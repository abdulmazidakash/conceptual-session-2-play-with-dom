// console.log('oi mama pls....');

//single element selector-----------
const header = document.getElementById('header');
// console.log(header);
header.style.color = 'red';

const uniquePara = document.querySelector('#unique-para');
// console.log(uniquePara);
uniquePara.style.border = '2px solid red';

const another = document.querySelector('.info');
// console.log(another);

//multiple element selector --------------
const myTags = document.getElementsByTagName('p');
// console.log(myTags[0]);
for (let i = 0; i < myTags.length; i++){
	// console.log(myTags[i]);
	const element = myTags[i];
	element.style.backgroundColor = 'green';
	element.style.fontSize = '40px';
}

const allClassElements = document.getElementsByClassName("info");
// console.log(allClassElements);
// home work use for loop
for (let element of allClassElements){
	// console.log(element);
	element.style.backgroundColor = 'green';
}

const myParas = document.querySelectorAll('.info');
console.log(myParas);

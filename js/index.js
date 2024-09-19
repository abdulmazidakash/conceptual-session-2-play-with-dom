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
	// element.style.backgroundColor = 'green';
	element.style.border = '2px solid blue';
}

const myParas = document.querySelectorAll('.info');
// console.log(myParas);



//nodes vs elements in dom --------------

//childNodes
//children
//parentElement
//nextElementSibling
//previousElementSibling

const container2 = document.querySelector('.container2');
// console.log(container2.childNodes);
// console.log(container2.children);

const item2 = document.getElementById('item-2');
// console.log(item2);
const parent = item2.parentElement.children;
// console.log(parent);

const nextElementSibling = item2.nextElementSibling;
// console.log(nextSibling);
const previousSibling = item2.previousElementSibling;
// console.log(previousSibling);

const nextSomething = item2.nextSibling;

// console.log(nextElementSibling);
// console.log(nextSomething);


//innerText || innerHTML || textContent--------------

const container4 = document.querySelector('.container4');
// console.log(container4);
// console.log(container4.innerText);
// console.log(container4.innerHTML);
// console.log(container4.textContent);


//setAttribute() || getAttribute() || removeAttribute()
const myBtn = document.getElementById('myButton');
myBtn.setAttribute('class', 'btn btn-primary');
myBtn.setAttribute('disabled', true);
myBtn.removeAttribute('disabled');

const myLink = document.getElementById('myLink');
const link = myLink.getAttribute('href');
// console.log(link);

//creating an element and append || add class name || classList[add(), remove()] || appendChild vs append || remove() or removeChild()

const container5 = document.querySelector('.container5');
const p = document.createElement('p');
// console.log(p);
p.innerText = 'I am created by js dynamically';
container5.appendChild(p);
// console.log(p);

const h1 = document.createElement('h1');
h1.textContent = 'I am h1, and i can inject to html through js';
// h1.classList.add('common-class');
h1.className = 'common-class';
h1.classList.remove('common-class');

// container5.appendChild(h1);
// console.log(h1);
container5.append(h1, 'habijabiiii....')


//remove and remove child ----------------
// container5.remove();

container5.removeChild(h1);
container5.removeChild(p);

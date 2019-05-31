const input = document.querySelector('.result');
const zero = document.querySelector('.is-zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const ten = document.querySelector('.ten');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const times = document.querySelector('.times');
const divide = document.querySelector('.divide');
const clear = document.querySelector('.is-clear');
const comma = document.querySelector('.comma');
const equals = document.querySelector('.is-equals');
const dontRepeat = operator => {
	const symbols = /[\/*\-+.]/;
	input.value[input.value.length - 1].match(symbols) ? input.value += '' : input.value += operator;
};

clear.addEventListener('click', () => {
	input.value = '';
});
zero.addEventListener('click', () => {
	input.value == 0 ? input.value = '' : input.value += zero.value;
});
one.addEventListener('click', () => {
	input.value += one.value;
});
two.addEventListener('click', () => {
	input.value += two.value;
});
three.addEventListener('click', () => {
	input.value += three.value;
});
four.addEventListener('click', () => {
	input.value += four.value;
});
five.addEventListener('click', () => {
	input.value += five.value;
});
six.addEventListener('click', () => {
	input.value += six.value;
});
seven.addEventListener('click', () => {
	input.value += seven.value;
});

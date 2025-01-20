"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(dividend, devisor) {
  return dividend % devisor;
}

console.log(returnTheRemainder(5,4));

function checkIfEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    value % 2 !== 0;
  return false;
  }
}

console.log(checkIfEven(47));

function getTheFourthElement () {
    return lostNumbers;
}

console.log(lostNumbers[3]);
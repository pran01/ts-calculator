"use strict";
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");
let addBtn = document.querySelector("#addBtn");
let subBtn = document.querySelector("#subBtn");
let divBtn = document.querySelector("#divBtn");
let mulBtn = document.querySelector("#mulBtn");
let clearBtn = document.querySelector("#clear-btn");
function handleAdd() {
    if ((num1 === null || num1 === void 0 ? void 0 : num1.value) === "" || (num2 === null || num2 === void 0 ? void 0 : num2.value) === "" || (!/^[0-9]*&/.test(num1 === null || num1 === void 0 ? void 0 : num1.value)) || (!/^[0-9]*&/.test(num2 === null || num2 === void 0 ? void 0 : num2.value))) {
        result.classList.add("text-red-500");
        result.value = "Enter both valid values";
    }
    else {
        result.classList.remove("text-red-500");
        result.classList.add("text-black");
        let firstNum = +(num1 === null || num1 === void 0 ? void 0 : num1.value);
        let secondNum = +(num2 === null || num2 === void 0 ? void 0 : num2.value);
        result.value = `${firstNum + secondNum}`;
    }
}
function handleSub() {
    if ((num1 === null || num1 === void 0 ? void 0 : num1.value) === "" || (num2 === null || num2 === void 0 ? void 0 : num2.value) === "" || (!/^[0-9]*&/.test(num1 === null || num1 === void 0 ? void 0 : num1.value)) || (!/^[0-9]*&/.test(num2 === null || num2 === void 0 ? void 0 : num2.value))) {
        result.classList.add("text-red-500");
        result.value = "Enter both valid values";
    }
    else {
        result.classList.remove("text-red-500");
        result.classList.add("text-black");
        let firstNum = +(num1 === null || num1 === void 0 ? void 0 : num1.value);
        let secondNum = +(num2 === null || num2 === void 0 ? void 0 : num2.value);
        result.value = `${firstNum - secondNum}`;
    }
}
function handleDiv() {
    if ((num1 === null || num1 === void 0 ? void 0 : num1.value) === "" || (num2 === null || num2 === void 0 ? void 0 : num2.value) === "" || (!/^[0-9]*&/.test(num1 === null || num1 === void 0 ? void 0 : num1.value)) || (!/^[0-9]*&/.test(num2 === null || num2 === void 0 ? void 0 : num2.value))) {
        result.classList.add("text-red-500");
        result.value = "Enter both valid values";
    }
    else {
        result.classList.remove("text-red-500");
        result.classList.add("text-black");
        let firstNum = +(num1 === null || num1 === void 0 ? void 0 : num1.value);
        let secondNum = +(num2 === null || num2 === void 0 ? void 0 : num2.value);
        if (secondNum != 0)
            result.value = `${firstNum / secondNum}`;
        else {
            result.classList.remove("text-red-500");
            result.value = "Cannot divide by zero";
        }
    }
}
function handleMul() {
    if ((num1 === null || num1 === void 0 ? void 0 : num1.value) === "" || (num2 === null || num2 === void 0 ? void 0 : num2.value) === "" || (!/^[0-9]*&/.test(num1 === null || num1 === void 0 ? void 0 : num1.value)) || (!/^[0-9]*&/.test(num2 === null || num2 === void 0 ? void 0 : num2.value))) {
        result.classList.add("text-red-500");
        result.value = "Enter both valid values";
    }
    else {
        result.classList.remove("text-red-500");
        result.classList.add("text-black");
        let firstNum = +(num1 === null || num1 === void 0 ? void 0 : num1.value);
        let secondNum = +(num2 === null || num2 === void 0 ? void 0 : num2.value);
        result.value = `${firstNum * secondNum}`;
    }
}
function handleClearance() {
    num1.value = "";
    num2.value = "";
    result.value = "";
}
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', handleAdd);
subBtn === null || subBtn === void 0 ? void 0 : subBtn.addEventListener('click', handleSub);
mulBtn === null || mulBtn === void 0 ? void 0 : mulBtn.addEventListener('click', handleMul);
divBtn === null || divBtn === void 0 ? void 0 : divBtn.addEventListener('click', handleDiv);
clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.addEventListener('click', handleClearance);

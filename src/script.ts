let num1=<HTMLInputElement>document.querySelector("#num1");
let num2=<HTMLInputElement>document.querySelector("#num2");
let result=<HTMLInputElement>document.querySelector("#result");
let addBtn=document.querySelector("#addBtn");
let subBtn=document.querySelector("#subBtn");
let divBtn=document.querySelector("#divBtn");
let mulBtn=document.querySelector("#mulBtn");
let clearBtn=document.querySelector("#clear-btn");

function handleAdd(){
    if(num1?.value===""||num2?.value===""||(!/^[0-9]*&/.test(num1?.value))||(!/^[0-9]*&/.test(num2?.value))){
        result.classList.add("text-red-500");
        result.value="Enter both valid values";
    }
    else{
        result.classList.remove("text-red-500");
        result.classList.add("text-black");
    let firstNum:number= +num1?.value;
    let secondNum:number= +num2?.value;

    result.value=`${firstNum+secondNum}`;
    }
}
function handleSub(){
    if(num1?.value===""||num2?.value===""||(!/^[0-9]*&/.test(num1?.value))||(!/^[0-9]*&/.test(num2?.value))){
        result.classList.add("text-red-500");
        result.value="Enter both valid values";
    }
    else{
        result.classList.remove("text-red-500");
        result.classList.add("text-black");
    let firstNum:number= +num1?.value;
    let secondNum:number= +num2?.value;

    result.value=`${firstNum-secondNum}`;
    }
}
function handleDiv(){
    if(num1?.value===""||num2?.value===""||(!/^[0-9]*&/.test(num1?.value))||(!/^[0-9]*&/.test(num2?.value))){
        result.classList.add("text-red-500");
        result.value="Enter both valid values";
    }
    else{
        result.classList.remove("text-red-500");
        result.classList.add("text-black");
        let firstNum:number= +num1?.value;
        let secondNum:number= +num2?.value;
        if(secondNum!=0)
        result.value=`${firstNum/secondNum}`;
        else{
        result.classList.remove("text-red-500");
        result.value="Cannot divide by zero";
        }
    }
}
function handleMul(){
    if(num1?.value===""||num2?.value===""||(!/^[0-9]*&/.test(num1?.value))||(!/^[0-9]*&/.test(num2?.value))){
        result.classList.add("text-red-500");
        result.value="Enter both valid values";
    }
    else{
        result.classList.remove("text-red-500");
        result.classList.add("text-black");

    let firstNum:number= +num1?.value;
    let secondNum:number= +num2?.value;

    result.value=`${firstNum*secondNum}`;
    }
}
function handleClearance(){
    num1.value="";
    num2.value="";
    result.value="";
}

addBtn?.addEventListener('click',handleAdd);
subBtn?.addEventListener('click',handleSub);
mulBtn?.addEventListener('click',handleMul);
divBtn?.addEventListener('click',handleDiv);
clearBtn?.addEventListener('click',handleClearance);

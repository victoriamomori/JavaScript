"use strict";

function insert(num){
    document.form.textView.value += num;
}

function clean(){
    document.form.textView.value = "";
}

function back(){
    let len = document.form.textView.value;
    document.form.textView.value = len.substring(0, len.length-1);
}

function equal(){
    let answer = document.form.textView.value;
    if (answer) {
        document.form.textView.value = eval(answer);
    }
}

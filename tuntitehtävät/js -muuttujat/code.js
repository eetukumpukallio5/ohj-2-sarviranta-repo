"use strict";

document.getElementById("calc").addEventListener("click", () => {
    let pythonInput = document.querySelector("#python");
    let projectInput = document.querySelector("#project");
    let mathInput = document.querySelector("#math");

    let python = parseFloat(pythonInput.value);
    let project = parseFloat(projectInput.value);
    let math = parseFloat(mathInput.value);

    let average = (python + project + math) / 3;

    console.log(average);

})
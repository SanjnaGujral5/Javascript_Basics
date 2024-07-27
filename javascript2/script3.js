let divs = document.querySelectorAll(".div");
console.log(divs[0]);
divs[0].innerText = "new unique value one";
console.log(divs[1]);
divs[1].innerText = "new unique value two";
console.log(divs[2]);
divs[2].innerText = "new unique value three";
let idx = 1;
for(let div of divs) {
    // console.log(div.innerText);
    div.innerText = `new unique value ${idx}`;
    idx++;
}
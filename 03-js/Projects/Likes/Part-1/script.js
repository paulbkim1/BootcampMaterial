function count(thiscount) {
    var number = document.querySelector("#" + thiscount);
    var newnum = number.innerText
    newnum++
    number.innerText = newnum
}
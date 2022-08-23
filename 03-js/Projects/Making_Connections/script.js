console.log("page loaded...");

function editname(namechange) {
    var nameid = document.querySelector("#" + namechange);
    nameid.innerText = "Paul Kim";
}

var connectionrequest = document.querySelector("#requests")
var connectionsamount = document.querySelector("#connections")

function add(addid) {
    document.querySelector("#" + addid).remove();
    connectionsamount.innerText++;
    connectionrequest.innerText--;
}

function remove(addid) {
    document.querySelector("#" + addid).remove();
    connectionrequest.innerText--;
}
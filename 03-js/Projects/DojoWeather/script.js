function remove(cookiename) {
    var cookieremove = document.querySelector(cookiename)
    cookieremove.remove()
}

function tempchange(currenttemp) {
    for (let i = 1; i <= 8; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempval = tempSpan.innerText;
        console.log()
    }
}
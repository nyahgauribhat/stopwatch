var count = 0;

function start() {
     id = setInterval(function () {
        count = count + 1;
        document.getElementById("timer").innerText = count;
    }, 1000);

}

function stopalerts() {
    console.log("we are inside sa");
    console.log(id);
    clearInterval(id);
}
function reset() {
    clearInterval(id);
    count = 0;
    document.getElementById("timer").innerText = count;
}


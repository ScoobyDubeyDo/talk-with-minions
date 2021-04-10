alert("You can only use the app for 5 times in an hour, so use is wisely.");
var btnCon = document.querySelector("#con-btn");
var iptArea = document.querySelector("#input-area");
var screen = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/minion.json";

function urlEdit(input) {
    return url + "?" + "text=" + input;
}

btnCon.addEventListener("click", () => {
    var conv = (one) => one.json();
    var disp = (two) => {
        var returned = two.contents.translated;
        screen.innerText = returned;
    };
    fetch(urlEdit(iptArea.value))
        .then(conv)
        .then(disp)
        .catch((err) => {
            alert(
                "you have used the app for the fifth time, come after an hour."
            );
            return console.log("error came!!", err);
        });
});

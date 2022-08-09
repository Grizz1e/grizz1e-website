const quoteField = document.getElementById('quote')
const authorField = document.getElementById('author')

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/json/quotes.json", function (text) {
    const data = JSON.parse(text);
    const quote = data[Math.floor(Math.random() * data.length)]
    quoteField.textContent = '"' + quote.q + '"';
    authorField.textContent = "-" + quote.a;
});
let arrayNumbersForReserv = [1,2,3,4,5];
arrayNumbersForReserv.reverse();


let outputDiv = document.getElementById("output");

arrayNumbersForReserv.forEach(arrayRevers=> {
    outputDiv.innerHTML += arrayRevers + "<br>";
});

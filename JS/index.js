function forclear() {
    const content = Element.innerHTML;
    document.getElementById("output").content = "0";
    console.log("ça fonctionne")
}
console.log(forclear);

function removeZero() {
    const value = document.getElementById("output").innerHTML;
    if (value == "5") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}



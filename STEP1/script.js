
 function validateForm() {
    var name = document.getElementById("name").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (name === "" || weight === "" || height === "") {
        alert("All fields are required.");
        return false;
    }

    if (isNaN(parseFloat(weight)) || isNaN(parseFloat(height))) {
        alert("Weight and height must be numbers.");
        return false;
    }

    return true;
}

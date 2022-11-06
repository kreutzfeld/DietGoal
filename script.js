function bmiCALC(){

    var BMIage = document.getElementById("age").value;
    var BMIheight = document.getElementById("height").value;
    var BMIweight = document.getElementById("weight").value;
    var BMItotal = +BMIage + +BMIheight + +BMIweight;
    document.getElementById("bmi").innerHTML = BMItotal;
}

function myFunction() {
    var price = document.getElementById("inputProductPrice").value;
    var gst = document.getElementById("inputGST").value;
    var delivery = document.getElementById("inputDelivery").value;
    var total = +price + +gst + +delivery;
    document.getElementById("totalPrice").innerHTML = total;

}
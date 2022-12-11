function bmiCALC() {
    var bmiage = document.getElementById("age").value;
    var bmiheight = document.getElementById("height").value;
    var bmiweight = document.getElementById("weight").value;
    var bmitotal = Math.round(+bmiweight / ((+bmiheight / 100) * (+bmiheight / 100)));
    document.getElementById("bmi").innerText = bmitotal;
}

function bulkingCALC() {

    var bulkingweight = document.getElementById("weight").value;
    var bulkingKcal = Math.round(+bulkingweight * 50);
    var bulkingKcalProt = Math.round(+bulkingKcal * 0.30);
    var bulkingKcalCarbs = Math.round(+bulkingKcal * 0.45);
    var bulkingKcalFat = Math.round(+bulkingKcal * 0.25);
    var bulkingProtein = Math.round(+bulkingKcalProt / 4);
    var bulkingCarbs = Math.round(+bulkingKcalCarbs / 4);
    var bulkingFat = Math.round(+bulkingKcalFat / 9);

    document.getElementById("bulkingkcal").innerText = bulkingKcal;
    document.getElementById("bulkingkcalprot").innerText = bulkingKcalProt;
    document.getElementById("bulkingkcalcarbs").innerText = bulkingKcalCarbs;
    document.getElementById("bulkingkcalfat").innerText = bulkingKcalFat;
    document.getElementById("bulkingprotdaily").innerText = bulkingProtein;
    document.getElementById("bulkingcarbsdaily").innerText = bulkingCarbs;
    document.getElementById("bulkingfatdaily").innerText = bulkingFat;
}

function cuttingCALC() {

    var cuttingweight = document.getElementById("weight").value;
    var cuttingKcal = Math.round(+cuttingweight * 30);
    var cuttingKcalProt = Math.round(+cuttingKcal * 0.30);
    var cuttingKcalCarbs = Math.round(+cuttingKcal * 0.45);
    var cuttingKcalFat = Math.round(+cuttingKcal * 0.25);
    var cuttingProtein = Math.round(+cuttingKcalProt / 4);
    var cuttingCarbs = Math.round(+cuttingKcalCarbs / 4);
    var cuttingFat = Math.round(+cuttingKcalFat / 9);

    document.getElementById("cuttingkcal").innerText = cuttingKcal;
    document.getElementById("cuttingkcalprot").innerText = cuttingKcalProt;
    document.getElementById("cuttingkcalcarbs").innerText = cuttingKcalCarbs;
    document.getElementById("cuttingkcalfat").innerText = cuttingKcalFat;
    document.getElementById("cuttingprotdaily").innerText = cuttingProtein;
    document.getElementById("cuttingcarbsdaily").innerText = cuttingCarbs;
    document.getElementById("cuttingfatdaily").innerText = cuttingFat;
}

function selectdiet() {
    var dietselected = document.getElementById("diettype").value;
    console.log(dietselected);
    if (dietselected === "bulkingdiet") {
        document.getElementById("boxcutting").style.display = "none";
        document.getElementById("boxbulking").style.display = "block";
    } else if (dietselected === "cuttingdiet") {
        document.getElementById("boxbulking").style.display = "none";
        document.getElementById("boxcutting").style.display = "block";
    } else {
        document.getElementById("boxcutting").style.display = "none";
        document.getElementById("boxbulking").style.display = "none";

    }
}

function foodSugestion(){
    
}

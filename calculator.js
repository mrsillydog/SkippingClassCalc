// Written by Ian Adams, Fall 2020
// is it kind of unnecessary to have an external js doc with a single function? yes
// is it useful for learning purposes? yes

function calculate() {
    var tuition = document.getElementById("tuition").value;
    var credits = document.getElementById("credits").value;
    var classCredits = document.getElementById("classCredits").value;
    var timesPerWeek = document.getElementById("timesPerWeek").value;
    if (tuition && credits && classCredits && timesPerWeek) {
        var moneyWasted = tuition / credits * classCredits / (timesPerWeek * 14);
        moneyWasted = Number(Math.round(moneyWasted+'e'+2)+'e-'+2);
        document.getElementById("results").innerHTML = "Assuming a 14 week semester, you are wasting $" + moneyWasted + " per class you skip.";
    } else {
        document.getElementById("results").innerHTML = "Please be sure to enter a valid value in all fields.";
    }
}
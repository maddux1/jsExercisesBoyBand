var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var boyBandsList = document.getElementById("boyBands");
for ( var i = 0; i < bands.length; i++ ) { 
  boyBandsList.innerHTML += "<p>" + bands[i] + "</p>";
}

var veggiesList = document.getElementById("veggies");
for ( var i = 0; i <vegetables.length; i++ ) {
  veggiesList.innerHTML += "<p>" + vegetables[i] + "</p>";
} 
///////////for loop


var countryCity =
{
    east: ["kolkata", "guwahati", "darjeeling"],
    west: ["mumbai", "pune", "ahmedabad"],
    north: ["delhi", "noida", "lucknow"],
    south: ["chennai", "banglore", "hyderabad"]
}
for (var i = 0; i < countryCity.east.length; i++) {
    console.log(countryCity.east[i])
}


/////////for in loop
//object


var countryCity =
{
    east: ["kolkata", "guwahati", "darjeeling"],
    west: ["mumbai", "pune", "ahmedabad"],
    north: ["delhi", "noida", "lucknow"],
    south: ["chennai", "banglore", "hyderabad"]
}

for (let key in countryCity) {
    console.log(countryCity)
    console.log(key)
    console.log(countryCity.east[2], countryCity.south[0])

}


////////// for of 
//array

var city = ["kolkata", "guwahati", "darjeeling", "mumbai", "pune",
    "ahmedabad", "delhi", "noida", "lucknow", "chennai", "banglore", "hyderabad"]

for (let index of city) {
    console.log(city[4])
    console.log(city.length)
}

/////// for each

let arr = [1,3,5,7,9]
arr.forEach(function(num){
    console.log(arr+" odd numbers");
});
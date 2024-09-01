function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var weeks = yearsLeft * 52;
    var months = yearsLeft * 12;
    var days = yearsLeft * 365;

    console.log("You have "+ days + " days, " + weeks + " weeks and "+ months+ " months left");
}

lifeInWeeks(34);

function BMI(weight,height) {

    return weight/(height ** 2);

}

var myBMI = BMI(82,1.78);
console.log(myBMI)
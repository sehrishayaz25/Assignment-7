// CHAPTER 38 - 42
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
function power(a, b) {
    var result = 1;
    for (var count = 0; count < b; count++)
        result *= a
    return result;
}

console.log(power(2, 10));

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …
function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

//3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
//area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions
function area(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
}
console.log(area(2, 4, 6))

//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
//marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

var sub1 = prompt("Enter marks of 1st subject: ");
var sub2 = prompt("Enter marks of 2nd subject: ");
var sub3 = prompt("Enter marks of 3rd subject: ");

function main() {
    document.write("average: " + average());
    document.write("Percentage: " + percentage());
}

function average() {
    var avg = sub1 + sub2 + sub3;
}

function percentage() {
    var per = ((sub1 + sub2 + sub3) / 300) * 100;
}

//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
var str = "a quick brown fox jump over a lazy dog";

function main() {
    var index = str.substring(0, str.indexOf('b'));
    console.log(index);
}

//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
var str = prompt("Enter a string: ");

function removeVowels() {
    return str.replace(/[aeiou]/gi, '');
    console.log(str);
}

//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
//“Pleases read this application and give me gratuity”
//Such occurrences are ea, ea, ui.
function vowelOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;

    switch (str) {
        case 'ea':
            count++;
        case 'ui':
            count++
        case 'io':
            count++
        default:
            return 0;
    }
    console.log(count);
}

vowelOccurrences();

//8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
var distance = prompt(parseInt("Enter distance in KM: "));

function main() {
console.log("distance in meters: "+meters());
console.log("distance in feets: "+feets())
console.log("distance in inches: "+inches())
console.log("distance in centimeters: "+centiMeters())
}

function meters(distance) {
    var m = distance * 1000;
    console.log(m);
}

function feets(distance) {
    var m = distance * 3280.84;
    console.log(m);
}

function inches(distance) {
    var m = distance * 39370.08;
    console.log(m);
}

function centiMeter(distance) {
    var m = distance * 1000 * 100;
    console.log(m);
}

//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
function overTimepay(){
    var time =prompt("Enter the time employee worked in hr: ");

    if(time>40){
        var overTime = time-40;
    }
    else{
        alert("Enter worke hour above then 40 ");
    }
    var overTimepay = 12*overTime;
    console.log("Over time pay is "+overTime);
}

overTimepay()

//10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
function currencyNote(){
    var amount = prompt("enter amount: ");

    var hundredNotes = amount / 100;
    var fiftyNotes = (amount % 100) / 50;
    var tenNotes =(((amount % 100) % 50) / 10);
    var remainingAmount = (((amount % 100) % 50) % 10);

    document.write("Notes of Hundreds: "+hundredNotes);
    document.write("Notes of Fifties: "+fiftyNotes);
    document.write("Notes of Tens: "+tenNotes);
    document.write("Remaining Amount: "+remainingAmount);
}
currencyNote()
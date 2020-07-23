alert("Error!Please enter a valid password")
alert("Welcome to js land...\nHappyCoding!")
alert("Welcome to js land...")
alert("HappyCoding!")

// Chapter 2


var username

var myName ="Zainanis"

var message ="Hello World"

alert(message)

var studentName = prompt("Enter Name")
alert(studentName)

var age = prompt("Enter age")
alert(age)

var course = prompt("Enter course")
alert(course)

var pizza ="PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

var email ="Zainanis99@gmail.com"

alert("My email address is "+email)

var book ="A smarter way to learn JavaScript"

alert("I am trying to learn from the Book "+book)


document.write("yah! I can write HTML content through Javavscript")

var des ="???????????????????????"

alert(des)


//Chapter3


var age = prompt("Enter age")
alert(age)

var birthYear=2000
document.write("My birth Year is "+birthYear)
document.write("<br>")
document.write(" Data type of my declared variable in number")

var name = prompt("Enter Name")
var prod = prompt("Enter Product")
var quat = prompt("Enter Quantity")
document.write(name+" ordered "+quat+" "+prod+" on XYZ Clothing store")

//chapte 4

var name,middle,last
var first,second,third,fourth,fifth

document.write("<h1>Rules for naming JS variables</h1>.<br> Variable names can only contain number,$, and _.For example $my_1stVariablev <br>Variables must begin with anumber,$, or _. For example $name, _name or name<br>Variable names are case Sensitive<br>Variable names should not be JS Keyword")

//chapter5

var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = (+num1)+(+num2)

document.write("sum of "+num1+" and "+num2+" is " +sum)

var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = num1-num2

document.write("sub of "+num1+" and "+num2+" is " +sum)

var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = num1*num2

document.write("multiply of "+num1+" and "+num2+" is " +sum)


var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = num1/num2

document.write("division of "+num1+" and "+num2+" is " +sum)

var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = num1%num2

document.write("modul of "+num1+" and "+num2+" is " +sum)

var a=5
document.write("Valueafter variable declaration is undefined <br>")
document.write("Initialvalue: "+a+"<br>")
a++
document.write("Value after increment is: "+a+"<br>")
a=a+7
document.write("Value after addition is:  "+a+"<br>")
a--
document.write("Value after decrement is:  "+a+"<br>")
a=a%3
document.write("The remainder is :  "+a+"<br>")

var price =600
var qua=5

document.write("Total cost to buy "+qua+" tickets o a movie is "+(price*qua)+"PKR")



var num =  prompt("Enter Num1")
document.write("Table of "+num+"<br>")
for( var i=1;i<11;i++){

    document.write(num+" x "+i+" = "+(num*i)+"<br>")
  

}

var c=25
var f=70

document.write(c+"oC is"+((c*(9/5))+32)+"oF<br>")
document.write(f+"oF is"+((f-32)*(5/9))+"oC")



var price1 =650

var qua1=3
var price2 =100
var qua2=7
var charges=100
var sum = ((price1*qua1)+(price2*qua2)+charges)
document.write("price of item 1 is "+price1+"<br>Quantity of item 1 is "+qua1+"<br>price of item 2 is "+price2+"<br>Quantity of item 2 is "+qua2+"<br>Shipping Charges"+charges+"<br><br> Total cost of your order is "+sum)


var tMark = prompt("Total Marks")
var oMark = prompt("Obtained Marks")
var perc =(oMark/tMark)*100

document.write("Total Marks : "+tMark+"<br>Marks Obtained : "+oMark+"<br> Percentage : "+perc)


var total =(10*104.80)+(25*28)

document.write("Total Currency in PKR : "+total)


var cYear = prompt("Current Year")
var bYear = prompt("Birth Year")
document.write("Current Year :"+cYear)
document.write("<br>Birth Year :"+bYear)
document.write("<br>Your age is :"+(cYear-bYear))

var radius = prompt("Enter radius")
var v= 3.142
document.write("Radius of the cirsle :"+radius)
document.write("<br>Circumference of the cirsle :"+(radius*2*v))
document.write("<br>Area of the cirsle :"+(radius*radius*v))

var snack ="hotdog"
var age =20
var maxAge=200
var est = 5
var total=(5*365)*(200-20)
document.write("Favorite snack: "+snack)
document.write("<br>Current age: "+age)
document.write("<br>Estimated age: "+maxAge)
document.write("<br>Amount of snack per day: "+est)
document.write("<br>You will need "+total+ " to last you until the ripe old age of "+maxAge)



//Chapter 6-9

var num=10

document.write("Result")
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a++ is "+ ++num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a++ is "+ ++num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a-- is "+ --num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a-- is "+ --num)
document.write("<br>The value of a is "+num)

var name=prompt("Enter Name")

alert("Welcome " +name)


var num =  prompt("Enter Num1")
num=num*1
if(num!=0){
document.write("Table of "+num+"<br>")
for( var i=1;i<11;i++){

    document.write(num+" x "+i+" = "+(num*i)+"<br>")
  

}
}
else
{
    document.write("Table of 5<br>")
    for( var i=1;i<11;i++){
    
        document.write("5 x "+i+" = "+(5*i)+"<br>")
      
    
    }

}

var sub1 = prompt("Enter Subject Name")
var sub2 = prompt("Enter Subject Name")
var sub3 = prompt("Enter Subject Name")
var total = 100
var mSub1 = prompt("Enter Subject Marks for "+sub1)
var mSub2 = prompt("Enter Subject Marks for" +sub2)
var mSub3 = prompt("Enter Subject Marks for "+sub3)

var percSub1 =(mSub1/total)*100
var percSub2 =(mSub2/total)*100
var percSub3 =(mSub3/total)*100
var subt=++mSub1 + ++mSub3 + ++mSub2
var subt=subt-3
--mSub1
--mSub2
--mSub3
var subtperc=(subt/300)*100


document.write("<table><tr> <td>"+sub1+"</td> <td>"+total+"</td> <td>"+mSub1+"</td> <td>"+percSub1+"%</td> </tr>   <tr> <td>"+sub2+"</td> <td>"+total+"</td> <td>"+mSub2+"</td> <td>"+percSub2+"%</td> </tr>   <tr> <td>"+sub3+"</td> <td>"+total+"</td> <td>"+mSub3+"</td> <td>"+percSub3+"%</td> </tr> <tr> <td></td> <td>"+total*3+"</td> <td>"+subt+"</td> <td>"+subtperc+"%</td> </tr> </table>")

//Chapter9-11

var city=prompt("Enter current city")

if(city=="Karachi"||"karachi"){

    alert("Welcome to the city of lights")
}


var Gender=prompt("Enter Gender")

if(Gender=="male"){

    alert("Good Morning Sir ")
}
else if(Gender=="female"){

    alert("Good Morning Ma'am ")
}


var Color=prompt("Enter Color")

if(Color=="red"){

    alert("Must Stop ")
}
else if(Color=="yellow"){

    alert("Ready to move")
}
else if(Color=="green"){

    alert(" move now")
}



var fuel=prompt("Enter fuel in L")

if(fuel<0.25){

    alert("Please refill the fuel in your car")
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
    alert("True");
    }
    else if (false){
    alert("False");
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
        }    




var total = 300
var mSub1 = prompt("Enter Subject Marks" )
var mSub2 = prompt("Enter Subject Marks ")
var mSub3 = prompt("Enter Subject Marks" )


var subt=++mSub1 + ++mSub3 + ++mSub2
var subt=subt-3
--mSub1
--mSub2
--mSub3
var subtperc=(subt/300)*100
var remakrs
var Grade
if(subtperc>=80){

    remakrs="Excellent"
    Grade="A-one"

}
else if(subtperc>=70)
{

    remakrs="Good"
    Grade="A"

}
else if(subtperc>=60)
{

    remakrs="you need to improve"
    Grade="B "

}
else{

    remakrs="Sorry"
    Grade="Fail"

}

document.write("Total Marks : "+total+"<br>Marks Obtained : "+subt+"<br>Percentage : "+subtperc+"<br>Grade : "+Grade+"<br>Remarks : "+remakrs)



var a =3

var guess=prompt("Enter number b/w 1-10")

if(a==guess){

    document.write("Bingo! Correct answer")
}
else if(a==(guess-1)||a==(guess+1)){

    document.write("Close enough to the correct answer")


}

var a =prompt("Enter number")

var b=a%3

if(b==0){
document.write(a+"is  divisible by 3")
}
else{
    document.write(a+"is not divisible by 3")
}


var a =prompt("Enter number")

var b=a%2

if(b==0){
document.write(a+"is even")
}
else{
    document.write(a+"is odd")
}

var T=prompt("Enter temp")

if(T>40){

    alert("It is too hot outside")
}
else if(T>30){
    alert("The Weather today is Normal.")
}
else if(T>20){
    alert("Today’s Weather is cool")
}
else if(T>10){
    alert("OMG! Today’s weather is so Cool.")
}


var num1 =  prompt("Enter Num1")
num1++
num1--
var num2 = prompt("Enter Num2")
num2++
num2--
var opp = prompt("Enter Operator")
if(opp=="+"){

    document.write(num1+num2)
}
else if(opp=="-"){
    document.write(num1-num2)
}
else if(opp=="*"){
    document.write(num1*num2)
}
else if(opp=="/"){
    document.write(num1/num2)
}
else if(opp=="%"){
    document.write(num1%num2)
}


var a =prompt("Enter char")

if(a<="Z" && a>="A"){

    document.write("it is upper case")
}
else if(a>="a" && a<="z"){

    document.write("it is Lower case")
}

var a =prompt("Enter Number")
var b =prompt("Enter Number")

if(a>b){
    document.write(a)
}
else if(a<b){
    document.write(b)
}else{
    document.write("Both are equal")
}



var a =prompt("Enter Number")


if(a>0){
    document.write("Number is positive ")
}
else if(a<0){
    document.write("Number is Negative")
   
}else{
    document.write("Number is 0")

}


var a =prompt("Enter Number")


if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u"){
    document.write("True")
}
else{
    document.write("False")

}


var pass="Password123"

var Cpass = prompt("Enter Password")

if(Cpass==""){

    alert("Enter Pass")
}
else if(pass==Cpass){

    alert("Correct! The password you  entered matches the original password")
}
else{
    alert("Incorrect password")
}

var hour = 13;
if (hour < 18) {
greeting = "Good day"
}
else{
greeting = "Good evening"
}

var time = prompt("Enter Time")
if (time>=0000&&time<1200){

    alert("Good Morning")
}
else if(time>=1200&&time<1700){
    alert("Good Afternoon")
}
else if(time>=1700&&time<2100){
    alert("Good Evening")
}
else if(time>=2100&&time<2359){
    alert("Good Night")
}


//chapter 14-16

studentName = new Array();
studentname=[]
Name=["Table","Books"]
Numbers=[1,2,3]
bol=[true,false]
mixarry=["Cars",1,true]
eduQual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("Qualifications<br>")
for(i=0;i<8;i++){

    t=i+1
    document.write(t +")"+eduQual[i]+"<br>")
}



Name=[]
marks=[]
for(i=0;i<3;i++){

        name[i]=prompt("Enter Name")
        marks[i]=prompt("Enter marks")
        
}
    
for(i=0;i<3;i++){

    
    document.write("Score of "+name[i]+" is "+marks[i]+". Percentage : "+((marks[i]/500)*100)+"%<br>")
    
}

color=["red","blue"]

alert(color)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
alert(color)
var temp =prompt("Enter color to add in back")
color.push(temp)
alert(color)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
alert(color)
color.shift()
alert(color)
color.pop()
alert(color)
var pos=0
pos=prompt("Enter index to add")
temp=prompt("enter color")
color.splice(pos,0,temp)
alert(color)

pos=prompt("Enter index to delete")
var del=0
del=prompt("how many to delete?")
color.splice(pos,del)
alert(color)

var score=[320,230,480,120]
document.write(score+"<br>")
for(i=0;i<5;i++)
{
    for(j=i+1;j<5;j++){
        if(score[i]>score[j]){
            temp=score[j]
            score[j]=score[i]
            score[i]=temp

        }
    }
}
document.write(score+"<br>")

var citiesList=["karachi","Lahore","Islamabad","Quetta","Peshawar"]
var cities =[]
alert(citiesList)
pos=prompt("Enter index to extract to cities")
cities=citiesList.splice(pos,3)
alert(cities)

document.write("Cities List :<br> "+citiesList+"<br><br>Selected Cities List : <br> "+cities)

var arr = ["This" , "is" ,  "my" ,  "cat"];
document.write(arr+"<br>")
var st=""
for(i=0;i<arr.length;i++){

    st=st+" "+arr[i]

}
document.write(st)


var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"];
document.write("Devices <br>"+arr+"<br>")

for(i=0;i<arr.length;i++){

    document.write("Out:<br>"+arr[i]+"<br>")

}

var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"];
document.write("Devices <br>"+arr+"<br>")

for(i=arr.length+1;i>=0;i--){

    document.write("Out:<br>"+arr[i]+"<br>")

}

   


var arr = ["Apple" , "Samsung" ,  "Motorola" ,  "Nokia","Sony","Haier"];


for(i=0;i<arr.length;i++){

    document.write("<br>"+arr[i]+"<br>")

}



// chapter 17 - 20
// 1 - Declare and initialize an empty multidimensional array. (Array of arrays)
var matrix = [ [], [], [] ]


// 2 - Declare and initialize a multidimensional array representing the following matrix:
var matrix = [[0, 1, 2, 3],
              [1, 0, 1, 2],
              [2, 1, 0, 1] ]

        
// 3 - Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++){
    document.write(i, "<br>");
}

// 4 - Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var table = prompt("Enter the number to show its multiplication table:");
var length = prompt("Enter the length of the table:");

for (var  i = 1; i <= length; i++){
    document.write(table, "x", i, "=", table*i, "<br>");
}


// 5 - Write a program to print items of the following array using for loop:

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var len = fruits.length;
for (var i = 0; i < len; i++){
    document.write(fruits[i], "<br>");
}

for (var i = 0; i < len; i++){
    document.write("Element at ", i, "is ", fruits[i], "<br>");
}


// 6 - Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

for (var i = 1; i <= 15; i++){
    document.write(i, ", ");
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (var i = 10; i > 0; i--){
    document.write(i, ", ");
}


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

for (var i = 0; i <=20; i++){
    if (i % 2 === 0){
        document.write(i, ", ");
    }
}


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for (var i = 1; i <=19; i++){
    if (i % 2 !== 0){
        document.write(i, ", ");
    }
}


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

for (var i = 2; i <=20; i++){
    if (i % 2 === 0){
        document.write(i + "k", ", ");
    }
}


// 7 - You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for (var i = 0; i < A.length; i++){
    if (A[i] === search){
        available = true;
        break;
    }
    else{
        available = false;
    }       
}

if (available === true){
    document.write(search, " is available at index ", i, " in our bakery");
}
if (available === false){
    document.write("We are Sorry. ", search, " is not available in our bakery");
}
    

// 8 - Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

A = [24, 53, 78, 91, 12];
document.write("Array items: ", A);
largerNumber = Math.max(24, 53, 78, 91, 12);
document.write("<br> The larger Number is ", largerNumber);


// 9 - Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

A = [24, 53, 78, 91, 12];
document.write("Array items: ", A);
SmallerNumber = Math.min(24, 53, 78, 91, 12);
document.write("<br> The Smaller Number is ", SmallerNumber);


// 10 - Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 1; i <= 100; i++){
    if (i % 5 == 0){
        document.write(i, ", ")
    }
}


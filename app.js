
document.write("<hr>");
document.write("<b>"+" For checiking all questions you must un comment step by step first."+"</b>"+"<br><br><br>");
document.write("<hr>");




//===========chpter one
document.write("<hr>");
document.write("Chapter 1"+"<br><br><br>");
document.write("<hr>");

// // Question 1
// alert("welcome to our website");

// question 2
   
// var user = prompt("Enter your password");
//    if(user === null){
//     alert("Enter! please enter a valid password. ");
//    }else {
//        alert("Thank you and welcome");
//    }



// Question 3
//  alert("Welcome to JS land."  +  "\n" +  "Happy Coding!");

// Question 4
// alert("Welcome to JS land.");
// alert( "Happy Coding!");


// Question 5
// var msgToConsole = alert("Hello.. I can run JS through my web browser's console.");

// console.log(msgToConsole);


//================

document.write("<hr>");
document.write("Chapter 2"+"<br><br><br>");
document.write("<hr>");

//=============start chpt 2

//  1. Declare a variable called username.

var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
 var myName = 'Govind Rai';

        //  3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var titleMesaage = "Hello World";
// alert(titleMesaage);


//  4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var bioData = [
    name = "Govind Rai",
    age= 234,
    Dept = "Mobile App Development "
    
]


// for (i=0; i < bioData.length ; i++){
// document.write(bioData +"<br>");
// }

// or

var fullName = "Govind Rai";
var age = 15;
var certified = "Certified Mobile Application Development"
// alert(fullName);
// alert(age+" yaers old.");
// alert(certified)


// 5. Write a script to display the following alert using one JS variable

 var showAlert = "PIZZA\nPIZZ\nPIZ\nPI\nP";
//  alert(showAlert);




// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "govindrai024@gmail.com";

// alert(" My email address is : " + email);


// ====================

//  7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book = "A smarter way to learn JavaScript";
// alert(book);

// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript");

// 9. Store following string in a variable and show in alert and browser through JS

var showImg = '           ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(showImg);



//==end chapter 2


//==end chapter 3
document.write("<hr>");
document.write("Chapter 3"+"<br><br><br>");
document.write("<hr>");

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 23;
// alert(" I am "+age + " years old.");

// =============

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”

// var user 
// var trackingPeople 


// ================

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = 1996;
// document.write("My birth year is: " + birthYear);
// document.write("<br>"+  " Data type of my declared variable is: "+typeof(birthYear));


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


var visiterName = ' Babu bhai ';
var productTitle = ' T-shirt ';
var quantity = 5;
var clothCenterName = ' www.xyzClothing.com ';

document.write(visiterName + " ordered " + quantity + productTitle + " on " + clothCenterName + ' Clothing store.');



//==end chapter 3


//===========start  chapter 4

document.write("<hr>");
document.write("Chapter 4"+"<br><br><br>");
document.write("<hr>");

// 1. Declare 3 variables in one statement.
var x,y,z;

// 2. Declare 5 legal & 5 illegal variable names.

// legal variables
var book;
var bookName;
var BoodId;
var book_page_number
var $bookAutherName

// legal variables
// var 13book;
// var -bookname;
// var Boodid21;
// var book page number
// var bookauthername

// 3. Display this in your browser

// a) A heading stating “Rules for naming JS variables”

document.write("Rules for naming JS variables."+"<br><br>");

// b) Variable names can only contain ______, ______,
// ______ and ______For example $my_1stVariable

document.write( " Variable names can only contain, numbers, $ , and _. For example: $my_1stVariable." +"<br>");

// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name

document.write( "Variables must begin with a letter, $ or _. For example $name, _name or name." +"<br>");


// d) Variable names are case _________
document.write( "Variable names are case sensitive." +"<br>");

// e) Variable names should not be JS _____________

document.write("Variable names should not be JS keywords.");

//==end chapter 4


//===========start  chapter 5


document.write("<hr>");
document.write("Math Experssion Assignment / Chapter 5 Start");
document.write("<hr>");

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

document.write("<hr>");
document.write(" 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser." + "<br><br>");

var a = 3;
var b = 5;
var c = a + b;
document.write(" Sum of 3 and 5 is: " + c + "<br><br>");

document.write("<hr>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
document.write("2. Repeat task1 for subtraction, multiplication, division & modulus." + "<br><br>");



// // subtraction
var c = a - b;
document.write(" Substraction  of 3 and 5 is: " + c + "<br>");

// Multiplication
var c = a * b;
document.write(" Multiplication  of 3 and 5 is: " + c + "<br>");

//  Division
var c = a / b;
document.write(" Division  of 3 and 5 is: " + c + "<br>");

// modulus
var c = a % b;
document.write(" Modulus of 3 and 5 is: " + c + "<br> <br>");


document.write("<hr>");

//     3. Do the following using JS Mathematic Expressions
document.write("3. Do the following using JS Mathematic Expressions" + "<br>");

// a. Declare a variable.
var test;

// b. Show the value of variable in your browser like “Value  after variable declaration is: ??”.
document.write("a & b. Value  after variable declaration is: " + test + "<br>");

// c. Initialize the variable with some number.
var num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("c & d. Initial value: " + num + "<br>");

// e. Increment the variable.
var num = ++num;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("e & f. Value after increment is " + num + "<br>");

// g. Add 7 to the variable after addition is: 13”.
num += 7;
document.write("g & h. Value after additon is: " + num + "<br>");

// i. Decrement the variable.
var num = --num;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("i & j. Value after additon is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var num = num % 3;

// l. Output : “The remainder is : 0”.
document.write("k & l. The remainder is : " + num + "<br><br>");


document.write("<hr>");



document.write(" 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output." + "<br><br>");

var costOfTicket = 6000;
var totalCost = costOfTicket * 5;

document.write("Total cost to buy 5 ticket to a movie is: " + totalCost + "PKR");



document.write("<hr>");


document.write("  5. Write a script to display multiplication table of any number in your browser. E.g." + "<br><br>");

// var table = +prompt("Enter table value: ");

// for (var i = 1; i <= 10; i++ ){
//     document.write(+ table + "x" + i + "="+ table*i+ "<br>");
// }

document.write("<hr>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
document.write(" 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here." + "<br><br>");


// a. Store a Celsius temperature into a variable.
var CelTemp = 25;
var CelToF = (CelTemp * 9 / 5) + 32;


// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
document.write("a. 25  &#176C is: " + CelToF + " &#176f" + "<br>");

// c. Now store a Fahrenheit temperature into a variable.
var FTemp = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var FToCel = ((FTemp - 32) * 5 / 9);
document.write("c&d. 70  &#176F is: " + FToCel + " &#176C");

document.write("<hr>");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable.


document.write(" 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable." + "<br><br>");

document.write("<br>" + "<b>" + " Shopping Cart" + "</b>" + "<br><br>");
// a. Price of item 1
var priceOfItem1 = 650;

// b. Price of item 2
var priceOfItem2 = 100;

// c. Ordered quantity of item 1
var OrderQuantity1 = 3;

// d. Ordered Quantity of item 2
var OrderQuantity2 = 7;

// e. Shipping charges
var ShippingCharges = 100;

// Compute the total cost & show the receipt in your browser.


var totalCost = priceOfItem1 * OrderQuantity1 + priceOfItem2 * OrderQuantity2 + ShippingCharges;


document.write("Price of item 1 is : " + priceOfItem1 + "<br>" + "Quantity of item 1 is :" + OrderQuantity1 + "<br>" + "Price of item 2 is : " + priceOfItem2 + "<br>" + "Quantity of item 2 is :" + OrderQuantity2 + "<br>" + "Shipping Charges : " + ShippingCharges + "<br><br>" + "Total cost of your order is : " + totalCost);


document.write("<hr>");
//=====================
// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

document.write(" 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser." + "<br><br>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained * 100) / totalMarks;

document.write("Total Marks: " + totalMarks + "<br>")
document.write("Obtained Marks: " + marksObtained + "<br>")
document.write("Percentage: " + percentage + "%")


document.write("<hr>");

//=====================

document.write("9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee " + "<br><br>");

var dollar = 104.80;
var dollars = 10;
var saudiRiyal = 28;
var saudiRiyals = 25;

totalUsDollars = dollar * dollars;
totalSaudiyals = saudiRiyal * saudiRiyals;

totalCurrrency = totalUsDollars + totalSaudiyals;


document.write("<br>" + "<b>" + " Currency in PKR" + "</b>" + "<br><br>");

document.write("Total Currency is PKR: " + totalCurrrency);

document.write("<hr>");


//=====================

document.write("10. Write a program to initialize a variable with some number and do arithmetic in following sequence: " + "<br><br>");

var num1 = 20;
//  a. Add 5
//  b. Multiply by 10
//  c. Divide the result by 2
//  Perform all calculations in a single expression

num1 = num1 + 5 * 10 / 2;
document.write("Total sum of expression is: " + num1);

document.write("<hr>");

//=====================
document.write("11. The Age Calculator: Forgot how old someone is? Calculate it! " + "<br><br>");

// a. Store the current year in a variable.
var currentYear = 2020;

// b. Store their birth year in a variable.
var birthYear = 1996

// c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NNyears old”.
age = currentYear - birthYear;

document.write("Current year is: " + currentYear + "<br>");
document.write("birth year is: " + birthYear + "<br>");
document.write("Your Age is: " + age);

document.write("<hr>");

//=====================
document.write("12. The Geometrizer: Calculate properties of a circle. " + "<br><br>");

document.write("<br>" + "<b>" + "The Geometrizer " + "</b>" + "<br><br>");

// a. Store a radius into a variable
var radius = r;
var π = 3.142;
var r = 20;
var circumference = 2 * π * r;
var area = π * (r * r);

// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)



document.write("The radius of circle is: " + r + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");


document.write("<hr>");


//=====================
document.write("13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. " + "<br><br>");

document.write("<br>" + "<b>" + "The LifeTime Supply Calculator " + "</b>" + "<br><br>");

// a. Store your favorite snack into a variable
var favSnack = 'Twinkies';

// b. Store your current age into a variable.
var currentAge = 23;

// c. Store a maximum age into a variable.
var MaxAge = 24;

// d. Store an estimated amount per day (as a number).
var estimateAmPerDay = 3;

// e. Calculate how many would you eat total for the rest of your life.

// var restOflife = MaxAge - currentAge;
// var year = 365;
// var totalEat = ((restOflife * year) * estimateAmPerDay);

// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.


// document.write("Favourite Snack: " + favSnack + "<br>" + "Current age: " + currentAge + "<br>" + "Estimated Maximum Age: " + MaxAge + "<br>" + " Amount of snacks per day: " + estimateAmPerDay + "<br>" + " You will need  " + totalEat + " to last you until the ripe old age of  " + restOflife + "<br>");

document.write("<hr>");
document.write("Math Experssion Assignment / chpater 5 End");
document.write("<hr>");



//==end chapter 5


//===========start  chapter 6


document.write("<hr>");

document.write("<hr>");
document.write("Math Experssion Assignment 6 chpt 6 to 9 Start");
document.write("<hr>");

//============
document.write("Assignment 6");

document.write("1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser. " + "<br><br>");

// var a = 10;
// document.write("Result" + "<br>");
// document.write("The value of a is: " + a + "<br>");

// document.write("........................." + "<br><br>");

// a = ++a;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now value of a is: " + a + "<br><br>");

//...
// a = 11;
// document.write("The value of a++ is:" + a + "<br>");


// a + a++;
// document.write("Now value of a is: " + a + "<br><br>");

//......
// a = 11
// document.write("The value of --a is: " + a + "<br>");


// a = --a;
// document.write("Now value of a is: " + a + "<br><br>");

//....
// a = 11;
// document.write("The value of a-- is: " + a + "<br>");


// a = a--;
// document.write("Now value of a is: " + a + "<br><br>");


document.write("<hr>");
//========
// document.write("2. What will be the output in variables a, b & result after execution of the following script:. " + "<br><br>");

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("resutl is " + result + "<br><br>");

// --a;
// var result = --a;
// document.write("resutl is  " + result + " --a of a Prefix Decrement " + "<br>");

// --a - --b
// var result = --a - --b;
// document.write("resutl is  " + result + " --a - --b of a and b Prefix Decrement  " + "<br>");

// var result = --a - --b + ++b + b--;
// document.write("resutl is  " + result + "  of  --a - --b + ++b + b-- a and  b Prefix Decrement and Prefix Inrement and Post Decrement of b" + "<br>");

//===========
document.write("<hr>");

document.write("3. Write a program that takes input a name from user & greet the user. " + "<br><br>");

// var nameOfuser = prompt("Enter your name: ");
// alert("Welcome to my JS world"+nameOfuser);

//==========end
document.write("<hr>");


document.write("5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default " + "<br><br>");


// var table = +prompt("Enter table value: ");
// table =5

// if (table == " "){
//     table;
// }else{
//     for (var i = 1; i <= 10; i++ ){
//         document.write(+ table + "x" + i + "="+ table*i+ "<br>");
//     }

// }



//==========end
document.write("<hr>");


document.write(" 6. Take " + "<br><br>");

// a) Take three subjects name from user and store them in 3 different variables.
// var firstSub = prompt("Enter first subject:" );
// var secondSub = prompt("Enter second subject: "  );
// var thirdSub = prompt("Enter third subject:" );


// b) Total marks for each subject is 100, store it in another variable.

// var totalMarkss1= 100;
// var totalMarkss2= 100;
// var totalMarkss3= 100;



// c) Take obtained marks for first subject from user and stored it in different variable.

// var obtainedMarks1 = +prompt("Enter first subject obtained marks: ");

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// var obtainedMarks2 = +prompt("Enter second subject obtained marks: ");

// var obtainedMarks3 = +prompt("Enter third subject obtained marks: ");

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// calculate percentage
// percentge1 = obtainedMarks1*100/totalMarkss1;
// percentge2 = obtainedMarks2*100/totalMarkss2;
// percentge3 = obtainedMarks3*100/totalMarkss3;

// calculate  final total percentage
// finnalPer = percentge1 + percentge2 + percentge3;

// final total ob marks
// Fobtotal = obtainedMarks1 + obtainedMarks2 +obtainedMarks3;

// final total marks

// FtotalMark = totalMarkss1 + totalMarkss2 + totalMarkss3;

// const  firstsub1 =  document.getElementById('firstsubject').innerHTML =firstSub;
// const  firstsub2 =  document.getElementById('secondsubject').innerHTML =secondSub ;
// const  firstsub3 =  document.getElementById('thirdsubject').innerHTML =thirdSub;


// const  totalMark1 =  document.getElementById('totalMarks1').innerHTML =totalMarkss1;

// const  totalMark2 =  document.getElementById('totalMarks2').innerHTML =totalMarkss2;
// const  totalMark3 =  document.getElementById('totalMarks3').innerHTML =totalMarkss3;

// const  obMrk1 =  document.getElementById('obtainMarks1').innerHTML =obtainedMarks1;
// const  obMrk2 =  document.getElementById('obtainMarks2').innerHTML =obtainedMarks2;
// const  obMrk3 =  document.getElementById('obtainMarks3').innerHTML =obtainedMarks3;

// const  Prec1 =  document.getElementById('PercentageOfmarks1').innerHTML =percentge1+ "%";
// const  Prec2 =  document.getElementById('PercentageOfmarks2').innerHTML =percentge2+ "%";
// const  Prec3 =  document.getElementById('PercentageOfmarks3').innerHTML =percentge3 + "%";


// const  finalTotalMrk =  document.getElementById('finalTotalMarks').innerHTML =+FtotalMark ;
// const  finalTotalObMrk =  document.getElementById('finalTotalObMrks').innerHTML = +Fobtotal;
// const  finalTotalObPerc =  document.getElementById('finalTotalPercetange').innerHTML =+ finnalPer + "%";




document.write("<hr>");
document.write("<hr>");
document.write("Math Experssion Assignment 6 chpt 6 to 9 end");
document.write("<hr>");








//========================== End Chapter 6 to 9


//==========================
document.write("<hr>");
document.write(" User inputs and conditional Statements Assignment 9 to 11 Start");

document.write("<hr>");


document.write(" 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”" + "<br><br>");


// var user2 = prompt("Enter city: ");

// if (user2) {
//     user2 == karachi;
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome");
// }


//================


document.write(" 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am." + "<br><br>");

// var gender = prompt("Enter your gender: ")

// if(gender == 'male'){
//     document.write("Good Morning Sir.")
// }else{
//     document.write("Good Morning Ma'am.")
// }
document.write("<hr>");


//===============
document.write(" 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: " + "<br><br>");

document.write("<table>");
document.write("<tr>");
document.write("<th>" + " " + "Single color" + " " + "</th>");
document.write("<th>" + " " + "Message" + " " + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + " " + "Red" + " " + "</th>");
document.write("<td>" + " " + "Must stop" + " " + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + " " + "Yellow" + " " + "</th>");
document.write("<td>" + " " + "Read to move" + " " + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + " " + "Green" + " " + "</th>");
document.write("<td>" + " " + "Move on" + " " + "</td>");
document.write("</tr>");

document.write("<table>");



document.write("<hr>");

//===============
document.write(" 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” " + "<br><br>");


// var fuel = +prompt("Enter you fuel: ");

// if (fuel == 0.25) {
//     document.write("Please refill the fuel in your car")
// } else {
//     document.write(" Move your car")
// }


document.write("<hr>");

//===============
document.write("5. Run this script, & check whether alert message would be displayed or not. Record the outputs. " + "<br><br>");

// a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// };

document.write("a. alert is running"+"<br>");

// b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

document.write("b. alert is not running"+"<br>");


//c 

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

document.write("c. There are two alert box first is" + "<br>" + "condition 2 is true"+"<br>"+ "condition 4 is true" + "<br>");

// d
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

document.write("d. alert is running"+"<br>");


//e

//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


    document.write("e. alert is running"+"<br>"+"true"+"<br>");
document.write("<hr>");


document.write("<hr>");

//===============
document.write("6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table. " + "<br><br>");


document.write("Mark Sheet"+"<br><br>");

// var sub1 =+prompt( "Enter your first subject marks:");
// var sub2 = +prompt("Enter your second subject marks: ");
// var sub3 = +prompt("Enter your third subject marks: ");
// var totalMarks = +prompt( "Enter you total marks:");
// var obMarks = (sub1+sub2+sub3);
// percentage = ((obMarks * 100)/ totalMarks);
// var grade;
// var remarks;

// conditions
// if(percentage >= 80){
//      grade = 'A-one';
//      remarks = 'excellent';
// }else if(percentage >= 70){ 

//      grade = 'A';
//      remarks = 'Good';
// }else if(percentage >= 60){ 

//     grade = 'B';
//     remarks = 'you need to improve';
// }
// else if (percentage < 60){ 

//     grade = 'Fail';
//     remarks = 'Sorry';
// }


// document.write("Total Marks: "+totalMarks+"<br>");
// document.write("Obtained Marks: "+obMarks+"<br>");
// document.write("Percentage:  "+percentage+"%"+"<br>");
// document.write("Grade: "+grade+"<br>");
// document.write("Remarks: "+remarks+"<br>");


document.write("<hr>");
document.write("<hr>");

//===============
document.write("7. Guess game Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. " + "<br><br>");


document.write("Guess game"+"<br><br>");

document.write("a. If user guesses the same number, show “Bingo! Correct answer”."+ "<br>");
document.write("b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”."+ "<br><br><br>");

// var guessNum = 10;
// var user = prompt("Enter guess number ");

// if (user == guessNum){
//     document.write("Bingo! Correct answer");
// }
// else if(user < guessNum || user > guessNum){
//     document.write("Close enough to the correct answe");
// }


document.write("<hr>");

document.write("<hr>");

//===============
document.write("8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. " + "<br><br>");

// var user = prompt("Enter your value");
// var userValue =  user % 3 == 0;
// if (userValue){
//     document.write("the number is divisible by 3"+"<br><br>");
// }else {
//     document.write("Sorry pick another value"+"<br><br>");
// }





document.write("<hr>");

document.write("<hr>");

//===============
document.write("9. Write a program that checks whether the given input is an even number or an odd number. " + "<br><br>");

// var user = prompt("Enter number");

// if(user %2 == 0){
//     document.write("Even number"+"<br>");
// }else{
//     document.write("Odd number"+"<br><br>");
// }


document.write("<hr>");

document.write("<hr>");

//===============
document.write("10. Write a program that takes temperature as input and shows a message based on following criteria " + "<br><br><br>");


// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp1 = prompt("Enter temperature: ");

// if(temp1 > 40){
//     document.write("It is too hot outside.");
// }else if (temp1 > 30){
//     document.write("The Weather today is Normal.");
// }else if (temp1 > 20){
//     document.write("Today’s Weather is cool.");
// }else if (temp1 > 10){
//     document.write("OMG! Today’s weather is so Cool");
// }







document.write("<hr>");

//===============
document.write("11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: " + "<br><br><br>");


// var num1 = +prompt("Enter first number: ");
// var op = prompt("Enter operator number: ");
// var num2 = +prompt("Enter second number: ");


// if (op == '+'){
//  document.write("Addition:  " ,num1 + num2) ;
// }else if(op == '-'){
//     document.write("Substraction:  ",num1 - num2) ;
// }else if(op == '*'){
//     document.write("Multiplication:  ",num1 * num2) ;
// }else if(op == '/'){
//     document.write("Division:  ",num1 / num2) ;
// }else if(op == '/'){
//     document.write("Modulus:  ",num1 % num2) ;
// }





//===========End chapter 9 to 11


//==========================
document.write("<hr>");
document.write(" User inputs and conditional Statements Assignment 12 to 13 Start");

document.write("<hr>");





document.write(" 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)." + "<br><br>");

// var char = prompt("Enter the character to check: ");
// var value = char.charCodeAt(0);

// //checking uppercase
// if(value >= 65 && value <= 90 ){
//     document.write(char+" is a Uppercase ");    
// } 
// //checking lowercase
// else if(value >= 97 && value <= 122 ){
//     document.write(char +" is a lowercase ");    
// }
// //checking for number
// else if(value){
//     document.write(char +" is a number ");    
// }

document.write("<hr>");


document.write("<hr>");


document.write(" 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal." + "<br><br>");

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// if(num1 == num2){
//     document.write("Both are equal");
// }else if(num1 >= num2)
// {
//      document.write("This is number larger " + num1);
// }
// else if(num2 >= num1)
// {
//     document.write("This is number larger " + num2);
// }

document.write("<hr>");


document.write("3. Write a program that takes input a number from user & state whether the number is positive, negative or zero." + "<br><br>");

// var user = +prompt("Enter number: ");

// if (user > 0){
//         document.write(user + " is positive ");
// }else if(user < 0){
//     document.write( user+ " is negative ");
// }else if(user == 0){
//     document.write(user + " zero " , );
// }
document.write("<hr>");


document.write("4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise" + "<br><br>");



// var checkVowel = function(isVowel) {

//     var vowels = ["a", "e", "i", "o", "u"];

//     for(var i = 0; i < vowels.length; i++){ 
//         if(isVowel === vowels[i]){
//             return true;
//          }
//     }

//     return false;

// };

// var char = prompt("Enter character:");
// char.length = 1;
// if (checkVowel(char)){
// 	document.write(char + " is a vowel");
// } else {
// 	document.write(char + " is not a vowel");
// }

 document.write("<hr>");


document.write("<hr>");


document.write("5. Write a program that" + "<br><br>");

// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.


// var userPassword = "mera password"; //user password

// var user = prompt("Enter your password"); // input from user


// if(user === ''){
//     alert("Please enter your password");  // if empty
// }
// // if match password
// else if(user === userPassword){
//     alert("Correct! The password you entered matches the original password"); 
// }
// //if not match
// else if (user !== userPassword){
//     alert("Incorrect password");
// }

document.write("<hr>");



document.write("<hr>");


document.write("6. This if/else statement does not work. Try to fix it:" + "<br><br>");

// var greeting;
// var hour = 13;

// if (hour < 18){
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }

// document.write(greeting);



document.write("<hr>");

document.write("7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements" + "<br><br>");

// var hours =+prompt("Enter hours");
// user.length = 24;



// if( hours >= 0000 && hours < 1200){
//     document.write("Good morning");
// }else if( hours >= 1200 && hours < 1700){
//     document.write("Good Afternoon");
// }else if( hours >= 2100 && hours <= 2359){
//     document.write("Good Good night");
// }




//===========End chapter 12 to 13 


//==========================
document.write("<hr>");
document.write("  Assignment 14 to 16 Start");

document.write("<hr>");


//==========================
document.write("<hr>");


document.write("<hr>");


document.write(" 1. Declare an empty array using JS literal notation to storestudent names in future.." + "<br><br>");

var stdNames = [];

document.write(" 2. Declare an empty array using JS object notation to store student names in future.." + "<br><br>");

var allStdNames = new Array();

document.write("<hr>");



//====================
document.write(" 3. Declare and initialize a strings array." + "<br><br>");

var stringArray = [
    
    name = ' Govind Rai ',
    status = ' Application developer '

];

document.write("This is string array " +"<br>"+ stringArray+ "<br><br>"+ "<br><br>");



document.write("<hr>");
//====================
document.write(" 4. Declare and initialize a numbers array." + "<br><br>");

var number = [1,3,5,6,7];

document.write("This is numbers array " +"<br>"+ number+ "<br><br>"+ "<br><br>");





document.write("<hr>");
//====================
document.write(" 5. Declare and initialize a boolean array." + "<br><br>");

var boolenNum = [false, true];
document.write("This is boolean array " +"<br>"+ number+ "<br><br>"+ "<br><br>");
document.write("<hr>");




document.write("<hr>");
//====================
document.write(" 6. Declare and initialize a mixed array." + "<br><br>");

var mixArray = ["computer science",2,"rai","Govind",false, true];
document.write("This is mixed array " +"<br>"+ mixArray+ "<br><br>"+ "<br><br>");






//====================\
document.write("<hr>");

document.write(" 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:" + "<br><br>");


document.write("<b>"+"QULIFICATIONS"+"<br><br>");

var eduQualif = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];

document.write("<ol>")
for ( i  =0; i <= eduQualif.length;i++){
    document.write("<li>"+eduQualif[i] +"</li>"+"<br>")    
}
document.write("</ol>"+"</b>")



//====================\
document.write("<hr>");

document.write(" 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:" + "<br><br>");

//students names
var stdsName = [
    std1 = 'Govind Rai',
    std2 = 'Ahmed',
    std3 = 'Raza'
];


// students score
var stdsScore = [
    stdScore1 = 480,
    stdScore12 = 360,
    stdScore13 = 450
];

// total marks
var totalMarks = 500;

// calculate percentage
percentage1 = ((stdsScore[0]*100)/totalMarks);
percentage2 = ((stdsScore[1]*100)/totalMarks);
percentage3 = ((stdsScore[2]*100)/totalMarks);

// display score and percentage
document.write(" Score of "+ stdsName[0] + " is "+ stdsScore[0] +"."+" Percentage: " + percentage1 + "%."+"<br>");
document.write(" Score of "+stdsName[1]+ " is "+ stdsScore[1]+"."+" Percentage: " + percentage2+"%."+"<br>");
document.write(" Score of "+stdsName[2]+ " is "+ stdsScore[2]+"."+" Percentage: " + percentage3+"%."+"<br>");



//====================\
document.write("<hr>");

document.write("9. Initialize an array with color names. Display the array elements in your browser." + "<br><br>");

var color = ['red','green','yellow'];
document.write(color+"<br><br><br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// var addcolor = prompt("Add color of your choice");
// color.unshift(addcolor); 
document.write("Updated Array: "+color+"<br><br>" );


// // b. Ask the user what color he/she wants to add to the end  & add that color to the end of the array. Display the  updated array in your browser.

// var addcolor = prompt("Add color of your choice");
// color.push(addcolor); 
document.write("Updated Array: "+color+"<br><br>" );



// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// var addcolor = prompt("Add  first color of your choice");
// color.unshift(addcolor); 
// var addcolor = prompt("Add second color of your choice");
// color.unshift(addcolor); 
document.write("Updated Array: "+color+"<br><br>" );


// d. Delete the first color in the array. Display the updated array in your browser.
 color.shift();
 document.write("Updated Array for delete first color: "+color+"<br><br>" );

 

// e. Delete the last color in the array. Display the updated array in your browser.
color.pop();
document.write("Updated Array for delete last color: "+color+"<br><br>" );


// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// var addColorindex = prompt("At which index want to add color of your choice");
// color.splice(addColorindex); 

document.write("Updated Array at index:  "+color+"<br><br>" );


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then

// var addColorindex = prompt("At which index want to delete color of your choice");
// color.splice(addColorindex); 

document.write("Updated Array at index:  "+color+"<br><br>" );


//====================\
document.write("<hr>");

document.write("10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method." + "<br><br>");

// var stdsScores = [333,443,453,588];
// stdsScores.sort();
// document.write("Score of students in sort and ascending order:  "+stdsScores+"<br><br>" );



//====================\
document.write("<hr>");

document.write("11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array." + "<br><br>");

var cities = ["karachi","Lahore","Isamabad","Quetta","Peshawar"];
document.write("Cities: "+cities+"<br><br>"); 

var copy = cities.slice(1,3);
document.write("Selected Cities list: "+"<br>"+copy);


//====================\
document.write("<hr>");

document.write("12. Write a program to create a single string from thebelow mentioned array:." + "<br><br>");

document.write("Array:"+"<br>");
var arr = [" This "," is "," my ", " cat "];
document.write(arr +"<br><br>");

//creating here
document.write("String: "+"<br>");

var string = arr.join("");
document.write(string+"<br>");




//====================\
document.write("<hr>");

document.write("13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)." + "<br><br>");

var arr1 = ["keyboard","mouse","printer","monitor"];
document.write( arr1 +"<br><br>");


//output keyboard
var takingOutput= arr1.slice(0,1);
document.write("out: " + "<br>" + takingOutput +"<br>");

//output mouse
var takingOutput= arr1.slice(1,2);
document.write("out: " + "<br>" + takingOutput +"<br>");

//output printer
var takingOutput= arr1.slice(2,3);
document.write("out: " + "<br>" + takingOutput +"<br>");

//output monitor
var takingOutput= arr1.slice(3,4);
document.write("out: " + "<br>" + takingOutput +"<br>");



//====================\
document.write("<hr>");

document.write("14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)" + "<br><br>");


document.write( arr1 +"<br><br>");


//output keyboard
var takingOutput= arr1.slice(-1);
document.write("out: " + "<br>" + takingOutput +"<br>");

//output mouse
var takingOutput= arr1.slice(-2,-1);

document.write("out: " + "<br>" + takingOutput +"<br>");


//output printer
var takingOutput= arr1.slice(-3,-2);

document.write("out: " + "<br>" + takingOutput +"<br>");

// //output monitor
var takingOutput= arr1.slice(-4,-3);
document.write("out: " + "<br>" + takingOutput +"<br>");



                            //===========End chapter 14 to 16  


                            //==========================
                             document.write("<hr>");
                             document.write("  Assignment 16 to 20 Start");

document.write("<hr>");

document.write("Chapter 17 to 20"+"<br><br>");

//==========================
document.write("<hr>");
document.write("<hr>");

document.write(" 1. Declare and initialize an empty multidimensional array.(Array of arrays)" + "<br><br>");

var multiDemArry = [
    ["Gvoind","Rai"],
    ["Rai",22,false],
    ["Santosh",234,"pass"]
];


//==========================
document.write("<hr>");

document.write(" 2. Declare and initialize a multidimensional arrayrepresenting the following matrix:." + "<br><br>");

var multiDemArry1 = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
for(i = 0; i < multiDemArry1.length; i++){
document.write(multiDemArry1[i]+'<br>');
}


//==========================
document.write("<hr>");

document.write(" 3. Write a program to print numeric counting from 1 to 10.." + "<br><br>");

for(i = 1; i <= 10; i++){
    document.write([i]+'<br>');
    }
    

//==========================
document.write("<hr>");

document.write(" 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user" + "<br><br>");

// var tableNum = +prompt("Enter table number which you want to print: ");
// var tablelength = +prompt("Enter table length which you want to print: ");


// for (var i = 1; i <= tablelength; i++ ){
//     document.write(+ tableNum + "x" + i + "="+ tableNum*i+ "<br>");
// }



//==========================
document.write("<hr>");

document.write(" 5. Write a program to print items of the following array using for loop:" + "<br><br>");

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];


for (var i = 0; i < fruits.length ; i++ ){
    document.write(fruits[i]+ "<br>");
}

document.write("<br>");

// showing index
document.write("Element at index 0 " +fruits[0]+"<br>");
document.write("Element at index 1 " +fruits[1]+"<br>");
document.write("Element at index 2 " +fruits[2]+"<br>");
document.write("Element at index 3 " +fruits[3]+"<br>");
document.write("Element at index 4 " +fruits[4]+"<br>");





//==========================
document.write("<hr>");

document.write(" 6. Generate the following series in your browser. See example output." + "<br><br>");

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<b>"+"Counting: "+ "</b>"+"<br>");
for(i = 1; i <= 15; i++){
    document.write([i]+",");
    }
    


    document.write("<br><br>");    

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
var counting = [1,2,3,4,5,6,7,8,9,10];
var reverse = counting.reverse();
document.write("<b>"+"Reverse counting: "+ "<br>"+"</b>"+reverse + "<br><br>");


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<b>"+"Even: "+ "</b>"+ "<br><br>");


// for(i = 0; i <= 20; i+i+2){
//     document.write(odd[i]+",");
//     }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<b>"+"Odd: "+ "</b>"+ "<br><br>");

// for(i = 1; i <= 20; i+i+2){
//     document.write(odd[i]+",");
//     }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<b>"+"Series: "+ "</b>"+ "<br><br>");
var array = ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];
for(i = 0; i < array.length; i++){
    document.write(array[i]+",");
    }



//==========================
document.write("<hr>");

document.write(" 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a  program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:" + "<br><br>");

// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

// var items = prompt("Welcome to our backry,what do you want to order?: ");

//  if(a === items){
//   alert(items + " is available at index number " + " " + a.indexOf + " in or backry ");
// }else{
//     alert("We are sorry " + items + " is not available at our backry.");
//  }



//==========================
document.write("<hr>");

document.write(" 8. Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12]." + "<br><br>");

var arr = [24, 53, 78, 91, 12];
document.write("Array items: "+(arr)+"<br><br>");


document.write("The largeest number: "+Math.max.apply(null, arr));




//==========================
document.write("<hr>");

document.write(" 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]" + "<br><br>");

var arr = [24, 53, 78, 91, 12];
document.write("Array items: "+(arr)+"<br><br>");


document.write("The largeest number: "+Math.min.apply(null, arr));



//==========================
document.write("<hr>");

document.write(" 10. Write a program to print multiples of 5 ranging 1 to 100." + "<br><br>");

for(i = 1; i <= 20; i++){
    document.write([i*5]+",");
    }
    

     //========================== End of assignmehnt
     document.write("<hr>");
     document.write("  Assignment 16 to 20 end");
     document.write("<hr>");
     document.write("  Assignment Completed 1 to 20 ");     
     document.write("<hr>");
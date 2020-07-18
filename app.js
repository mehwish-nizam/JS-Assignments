/*********************************************Chapter 01*******************************************/
//Task 01
alert("Hello visitor have a good day.");
//Task 02
alert("Error! Please enter a valid password.");
//Task 03
alert("Wellcome to JS land.\n Happy coding" );
//Task 04
alert("Wellcome to JS land." );
alert("Happy coding!" );
//Task 05
alert("Hello I can run Js through my web browser's console.");
//Task 6 and 7 done in html file
/*********************************************Chapter 02*******************************************/
// Task 01. Declare a variable called username.
var username;
// Task 02. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Mehwish";
// Task 03 Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.
var message;
message = "Hello World";
alert(message);
//Task 04 Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
var name = "Jhone Doe";
var age = 15;
var course = "Certified Mobile Application Development."
alert(name);
alert(age + " years old.");
alert(course);
//Task 05 Write a script to display the following alert using one JS variable: 
var x = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(x);
//Task 06 Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 
var email = "mehwishnizam01@gmail.com"
alert("My email address is " + email);
// Task 07 Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn javascript from the Book"+ book);
//Task 08 A smarter way to learn JavaScript
document.write("Yah! I can write html content through javascript");
//Task 09 
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);
/*********************************************Chapter 03*******************************************/
// Task 01 Declare a variable called age & assign to it your age. Show your age in an alert box.
var age =18;
alert("I am " + age + " years old.");
//Task 02  Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page
var n = 1;
alert("You have visited this page " +n + " time");
//Task 03 Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
var birthYear = 2001;
document.write("<br>My birth year is " + birthYear + "<br> Data type of my declared variable is " + typeof(birthYear));
//Task 04 
var Visitors_name = "John Doe";
var  Product_title = "T-shirts";
var Quantity = 5;
document.write("<br>" + Visitors_name + " ordered " +Quantity+ Product_title+ "(s) on XYZ Clothing store");
/*********************************************Chapter 04*******************************************/
//Task 01 Declare 3 variables in one statement. 
var x,y,z;
//Task 02  Declare 5 legal & 5 illegal variable names.
//Legal
var x,x1,Visitors_name,name,$abc;
//Illegal
//var 1c,Visitors-name,x 1,!x,6t;






//Task 03
document.write(
    "<br><h1>Rules for naming JS variables</h1>\n<p>Variable names can only contain number, $and _. For example $my_1stVariable </p>\n<p>Variables must begin with a letter, $ or _. For example $name, _name or name </p>\n<p> Variable names are case sensitive.</p>\n<p> Variable names should not be JS keyw0rds</p>\n"
)
/*********************************************Chapter 05*******************************************/
//Task 01  Write a program that take two numbers & add them in a new variable. Show the result in your browser. 
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
document.write("<br>Sum of " + num1 +" and " +num2 + "is"+(num1+num2));
//Task 02  Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
document.write("<br>Product of " + num1 +" and " +num2 + "is"+(num1*num2));
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
document.write("<br>Difference of " + num1 +" and " +num2 + "is"+(num1-num2));
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
document.write("<br>Ratio of " + num1 +" and " +num2 + "is"+(num1/num2));
//Task 03 
var num;
document.write("<br>Value after variable declaration is" +num);
num = 5;
document.write("<br>Initial value: " +num);
num++;
document.write("<br>Value after increment is: " +num);
num = num + 7;
document.write("<br>Value after addition is:  " +num);
num--;
document.write("<br>Value after decrement is: " +num);
num = num%3;
document.write("<br>Remainder value: " +num);
//Task 04 
var quantity = 5;
var cost = 600;
document.write("<br>Total cost of buying " + quantity + "tickets is " +(quantity*cost));
//Task 05
document.write("<br>Table of 4<br>");
for (var i =1; i<=10; i++){
    document.write("<br> 4 * " +i+ "  = " +(4*i));
}
//Task 6
var C = 75;
document.write("<br>" + C + "¤C is "+((C-32)*(5/9)) + " ¤F");
var F = 37;
document.write("<br>" + F + "¤F is " + ((F*9/5)+32) +  " ¤C");
//Task 07 Write a program to implement checkout process of a shopping cart system for an e-commerce website.
var p1 = 650;
var p2 = 100;
var q1 = 3;
var q2 = 7;
var shippingCharges = 100;
document.write("<br> Price of Item 1 is " +p1+ "<br> Quantity of item 1 is " +q1+ "<br> Price of Item 2 is " +p2+ "<br> Quantity of item 2 is " +q2+ "<br> Shipping charges " +shippingCharges+"<br><br> Total Cost of your order is " +((p1*q1)+(p2*q2)+shippingCharges));
//Task 08 
var totalmarks = 980;
var obtainmarks = 804;
document.write("<br><h1>Mark Sheet</h1> <br><br> Total marks " + totalmarks + "<br> Obtain Marks " +obtainmarks+ "<br> Percentage " + (obtainmarks/totalmarks)*100);
 //Task 09
 var USD = 10;
 var SR = 25;
 var PKR = (10*104.8)+(25*28);
 document.write("<br><h1>Currency in Pkr</h1> <br><br> " + PKR);
 //Task 10
 var m = 6;
 var t = ((6+5)*10)/2;
 //Task 11;
 var currentyear = 2020;
 var birthyear = 2001;
 document.write("<br><h1>Age Calculator</h1> <br> Current Year " + currentyear + "<br> Birth Year " + birthYear + "<br> Your age is " +(currentyear-birthYear));
 //Task 12
 var radius = 20;
 document.write("<br><h1>The Geometrizer</h1> <br> Radius of Circle is " + radius +"<br> Circumference of circle si "+ (2*3.142*radius) + "<br> Area of Circle is " + (3.142*radius*radius));
 // Task 13
 var snack = "Chocolate chip";
 currentAge = 15;
 maxAge = 65;
 AmountPerDay = 3;
 document.write("<br> Favourite Snack " + snack + "<br> Current Age " +currentAge + "<br> Estimated maximum age " +maxAge+ "<br>Amount Per day " + AmountPerDay + "<br><br> You will need " +(maxAge-currentAge)*365*AmountPerDay +" to last you until the ripe oold age of " +maxAge);
/***************************************************Chapter 6-9************************************************* */
//Task 01
var a = 10;
document.write("Result: <br> The value of a is " +a+"<br> The value of ++a is "+ (++a) +"<br>Now the value of a is " + a+ "<br>The value of a++ is " +(a++)+ "<br>Now the value of a is " + a+ "<br> The value of a-- is "+ (a--) +"<br>Now the value of a is " + a+ "<br>The value of --a is " +(--a)+"<br>Now the value of a is " + a);
//Task 02
var A = 2, B = 1;
var result = --A - --B + ++B + B--;
//--A = 1
// --A - --B =  1 - 0 = 2
// --A - --B  + ++B = 1-0+1 = 2
// --A - --B + ++B + B-- = 1-0+1+1 = 3
document.write("<br> Value of a = " + A + "<br>Value of b = "  + B + "Result  = "  +result);
//Task 03
var name = prompt("Enter your name", "Your name");
document.write("Hello " +name + "Wellcome to our page");
//Task 05
var table;
table = +prompt("Enter a number to print table",5);
for (var i = 1; i<=10 ; i++){
    document.write("<br>" +table + " * " +i+ " = " + (table*i) );
}
//Task 06
var s1 = prompt("Enter first subject");
var s2 = prompt("Enter second subject"); 
var s3 = +prompt("Enter third subject");
var totalEach = 100;
var o1 = +prompt("Enter obtained marks infirst subject");
var o2 = +prompt("Enter obtained marks in second subject"); 
var o3 = +prompt("Enter obtained marks in third subject");

document.write("<br>'<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtain Marks</th><th>Percenatge</th></tr><tr><td>" +s1+ "</td><td> 100 </td><td> " +o1 + "</td><td> "+(o1)+"%</td></tr><tr><td>" +s2+ "</td><td> 100 </td><td> " +o2 + "</td><td> "+(o2)+"%</td></tr><tr><td>" +s3+ "</td><td> 100 </td><td> " +o3 + "</td><td> "+(o3)+"%</td></tr></table>'");
/***************************************Chaåter 9-11********************************************* */
//Task 01 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
var city = prompt("Enter city name ");
city = city.toLocaleLowerCase();
if(city === "karachi" ){
    document.write("<br>Wellcome to city of lights");
}
//Task 02 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
var gender = prompt("Enter your gender male or female");
gender = gender.toLowerCase();
if(gender === "male"){
    document.write("<br>Good Morning Sir");
}
else if(gender === "female"){
    document.write("<br>Good Morning Ma'am");
}
//Task 03 Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color = prompt("Enter color of traffic light");
if(color === "red" || color === "RED" || color === "Red"){
    document.write("<br> Must Stop");
}
else if(color === "green" || color === "GREEN" || color === "Green"){
    document.write("<br> Move");
}
else if(color === "yellow" || color === "YELLOW" || color === "Yellow"){
    document.write("<br> Ready to MOve");
}
else{
    document.write("<br>Wrong input");
}
//Task 03 Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car
var fuelamount = prompt("Enter the amount of fuel left in the car in litres");
if(fuelamount <=0.25){
    document.write("<br> Please refill the fuel in your car");
}
// Task 05 
var an = 4;
if (++an === 5){
    alert("given condition for variable a is true");// Output: alert will be run
}
var bn = 82; if (bn++ === 83){ alert("given condition for variable b is true"); } // Output: alert will not be run
var cn = 12; if (cn++ === 13){ alert("condition 1 is true"); }
if (cn === 13){ alert("condition 2 is true"); } 
if (++cn < 14){ alert("condition 3 is true"); } 
if(cn === 14){ alert("condition 4 is true"); } //Output: alert 'condition 2 is true' and 'condition 4 is true' will be run
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  // alert will be run
if (true){ alert("True"); } if (false){ alert("False"); } //Output: alert True will be run
if("car" < "cat"){ alert("car is smaller than cat"); } // Output: alert will be run
 // Task 06

var ob1 = +prompt("Enter obtained marks in first subject");
var ob2 = +prompt("Enter obtained marks in second subject"); 
var ob3 = +prompt("Enter obtained marks in third subject");
var tm1 = +prompt("Enter total marks in first subject");
var tm2 = +prompt("Enter total marks in second subject"); 
var tm3 = +prompt("Enter total marks in third subject");
per = ((o1+o2+o3)/(tm1+tm2+tm3))*100
document.write("<br><h1>Marks Sheet</h1> <br> Total Marks = " +(tm1+tm2+tm3)+"<br> Marks Obtained = " +(o1+o2+o3)+ "<br> Percentage = "+per);
if(per>=80){
    document.write("<br>Grade = " +" A-one <br> Excellent");

}
else if(per>=70){
    document.write("<br>Grade = " +" B <br> Good");

}else if(per>=60){
    document.write("<br>Grade = " +" C <br> You need to improve");

}else if(per<60&&per>0){
    document.write("<br>Grade = " +" Fail <br> Sorry");

}
else{
    document.write("<br> Wrong input");
}
//Task 07 Guess game
var secretnum = 5;
guesstnum = +prompt("Guess the number between 1 to 10");
if(secretnum === guesstnum){
    document.write("“Bingo! Correct answer");
}
else{
    document.write("Close enough to the correct answer");
}
// Task 08 Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3
var num = +prompt("Enter a number to check whether it is divisible by 3 or not");
if((num%3)===0){
    document.write("<br> " +num + "is divisible by 3");
}
else{
    document.write("<br> " +num + "is not divisible by 3");
}
//Task 09 Write a program that checks whether the given input is an even number or an odd number. 
var newnum = prompt("Enter a number to check whether it is odd  or even number");
if(newnum%2 === 0){
    document.write("<br> " +newnum + "is even number");
}
else{
    document.write("<br> " +newnum + "is odd number");
}
 //Task 10
 var temperature = prompt("Enter the temperature");
if(temperature >40){
    document.write("<br> It is too hot outside " );
}
else if(temperature>30){
    document.write("<br> The Weather today is Normal");
}
else if(temperature>20){
    document.write("<br> Today’s Weather is cool");
}
else if(temperature>10){
    document.write("<br> OMG! Today’s weather is so Cool");
}
//Task 11
var firstnum = +prompt("Enter first number" ,5);
var secondnum = +prompt("Enter second number" ,4);
var operator = prompt("Enter opeartor", "+" );
if(operator === "+"){
    document.write("<br>" +firstnum+" " + operator + " " + secondnum + " = " +(firstnum+secondnum));
}
else if(operator === "-"){
    document.write("<br>" +firstnum+" " + opeartor + " " + secondnum + " = " +(firstnum-secondnum));
}
else if(opertaor === "*"){
    document.write("<br>" +firstnum+" " + operator + " " + secondnum + " = " +(firstnum*secondnum));
}
else if(opertaor === "/"){
    document.write("<br>" +firstnum+" " + operator + " " + secondnum + " = " +(firstnumsecondnum));
}
else if(opertaor === "%"){
    document.write("<br>" +firstnum+" " + operator + " " + secondnum + " = " +((firstnum/secondnum)*100));
}
/******************************************Chapter 12 -13 **************************************/
//Task 01
var ch = prompt("Enter string or a number");
if((ch >= 'A'&& ch <='Z')){
    alert("You have entered an upppercase letter");
}
else if(ch >= 'a' && ch <= 'z'){
    alert("You have entered a lowercase letter");
}
else if(ch >= '1' && ch<= '9'){
    alert("You have entered number");
}
//Task 02
var n1 = +prompt("Enter first number");
var n2 = +prompt("Enter second number");
if(n1===n2){
    document.write("<br> Both numbers are equal");
}
else if(n1>n2){
    document.write("<br> Larger integer between " +n1 +" and " +n2 +" is " +n1);
}
else{
    document.write("<br> Larger integer between " +n1 +" and " +n2 +" is " +n2);

}
//Task 03
var n = +prompt("Enter a number to check it is positive, negative or zero");
if(n === 0){
    alert("You have entered zero");
}
else if(n > 0){
    alert("You have entered a positive number");
}
else if(n < 0){
        alert("You have entered negative number");   
}
//Task 04
var char = prompt("Enter a character to check it is vowel or not");
if((char >= 'A'&& char <= 'a')||(char >= 'a'&& char <= 'z')){
    if(char == 'a'|| char =='e'||char =='i'||char == 'o'||char =='u'||char =='A'||char=='E'||char=='I'||char=='O'||char=='U'){
        alert("You have entered a vowel");
    }
    else{
        alert("You have not entered a vowel");
    }
}
//Task 06
var correctPassword = "123"
var enterpassword = prompt("Enter your password: ");
if(enterpassword == ""){
    alert("Please enter your password");
}
else if(correctPassword === enterpassword){
  alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect Password");
}
//Task 07
var greeting; var hour = 13; 
if (hour < 18) { greeting = "Good day"; }else {greeting = "Good evening"; } //Corrected placements of brackets

//Task 08
var time = prompt("Enter time in 24 hours format");

    if(time >=0000&& time <1200){
    alert("Good Morning");}
    else if(time >=1200 && time < 1700){
    alert("Good Afternoon");
    }
    else if(time>=1700 && time <2100){
    alert("Good Evening");
    }
    else if(time >=2100 && time <2400)
    alert("Goog Night");

/* ****************************************Chapter 14-16**************************************/
//Task 01
var literalArray = [];
//Task 02
var objectArray = new Array();
//Task 3
var myArray = ["Mehwish", "Asif", "Areeba", "Malaika"];
//Task 04
var myArray2 = [1,2,3,4,5];
//Task 05
var myArray3 = [true,false,true,false];
//Task 06
var myArray4 = [1,"Mehwish", true];
//Task 07
var education = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<br><h1>Qualification</h1>");
for(var j = 0; j<education.length; j++){
    document.write("<br> " +j+") " +education[j]+ "<br>");
}
//Task 08
var studentName = ["Michael", "John", "Tony"];
var score = [320,230,480];
for(var k = 0; k<3; k++){
    document.write("<br>Score of " +studentName[k] + " is " + score[k]+". Percentage: " +(score[k]/500*100));
}

//Task 09
var colorName = ["Red", "Yellow", "Green"];
document.write("<br>Original array : " +colorName);
var color1 = prompt("<Enter the color to be added in the beginning of the array ", "Blue");
colorName.unshift(color1);
document.write("<br> " +color1+" is added in the beginning. <br>Updated Array : " +colorName);
var color2 = prompt("Enter the color to be added in the last of the array " , "Purple");
colorName.push(color2);
document.write("<br> " +color2+" is added in last.<br>Updated Array : " +colorName);
document.write("<br>Adding two more colors in the beginning of the array");
colorName.unshift("Maroon", "Golden");
document.write("<br>Updated Array : " +colorName);
document.write("<br>Deleting first element of the array");
colorName.shift();
document.write("<br>Updated Array : " +colorName);
document.write("<br>Deleting last element of the array");
colorName.pop();
document.write("<br>Updated Array : " +colorName);

document.write("<br>Write the color and index of the color you want to add in the array ");
var color3 = prompt("Enter the color to be added ");
var Index = prompt("Enter at which index you want " +color3 + "to be added" );
colorName.splice(Index,0,color3);
document.write("<br>Updated Array : " +colorName);

var Index1 =  prompt("From whixh index you want to delete elments from the array ",1);

var Numbers = prompt("How many elements you want to delete",1 );
colorName.splice(Index1,Numbers);
document.write("<br>Updated Array : " +colorName);


//Task 10
var arr = [320,230,480,120]
var arr2 = arr.sort();
document.write("<br>Scores of student: " +arr);
document.write("<br>Sorted scores of student: " +arr2);

//Task 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
var selectedCities = cities.push(cities[0],cities[3],cities[4]);
document.write("<br> Cities list : " +cities +"<br><br> Selected Cities: " +selectedCities);
 //Task 12
 var Arr = ["This", "Is", "my", "Cat"];
 var stringFromArray = Arr.join();
 document.write("<br> Array: " +Arr +"<br><br> String " +stringFromArray);

 //Task 13
 var Devices = ["Keybord", "Mouse", "Printer", "Monitor"];
 document.write("<br> Devices: " +Devices);
 for (var l = 0; l<Devices.length; l++){
     document.write("<br> Out: "+Devices[l]);
 }

 //Task 14

 var Devices = ["Keybord", "Mouse", "Printer", "Monitor"];
 document.write("<br> Devices: " +Devices);
 for (var i = Devices.length-1; i>=0; i++){
     document.write("<br> Out: "+Devices[i]);
 }

 //Task 15

 var PhoneManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<br>Select one Phone Manufacturer from the background");
 document.write("<select>");
 for (var i =0; i <PhoneManufacturer.length; i++){
 document.write("<option>" +PhoneManufacturer[i]+ "</option>" );
}
document.write("</select>");

/************************************Chapter 17-20****************************************** */
//Task 01
var multiArray = [[]];

//Task 02
multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// Task 03
for(var i = 1; i<=10; i++){
    document.write("<br>"+i);
}

//Task 04

var  TableToPrint = +prompt("Enter a number to show its multiplication table", 5);
var TableLength = +prompt("Enter length of multiplication table", 10);
document.write("<br> Multiplication of " +TableToPrint+ "<br> Length of table " +TableLength);
for(var i = 1; i<=TableLength; i++){
    document.write(TableToPrint + " * " +i+ " = " +(TableToPrint*i)+"<br>");
}

//Task 05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0; i<fruits.length; i++){
    document.write("<br>"+fruits[i]);
} 
for(var i = 0; i<fruits.length; i++){
    document.write("<br> Element at index " +i+ " is " +fruits[i]);
} 

//Task 06
document.write("<br> Counting: <br><br>");
for(var i =1; i<=15; i++){
    document.write(i+ ",");
}

document.write("<br> Reverse Counting: <br><br>");
for(var i =10; i>=1; i++){
    document.write(i+ ",");
}

document.write("<br> Even: <br><br>");
for(var i =0; i<=20; i=i+2){
    document.write(i+ ",");
}

document.write("<br> Odd: <br><br>");
for(var i =1; i<=20; i=i+2){
    document.write(i+ ",");
}

document.write("<br> Series: <br><br>");
for(var i =2; i<=20; i=i+2){
    document.write(i+ ",");
}
 //Task 07
 var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
 var itemToSearch = prompt("Wellcome to ABC Bakery. What do you want to order sir/ma'am");
 itemToSearch = itemToSearch.toLowerCase();
 for (var i = 0; i<bakery.length ; i++){
    if(itemToSearch === bakery[i]){
        break;
    }
 }
 if(i===bakery.length){
     document.write("<br> We are sorry! "+itemToSearch+ " is not available in our bakery.");
 }
 else{
    document.write("<br>" + itemToSearch+ "is present at index " +i);
 }

 //Task 08
 var X = [24,53,78,91,12];
 var max = X[0];
 document.write("<br> Array Elements: "+X + "<br> The largest number is ");
 for(var i =0; i<X.length; i++){
    if(X[i]>max){
        max = X[i];
    }
 }
 document.write(max);

//Task 09
var Y = [24,53,78,91,12];
var min = Y[0];
document.write("<br> Array Elements: "+ Y + "<br> The Smallest number is ");
for(var i =0; i<Y.length; i++){
   if(Y[i]<min){
       min = Y[i];
   }
}
document.write(min +"<br>");

//Task 10

for (var i =1; i<100; i++){
    if(i%5 === 0){
        document.write(i);
    }
}



/*********************************************Chapter 21-25***************************************************** */
//Task 1
var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
var fullName = fname+" " +lname;
alert("Hello "+fullName+ " Have a nice day");
//Task 2
var phone = prompt("Enter your favorite mobile phone model");
document.write("<br>My favorite mobile is: " +phone+"<br> Length of string: "+phone.length);
//Task 3
document.write("<br>String: Paksitani <br> Index of 'n' is "+"Pakistan".indexOf('n'));
//Task 4
document.write("<br> String: Hello World <br> Last Index of 'l' is " +"Hello World".lastIndexOf('l'));
//Task 5
document.write("<br> String: Pakistani <br> Character at Index 3 is  " +"Pakistani".charAt(3));
//Task 6
var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
var fullName = fname.concat(" " + lname);
alert("Hello "+fullName+ " Have a nice day");
//Task 7
document.write("<br> City: Hyderabad <br> After Replacement: " + "Hyderabad".replace("Hyder","Islam"));
//Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<br> " +message.replace(/and/g, "&"));
//Task 9
var mystr = "472";
var no = Number(mystr);
document.write("<br> Value: "+mystr+ "<br> Type: "+typeof(mystr)+"<br> Value: "+num+ "<br> Type: "+typeof(no));
//Task 10
var input = prompt("Write peanuts in lowercase","peanuts");
document.write("<br>User input: "+input+ " <br> Upper Case: "+input.toUpperCase());
//Task 11
var input2 = prompt("Write javascript","javascript");
document.write("<br>User input: "+input2+ " <br> Title Case: "+input2[0].toUpperCase()+input2.slice(1));
//Task 12
var num = 35.36;
var str = String(num);
document.write("<br>Number: "+num+"<br> Result: "+str.replace(".",""));
//Task 13
var username  = prompt("Write Username","Cm@d");
for(var i = 0; i<username.length; i++){
    if(username[i]=='!'||username[i]=='@'||username[i]=='.'||username[i]==','){
        alert("Please enter a valid username");
        break;
    }
}
//Task 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var choice = prompt("Wellcome to ABC Bakery. What do you want to order sir/ma'am","cookie").toLowerCase();
for(i = 0; i<A.length; i++){
    if(choice ===A[i]){
        break;
    }
}
if(i===A.length){
        alert(" We are sorry! "+choice+ " is not available in our bakery.");
}
else{
    alert(choice + " is present at index "+i);
}
//Task 15
var password = prompt("Enter password");
var count = 0;
var count2 = 0;
var check = 0;
document.write("<br>Entered Password: "+password);
for(var i = 0; i<password.length; i++){
    if((password[i]>='A'&&password[i]<='Z')||(password[i]>='a'&&password[i]<='z')){
        count++;
    }
    if(password[i]>='0'&&password[i]<='9'){
        count2++;
    }
}
if(password.length<6){
    document.write("<br> Length of password cannot be less than 6");
    check++;
}
if((password[0]>='0'&&password[0]<='9')){
    document.write("<br> Password cannot begin with a number");
    check++;
}
if(count===0){
    document.write("<br> Password must contain alphabet");
    check++;
}
if(count2===0){
    document.write("<br> Password must contain number");
    check++;
}
if(check!=0){
    document.write("<br> Please Enter a valid Password")
}
//Task 16
var university = "University of Karachi"; 
var newuniversity = university.split(' ');
for(var i = 0; i<newuniversity.length; i++){
    for(var j = 0; j<newuniversity[i].length;j++){
    document.write("<br>"+newuniversity[i][j]);}
    document.write("<br>");
}
//Task 17
var userInput = prompt("Enter any word");
document.write("<br> User Input: "+userInput+"<br> Last character of input: "+userInput[userInput.length-1]);
//Task 18
var strstr = "The quick brown fox jumps over the lazy dog";
str =  strstr.split(' ');
var count = 0;
for(var i =0; i<str.length;i++){
    if(str[i].toLowerCase()==="the"){
        count++;
    }
}
document.write("<br> Text: "+strstr+"<br> There are "+count+" occurences of the word 'the'");
/****************************************Chapter 26-30************************************************* */
//Task 1
var num1 = prompt("Enter a positive integer: ",3.45214);
if(num1>0){
document.write("<br> Number: "+num1 + "<br> round off value: " + Math.round(num1) + "<br> Floor Value: "+Math.floor(num1)+"<br> Ceil Value: "+Math.ceil(num1));
}
else{
    alert("Please enter a positive integer");
}
//Task 2
var num2 = prompt("Enter a negative integer: ",-2.673);
if(num1>0){
document.write("<br> Number: "+num2 + "<br> round off value: " + Math.round(num2) + "<br> Floor Value: "+Math.floor(num2)+"<br> Ceil Value: "+Math.ceil(num2));
}
else{
    alert("Please enter a negative integer");
}
//Task 3
var num3 = prompt("Enter a number to get its absolute value",-4);
document.write("<br>The absolute value of "+num3 +" is "+Math.abs(num3));
//Task 4
document.write("<br> random dice value: "+ Math.round(Math.random(1,6)*6));
//Task 5
var x = Math.round(Math.random(1,2)*10);
document.write("<br>"+x);
if(x==2){
    document.write("<br> Random coin value: Heads");
}
else if(x==1){
    document.write("<br> Random coin value: Tail");
}
//Task 6
var y = Math.random(1,100);
document.write("<br> Random between 1 and 100 is "+Math.round(y*100));
//Task 7
var weight = prompt("Enter your weight in kilograms", 50);
weight = parseFloat(weight);
document.write("<br> The weight of the user is "+ weight + " kilograms");
//Task 8
var secretnum =Math.round(Math.random(1,10)*10);
var z = prompt("Guess the number between 1 and 10");
if(secretnum ==z){
    alert("Congratulations! You got the number right");
}
else{
    alert("Try Again");
}
/**********************************************Chapter 31-34********************************************** */
//Task 1
var today = new Date();
document.write("<br> "+today);
//Task 2
var today = new Date();
var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"] 
document.write("<br> Current Month: "+monthlist[today.getMonth()]);
//Task 3
var today = new Date();
var daylist = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
document.write("<br> Today is "+daylist[today.getDay()]);
//Task 4
var today = new Date();
var daylist = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
if(daylist[today.getDay()]==0||daylist[today.getDay()]==6){
    document.write("<br> It's Fun day");
}
//Task 5
var today = new Date();
var date = today.getDate();
if(date<=15){
    document.write("<br> First fifteen days of the month");
}
else{
    document.write("<br> Last fifteen days of the month");
}
//Task 6
var today = new Date();
var timeSince1970 = today.getTime();
document.write("<br> Current Date" +today+"<br> Elapsed milliseconds since January 1, 1970: "+timeSince1970+"<br> Elapsed minutes since January 1, 1970: "+Math.floor((timeSince1970/(1000*60))));

//Task 7
var today = new Date();
var hour = today.getHours();
if(hour <=12){
    document.write("<br> It's AM");
}
else{
    document.write("<br> It's PM");   
}
//Task 8
var lastDate = new Date("Dec 31 2020");
document.write("<br> Later Date: "+lastDate);
//Task 9 
var today = new Date();
var RamadanDate = new Date("Jun 18 2015");
var todayDate = today.getTime();
var RamadanDate = RamadanDate.getTime();
var days = Math.floor((todayDate-RamadanDate)/(1000*60*60*24));
alert(days+" days have passed since 1st Ramadan, 2015");
//Task 10
var obj = new Date("Jan 1 2015");
var Reference = new Date("Dec 5 2015 22:15:16");
var objDate = obj.getTime();
var ReferenceDate = Reference.getTime();
var seconds = Math.floor((ReferenceDate-objDate)/1000);
alert("On reference Date : "+Reference+"\n "+seconds+" seconds had passed since beginning of 2015");

//Task 11
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
time2 = (today.getHours()-1) + ":" + today.getMinutes() + ":" + today.getSeconds();
var day =today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var monthlist = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
document.write("<br> Current time"+daylist[day]+" "+monthlist[today.getMonth()]+" "+time+"<br> 1 hour ago"+daylist[day]+" "+monthlist[today.getMonth()]+" "+time2);
//Task 12
var today = new Date();
var back = new Date();
back.setFullYear(today.getFullYear()-100);

alert("Current Date: "+today+"\n 100 years back It was "+back);
//Task 13
var age = +prompt("Enter your age");
document.write("<br> Your birth year is "+(today.getFullYear()-age));
//Task 14
var today = new Date();
var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"] 
document.write("<br> <h1>K Electric Bill</h1><br> Customer Name: ABC customer <br> Bill Month: "+monthlist[today.getMonth()]+"<br> Number of Units: 410 <br> Charges per unit: 16 <br> Net Amount Payable(within due date): "+(410*16)+"<br> Late payment surcharge: 350 <br> Gross Amount Payable(after due date): "+(410*16+350));
/*************************************************Chapter 35-38*************************************************** */
//Task 1
function showCurrentTime(){
    var today = new Date();
    document.write("<br> "+today);
}
showCurrentTime();
//Task 2
function greet(fname,lname){
    alert("Hello, "+fname+" " +lname+" Have a nice day");
}
var firstName = "Asif";
var lastName = "Raza";
greet(firstName,lastName);
//Task 3
function add(a=2,b=2){
    return (a+b)
}
var a = +prompt("Enter first number",2);
var b = +prompt("Enter second number",2);
c = add(a,b);
document.write("<br> Sum of "+a+" and "+b+" is "+c);
//Task 4
function calculator(num1,op,num2){
    switch (op){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "+":
            return num1/num2;
            break;
        default:
            alert("Wrong input Try Again");
    }
}
var num1 = +prompt("Enter first number",2);
var num2 = +prompt("Enter second number",2);
var op = prompt("Enter operation to be performed +,-,*,/");
calculator(num1,op,num2);
//Task 5
function calcsquare(x){
    return Math.pow(x,2)
}
var square = calcsquare(3);
document.write("<br> Square of 3 is " +square);
//Task 6
function fact(x){
    var f = 1;
    for(;x>=1;x-- ){
        f = f*x;
    }
    return f;
}
document.write("<br> Factorial of 5 is "+fact(5));
// Task 7
function counting(start, end){
    document.write("<br> Starting number: "+start+"<br> Ending number: "+end);
    for(var i = start; i<=end ; i++){
        document.write("<br> "+i);
    }
}
var start = +prompt("Enter start number of counting",1);
var end = +prompt("Enter last number of counting",10);
counting(start,end);
// Task 8
function calculateSquare(x){
    return Math.pow(x,2);
}
function calculateHypotaneuse(base, perpendicular){
    return (calculateSquare(base)+calculateSquare(perpendicular));
}
var a = +prompt("Enter base of right angle triangle",5);
var b = +prompt("Enter perpendicular of right angle triangle",4);
var hypotaneuse = Math.sqrt(calculateHypotaneuse(a,b));
alert("Hypotaneuse of triangle is calculated to be "+Math.round(hypotaneuse));
//Task 9
function calcArea(a,b){
    return a*b;
}
var area = calcArea(2,3);
document.write("<br> Width = 2 units , Height = 3 units Area is calculated to be "+area);
//task 10
function checkPalindrome(x){
    var y = "";
    for(var i =x.length-1; i>=0; i--){
        y = y+x[i]
    }
    if(y === x){
        alert(x + " is palindrome string");
    }
    else{
        alert(x+ " is not palindrome string");
    }
}
stringtocheck = prompt("Enter a string to check it is palindrome or not").toLowerCase();
checkPalindrome(stringtocheck);
//Task 11
function convertFirstLetterToCapital(str)
{
 Nstr = str.split(" ");
 str = "";
 
 for(var i =0; i<Nstr.length-1; i++){
    Nstr[i] = Nstr[i][0].toUpperCase()+Nstr[i].slice(1);
    str = str + Nstr[i]+" ";
 }
 return str;
}
var stringToBeConverted = prompt("Enter string to convert its first letter off all words into capital","the quick brown fox ");
var newstr = (convertFirstLetterToCapital(stringToBeConverted));
alert("Given String: "+stringToBeConverted+"\nAfter Conversion: "+newstr);
//Task 12
var max = 0;
var longestword;
function findLongestWord(x){
    var longestword;
    var y= x.split(" ");
   for(var i = 0; i<y.length; i++){
        if((y[i].length)>max){
            max = y[i].length;
            longestword = y[i];
        }
   }
   return longestword;

}
var str = prompt("Enter a string to find itd longest word","Web Development Tutorial");
alert("Longest word of the string is " +(findLongestWord(str)));
//Task 13
function checkOccurences(str,ch){
    var count = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i]===ch){
            count++;
        }
    }
    return count;
}
alert("Letter 'o' occurs " +checkOccurences('JSResourceS.com', 'o')+" times in 'JSResourceS.com'");
//Task 14
function calcCircumferenc(r){
    return (2*Math.PI*r)
}
function calcArea(r){
    return (Math.PI*Math.pow(r,2));
}
var radius = 5 ;
alert("Radius of circle is "+radius+" units\n Area of Circle = "+Math.round(calcArea(radius))+" sq units\n Circumference of circle = "+Math.round(calcCircumferenc(radius))+" units");








/***************************************Chapter 38-42********************************************************** */
//Question # 01   Write a custom function power ( a, b ), to calculate the value of a raised to b. 

function power(a,b){
    document.write(" <br>"+a+" raised to the power "+b+ " is "+(Math.pow(a,b)))
    
}
// Question # 02  Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 
function isLeap(year){
    if(year%4==0&&year%100!=0){
        document.write("<br> "+year+"  is leap year");
    }
    else{
        document.write("<br> "+year+" is not leap year");
    }
}
var year = +prompt("Enter year to check it is leap year or not");
isLeap(year);

// Question # 03  If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions
function forS(a,b,c){
    return (a+b+c)/2;
}
function area(a,b,c){
    var S = forS(a,b,c);
    return S*(S-a)*(S-b)*(S-c)
}
document.write("<br> Area of triangle whose sides are 10,5,3 cm length are "+area(10,5,7)+" cm sq.");
//Queation # 04 Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. 
 function percentage(m1,m2,m3){
    return ((m1+m2+m3)/300)*100;
 }
 function average(m1,m2,m3){
    return (m1+m2+m3)/3
 }
 function mainFunction(m1,m2,m3){
    document.write("<br> Marks in 1st subject =" +m1+" <br> Marks in second subject = "+m2+ " <br> Marks in third subject = "+m3+" <br> Total marks = "+(m1+m2+m3)+"<br> Average Marks = "+average(m1,m2,m3)+" <br> Percetntage = "+percentage(m1,m2,m3)+"%");
 }
 mainFunction(80,90,70);
 // Questtion # 05  You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now. 
 function customIndexOf(st,ch){
     // ch is character to be searched in string st
    var index;
    for (var i = 0;i<st.length;i++){
        if(st[i]==ch){
            index = i;
            break
        }
        else{
            index = -1
        }
    }
    return index;
 }

 //Question # 06 Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long
 function removeVowels(sen){
     for(var i = 0; i<sen.length;i++){
        if(sen[i]==='A'||sen[i]==='E'||sen[i]==='e'||sen[i]=='a'||sen[i]==='I'||sen[i]==='i'||sen[i]==='O'||sen[i]==='o'||sen[i]==='U'||sen[i]==='u'){
            sen = sen.slice(0,i)+sen.slice(i+1)
        }
    }
    document.write("<br> "+sen);
}
removeVowels("Web development");
// Question # 07 Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence 
function countSuccessiveVowels(sen){
    var st = "",count =0;;
    for(var i = 0;i<sen.length;i++){
        (sen[i]+sen[i+1]).toLowerCase();
        switch(sen[i]+sen[i+1]){
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'aa':
               
            case 'ea':
            case 'ei':
            case 'eo':
            case 'ee':
            case 'eu':
            
            case 'ia':
            case 'ie':
            case 'io':
            case 'iu':
            case 'ii':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'ou':
            case 'oo':
            
            case 'ua':
            case 'ui':
            case 'uo':
            case 'uu':
            case 'ue':
            st = st+sen[i]+sen[i+1]+",";    
            count++;
            break;
            default:
                continue;
        }
    }
    document.write( "<br> Successive vowels in sentence" +sen+"are "+st+"Total"+count);
}
countSuccessiveVowels(" Pleases read this application and give me gratuity ");
// Question # 08. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters. 
var distance = +prompt("Enter distance in km");
function feet(dis){
    document.write("<br>"+"Distance in feets is " +(dis*1000*3.2)+"ft");
}
function meter(dis){
    document.write("<br>"+"Distance in metres is " +(dis*1000)+"metres");
}
function cm(dis){
    document.write("<br>"+"Distance in centimeters is " +(dis*1000*100)+" cm");
}
function inch(dis){
    document.write("<br>"+"Distance in inches is " +(dis*1000*39.37)+" inch");
}
feet(distance);
meter(distance);
cm(distance);
inch(distance);
//question # 09. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
var workhours = +prompt("Enter how many hours employ have worked");
var overtime = (workhours)-40;
var overtimepay = overtime*12;
if(overtime<=0){
    document.write("<br> No overtime");
}
else{
    document.write("<br> Overtime pay is "+overtimepay+" RS");
}

//Question # 10
var cash = +prompt("Enter amount to be withdrawn");
var h=0,f=0,t=0;
if(cash<10){
    alert("Amount is less than 10");
}
else{
    for(var i =0; cash>=10;i++){
        if(cash>=100){
            h++;
            cash = cash-100;
        }
        else if(cash>=50){
            f++;
            cash = cash-50;
        }
        else if(cash>=10){
            t++;
            cash = cash-10;
        }
    }
}
document.write("<br>Cashier will give "+h+" Hundred notes "+f+" fifty Rs notes and "+t+" ten Rs notes");






/***************************************Chapter 43-52******************************* */
// Question # 01 Show an alert box on click on a link. 






document.write("<br> <a onclick = 'showAlert()'>Click here to see alert</a>");
function showAlert(){
    alert("link is clicked");
}
//Question # 02  Display some Mobile images in browser. On click on an image Show the message in alert to user. 
 
document.write("<br> <img onclick = 'showpurchasealert()' src='phone1.png' alt=''><img onclick = 'showpurchasealert()' src='phone2.png' alt=''> <img onclick = 'showpurchasealert()' src='phone3.png' alt=''> ");
function showpurchasealert(){
    alert("Thanks for purchasing a phone from us");
}

//Question # 03
var student = [{name: "John", Class : 10},{name: "Doe", Class : 9},{name: "Mark", Class : 10},{name: "James", Class : 8}]
document.write("<br><table><tr><th>Index</th><th>Name</th><th>Class</th><th></th></tr>");
showRecord();
function showRecord(){
    for(var i = 0; i<student.length;i++){
        document.write("<tr><td>"+i+"</td><td>"+student[i].name+"</td><td>"+student[i].Class+"</td><td><button onclick = 'deleteRecord(this)'>Delete</button></td></tr>");
}
}
function deleteRecord(elmnt){
   //var row = cell.parentNode.parentNode;
   elmnt.parentNode.parentNode.parentNode.removeChild(elmnt.parentNode.parentNode); 
}
//Qusetion 04. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
document.write("<br> <img id = 'image' onmouseover=\"changeimage('phone2.png')\" onmouseout=\"changeimage('phone1.png')\" src='phone1.png'>");
function changeimage(link){
    img = document.getElementById('image');
    img.src = link;
}
//Qusetion 05 Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser. 
var counter =0;
document.write("<br> Counter value: <p id = 'counter'>0</p>");
document.write(" <button onclick = 'decrease()'>Decrease counter</button> <button onclick = 'increase()'>Increase counter</button>");
function increase(){
    counter = counter+1;
    document.getElementById('counter').innerHTML = counter;
}
function decrease(){
    counter = counter-1
    document.getElementById('counter').innerHTML = counter;
}








/**************************************Chapter 49-52**************************************** */
// Question #01 Create a signup form and display form data in your web page on submission.
// Form is on index.html 





function formelement(){
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    Class = document.getElementById("Class").value;
    document.write("<br> Details of Submitted form <br> Name: "+name+"<br> Age: "+age+"<br> Class : "+Class)
}
// Question #02 Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.
function readmore(){
    document.getElementById("more").style.display = "inline";
    document.getElementById("btn").style.display = "none";
}
// Question #03 In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.  
function add() {
    var table = document.getElementById("data");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = document.getElementById("index").value;
    document.getElementById("index").value = "";
    cell2.innerHTML = document.getElementById("name").value;
    document.getElementById("name").value = "";
    cell3.innerHTML = document.getElementById("level").value;
    document.getElementById("level").value = "";
    cell4.innerHTML = "<button id='edit' type='button' onclick='edit(this)'>Edit</button>";
    cell5.innerHTML = "<button id='del' type='button' onclick='del(this)'>Delete</button>";
}
function del(cell){
    var row = cell.parentNode.parentNode;
    row.parentNode.removeChild(row);

}
function edit(cell){
    var row = cell.parentNode.parentNode;
    document.getElementById("index").value = row.cells[0].innerHTML;
    document.getElementById("name").value = row.cells[1].innerHTML;
    document.getElementById("level").value = row.cells[2].innerHTML;
}
/****************************************Chapter 52-58******************** */
p.style.fontSize = "10px";
function zin(){
    var p = document.getElementById("p");
    p.style.fontSize = (parseFloat(p.style.fontSize)+10)+"px";
}

function zout(){
    var p = document.getElementById("p");
    p.style.fontSize = (parseFloat(p.style.fontSize)-10)+"px";
}
/***************************************Chapter 58-67**************** */





// Question #01 i. Get element of id “main-content” and assign them in a variable.
main = document.getElementById('main-content');
// Question #01 ii. Display all child elements of “main-content” element
var nod = document.getElementById('main-content').childNodes;
console.log(nod);
// Question #01 iii.  Get all elements of class “render” and show their innerHTML in browser. 
var rend = document.getElementsByClassName('render');
for(var i =0; i<rend.length;i++){
    document.write(rend[i].innerHTML);
}
// Question #01 iv. Fill input value whose element id first-name using javascript. 
document.getElementById('first-name').value = "Abc"
// Question # 01 v.  Repeat part iv for id ”last-name” and “email”.
document.getElementById('last-name').value = 'xyz';
document.getElementById('email').value = 'abc@gmail.com';
//Question # 02 i. What is node type of  element having id “form-content”.
document.write(document.getElementById('form-content').nodeType);
//Question # 02 ii. Show node type of element having id “lastName” and its child node.
document.write(document.getElementById('last-name').nodeType);
var cNodes = document.getElementById('last-name').childNodes;
for(var i =0; i<cNodes.length;i++){
    document.write(cNodes[i].nodeType);
}
//Question # 02 iii. Update child node of element having id “lastName”
var cn = document.getElementById('last-name');
cn.childNodes= 'p'
//Question # 02 iv. Get First and last child of id “main-content”.
document.write(document.getElementById('main-content').firstChild);
document.write(document.getElementById('main-content').lastChild);
//Question # 02 v. Get next and previous siblings of id “lastName”. 
document.write(document.getElementById('last-name').nextSibling);
document.write(document.getElementById('last-name').previousSibling);
//Question # 02 vi. Get parent node and node type of element having id “email”
document.write(document.getElementById('email').parentNode);
document.write(document.getElementById('email').nodeType);



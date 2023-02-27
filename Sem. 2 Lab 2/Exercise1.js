function function1(){
	document.write("Hello  from function 1 <br>");
}

function1();

function function2(){
	document.write("Hello from function 2 <br>");
}

function2();

function function3(param){
	document.write("You passed me, function 3, a value of: " + param + "<br>");
}

function3(4);

function function4(value1, value2){
	document.write("You passed me, function 4, values of: " + value1 + " and " + value2 + "<br>");
}

function4(10, "ten");

function function5(value1, value2, value3){
	document.write("You passed me, function 5, values of: " + value1 + " , " + value2 + " and " + value3+ "<br>");
}

function5(5,6,37);



function function6(){
	let fname = prompt("First name:");
	let lname = prompt("Last name");
	document.write("You passed me, function 6, the name: " + fname + " " + lname+ "<br>");
}

function6();

function function7(num){
	return num;
}

document.write("Function7 returned a value of " + function7(1000) + " to me. <br>");

function func8(name1, name2){
	let fullname = name1 + " " + name2;
	return fullname;
}

document.write("You passed me the name: " + func8("Shane", "Walsh") + "<br>");


func9 = (num1, num2, num3) =>{
	return num1+num2+num3;
}

document.write(func9(4,7,9));

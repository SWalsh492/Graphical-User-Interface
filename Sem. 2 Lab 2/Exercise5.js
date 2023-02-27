


function arithmetic(num1,num2,op){
	if(op == 1)
	{
		alert("Result: " + num1+num2);
	}
	else if(op == 2)
	{
		alert("Result: " + num1-num2);
	}
	else if(op == 3)
	{
		alert("Result: " + num1*num2);
	}
	else
	{
		alert("Result: " + num1/num2);
	}
}

carryOn = 1;
do
{
let num1 = prompt("Enter num1:");
let num2 = prompt("Enter num2:");
let op = prompt("Choose Operation: ");

arithmetic(num1, num2, op);

let input = prompt("Do you want to perform anymore calculations?");
if(input == 0)
{
	carryOn++;
}
else(input == 2)
{
	break;
}
}while(carryOn = 1)
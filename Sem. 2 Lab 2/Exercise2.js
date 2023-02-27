function exam(){
	let result = prompt("Enter a numeric result for an exam:");
	
	if(result > 84)
	{
		document.write("<h3>Merit: " + result + " </h3><br>");
	}
	else if(result < 84 && result > 40)
	{
		document.write("<h3>Pass: " + result + " </h3><br>");
	}
	else
	{
		document.write("<h3>Fail: " + result + " </h3><br>");
	}
}

exam();

function divisible(){
	for(i = 1; i <= 10; i++)
	{
		if(i%3 == 0)
		{
			document.write(i + "<br>");
		}
	}
}

divisible();
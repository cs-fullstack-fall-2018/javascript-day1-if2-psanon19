var varibleNum1 = parseInt(prompt("What is your first Number?"));
var varibleNum2 = parseInt(prompt("What is your second Number?"));
var varibleNum3 = parseInt(prompt("What is your third Number?"));

sum = varibleNum1+varibleNum2+varibleNum3

if (sum>21)
{
    alert("Bust")
}
else if (sum==21)
{
    alert("Blackjack")
}
else
{
    alert("The TOTAL is: "+sum)
}
var gradeNum = parseInt(prompt("What is your Grade?"));


if (gradeNum>=101)
{
    alert("Error")
}
else if (gradeNum>=90)
{
    alert("You earned an A!!")
}
else if (gradeNum>=80)
{
    alert("You earned an B!")
}
else if (gradeNum>=70)
{
    alert("You earned an C")
}
else if (gradeNum>=60)
{
    alert("You earned an D.")
}
else if (gradeNum>=0)
{
    alert("You earned an F...")
}
else
{
    alert("Error")
}
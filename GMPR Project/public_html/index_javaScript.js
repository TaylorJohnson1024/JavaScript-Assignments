//banner variables
var imgArray = new Array(7);
var index = 0;

//banner cycling
function startupBanner()
{
    imgArray[0] = new Image;
    imgArray[0].src = "assets/logo0.png";
    imgArray[1] = new Image;
    imgArray[1].src = "assets/logo1.png";
    imgArray[2] = new Image;
    imgArray[2].src = "assets/logo2.png";
    imgArray[3] = new Image;
    imgArray[3].src = "assets/logo3.png";
    imgArray[4] = new Image;
    imgArray[4].src = "assets/logo4.png";
    imgArray[5] = new Image;
    imgArray[5].src = "assets/logo4.png";
    imgArray[6] = new Image;
    imgArray[6].src = "assets/logo4.png";
    cycle();
    return;
}

function startupBannerLevel2() //sets folders up one level
{
    imgArray[0] = new Image;
    imgArray[0].src = "../assets/logo0.png";
    imgArray[1] = new Image;
    imgArray[1].src = "../assets/logo1.png";
    imgArray[2] = new Image;
    imgArray[2].src = "../assets/logo2.png";
    imgArray[3] = new Image;
    imgArray[3].src = "../assets/logo3.png";
    imgArray[4] = new Image;
    imgArray[4].src = "../assets/logo4.png";
    imgArray[5] = new Image;
    imgArray[5].src = "../assets/logo4.png";
    imgArray[6] = new Image;
    imgArray[6].src = "../assets/logo4.png";
    cycle();
    return;
}

function cycle() //allows the banner to cycle
{
    document.banner.src = imgArray[index].src;
    index++;
    if(index > 6)
    {
        index = 0;
    }
    setTimeout("cycle()", 500);
    return;
}

function doSubmit() //shows a message when the submit button is used
{
    if(document.survey.site.value === "")
    {
        alert("Please enter the name of a site into the text field.");
    }
    else
    {
        alert("Thank you for submitting your request. I will review it and implement\n\
            it when time permits.");
        return;
    }
}
            
function doClear() //clears all data in the form when the clear button is used
{
    document.survey.site.value = "";              
                
    document.survey.requirements[0].checked = false;
    document.survey.requirements[1].checked = false;
    document.survey.requirements[2].checked = false;
                
    document.survey.comments.value = "Enter Here";
    return;
}

function doSubmitTester() //runs the tester program, changes images
{
    if(testerLength() === true)
    {
        document.getElementById("testImg1").src = "assets/pass.png";
    }
    else
    {
        document.getElementById("testImg1").src = "assets/fail.png";
    }
    
    if(testerUpper() === true)
    {
        document.getElementById("testImg2").src = "assets/pass.png";
    }
    else
    {
        document.getElementById("testImg2").src = "assets/fail.png";
    }
    
    if(testerLower() === true)
    {
        document.getElementById("testImg3").src = "assets/pass.png";
    }
    else
    {
        document.getElementById("testImg3").src = "assets/fail.png";
    }
    
    if(testerNumber() === true)
    {
        document.getElementById("testImg4").src = "assets/pass.png";
    }
    else
    {
        document.getElementById("testImg4").src = "assets/fail.png";
    }
}

function testerLength() //tests the length of the password
{
    var min = parseInt(document.getElementById("minLength").value);
    var max = parseInt(document.getElementById("maxLength").value);
    var password = document.getElementById("password").value;
    lower = /[a-z]/;
    upper = /[A-Z]/;
    
    //makes sure the fields don't have text in them
    if(lower.test(min) || lower.test(max) || upper.test(min) || upper.test(max))
    {
        //also accounts for null as it return NaN if nothing is within the field
        alert("Please enter a valid number.");
        return false;
    }
    //makes sure the numbers are not negative
    else if(min < 0 || max < 0)
    {
        alert("Make sure there are no negative numbers.");
        return false;
    }
    //makes sure the min is less than the max
    else if(max < min)
    {
        alert("Max is "+ max + " and min is " + min + ". Max is less than min.");
        return false;
    }
    //makes sure the password field is not NaN
    else if(password === "")
    {
        alert("Please enter a valid password.");
        return false;
    }
    //if password is greater than min and less than max than return true
    else if(password.length >= min && password.length <= max)
    {
        return true;
    }
    //if not, return false
    else
    {
        return false;
    }
    
}

function testerUpper() //tests password to see if it has uppercase letters
{
    var password = document.getElementById("password").value;
    upper = /[A-Z]/;
    
    if(upper.test(password)) //returns true if password containes an uppercase letter
    {
        return true;
    }
    else
    {
        return false;
    }
}

function testerLower() //tests password to see if it has lowercase letters
{
    var password = document.getElementById("password").value;
    lower = /[a-z]/;
    
    if(lower.test(password)) //returns true if password containes an lowercase letter
    {
        return true;
    }
    else
    {
        return false;
    }
}

function testerNumber() //tests password to see if it has numbers
{
    var password = document.getElementById("password").value;
    number = /[0-9]/;
    
    if(number.test(password)) //returns true if password containes a number
    {
        return true;
    }
    else
    {
        return false;
    }
}
            
function doClearTester() //clears all data in the tester when the clear button is used
{
    document.tester.minLength.value = "6";
    document.tester.maxLength.value = "20";   
    document.tester.password.value = "Testing123";
    
    document.getElementById("testImg1").src = "assets/fail.png";
    document.getElementById("testImg2").src = "assets/fail.png";
    document.getElementById("testImg3").src = "assets/fail.png";
    document.getElementById("testImg4").src = "assets/fail.png";
    return;
}

function doSubmitGenerator() //generates password examples in display box
{
    var text = "";
    for (i = 0; i < 30; i++) {
        text += "Example_" + i + "\n";
    }
    document.generator.display.value = text;
}

function doClearGenerator() //clears passwords from display box
{
    document.generator.display.value = "Generate passwords";
    return;
}
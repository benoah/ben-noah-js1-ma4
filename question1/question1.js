/* Write code that checks that the firstName input's value
is at least 2 characters long when the form is submitted.
Show/hide the error message every time the validation runs.*/

// checks firsName input´s value is at least 2 character long when the form is submitted

// Let's get the input by its id:

function check(inputText, minText, maxLength){
    let field = inputText.value;
    let minTxt = minText;
    let maxTxt = maxLength;

    if(field.length < minTxt || field.length > maxTxt)
    {
        alert("Please input the userid between " +minTxt+ " and " +maxTxt+ " characters");
        return false;
    } 
    else{
        alert('Your userid have accepted.');
return true;
    }
}

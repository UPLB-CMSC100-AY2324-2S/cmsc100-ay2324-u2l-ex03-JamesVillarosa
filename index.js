const password1 = "Pass1234";
const password2 = "Pass1234";
const username = "John";

function validatePassword (password1, password2)
{
    var char = 0;
    var number = 0;
    var uppercase = 0;
    var lowercase = 0;
    var isnumber = false;
    
    if (password1 == password2)
    {
        for (i = 0; i<password1.length; i++)
        {
            if (typeof(password1[i])=="string")
            {
                char++;
            }
            if (password1[i] >= 0 && password1[i] <= 9) 
            {
                number++;
                isnumber = true;
            }
            if (password1[i] == password1[i].toUpperCase() && isnumber==false)
            {
                uppercase++;
            }
            if (password1[i] == password1[i].toLowerCase() && isnumber==false)
            {
                lowercase++;
            }
        }

        if (char < 8)
        {
            console.log("Insufficient Number of Strings!");
            return false;
        }
        else if (number < 1 || uppercase < 1 || lowercase < 1)
        {
            console.log("Invalid Password!");
            return false;
        }
        else
        {
            return true;
        }

    var isnumber = false;
    }
    else
    {
        console.log("Wrong Password!");
        return false;
    }
}

function reversePassword(password1)
{
    let reversedPassword_array = [];

    for (i = password1.length-1; i >= 0; i--)
    {
        reversedPassword_array.push(password1[i]);
    }
    let reversedPassword = reversedPassword_array.join("");
    return reversedPassword;
}

function objectPassword (password1, reversedPassword, username)
{
        let account = 
        {
            username: username,
            actual_password: password1,
            new_password: reversedPassword
        }

        return account;
}

var validated = validatePassword(password1,password2);

if (validated)
{
    reversedPassword = reversePassword(password1);   
    console.log(objectPassword(password1, reversedPassword, username));
}

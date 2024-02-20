const password1 = "Password2";
const password2 = "Password2";
const username = "James";

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
                char--;
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

var validated = validatePassword(password1,password2);

if (validated)
{
    reversedPassword = reversePassword(password1);   
}

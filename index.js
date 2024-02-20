const password1 = "Pass1234";
const password2 = "Pass1234";           // Hard Coded passwords and username.
const username = "John";

function validatePassword (password1, password2)        // Function that validates password.
{
    var char = 0;
    var number = 0;                         // Initialization of variables to be use in validation.
    var uppercase = 0;
    var lowercase = 0;
    var isnumber = false;
    
    if (password1 == password2)                     // If the two passwords are matched.
    {
        for (i = 0; i<password1.length; i++)            // Traversing the characters in password.
        {
            if (typeof(password1[i])=="string")             // If char is string, increment string count.
            {
                char++;
            }
            if (password1[i] >= 0 && password1[i] <= 9)     // If char is number, increment number and number will be true
            {                                               // so that it will not be included in upper/lowercase count.
                number++;
                isnumber = true;
            }
            if (password1[i] == password1[i].toUpperCase() && isnumber==false)      // If char is uppercase, increment uppercase count.
            {
                uppercase++;
            }
            if (password1[i] == password1[i].toLowerCase() && isnumber==false)      // If char is lowercase, increment lowercase count.
            {
                lowercase++;
            }
        }

        if (char < 8)                                                               // Password must have at least 8 chars.
        {
            console.log("Insufficient Number of Strings!");
            return false;
        }
        else if (number < 1 || uppercase < 1 || lowercase < 1)                      // Password must have at least 1 number, 1 uppercase,
        {                                                                           // and 1 lower case character.
            console.log("Invalid Password!");
            return false;
        }
        else
        {
            return true;                                                            // Return true if all conditions are satisfied.
        }

    var isnumber = false;                                                           // Returning isnumber to false for other chars.
    }
    else
    {
        console.log("Wrong Password!");                                             // If the two passwords are not match.
        return false;
    }
}

function reversePassword(password1)                                         // Function that reverse the chars in valid password.
{
    let reversedPassword_array = [];                                        // Initializing empty array for the reversed char to store.

    for (i = password1.length-1; i >= 0; i--)                               // Traversing password chars in reverse order.
    {
        reversedPassword_array.push(password1[i]);                          // Pushing chars in array in reversed order.
    }
    let reversedPassword = reversedPassword_array.join("");                 // Combining elements of array into string.
    return reversedPassword;                                                // Returning reversed password.
}

function objectPassword (password1, reversedPassword, username)             // Function that makes object with username, actual password,
{                                                                           // and new password as its keys.
        let account = 
        {
            username: username,                                             // Creating the object named account with username,
            actual_password: password1,                                     // actual password, and new password keys.
            new_password: reversedPassword
        }

        return account;                                                     // Returning created object.
}

var validated = validatePassword(password1,password2);      // Function call for validatePassword with password 1 and 2 parameter.

if (validated)                                                      // If password is valid, password will be reverse and object will be created.
{
    reversedPassword = reversePassword(password1);                  // Call for reversedPassword function with parameter password1/2
    console.log(objectPassword(password1, reversedPassword, username));         // Call and Print the returned value of objectPassword function.
}

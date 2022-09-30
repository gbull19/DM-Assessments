/*
const password = "lukas4TheWin!";
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

if (password.length >= 10 && /[0-9]/.test(password) && /[a-z]/.test(password) && specialChars.test(password) && /[A-Z]/.test(password)) {
    console.log("Password saved successfully!");
} else {
    console.log("Choose a better password, fool.\nPassword must be at least 10 characters long.\nPassword must contain at least one uppercase letter, one number, and one special character.");
}
*/

/*
if (password.length >= 10 && /[0-9]/.test(password) && /[a-z]/.test(password) && specialChars.test(password) && /[A-Z]/.test(password)) {
    console.log("Password saved successfully!");
} else if (!/[0-9]/.test(password)) {
    console.log("Choose a better password, fool.\nPassword must contain at least one number.");
} else if (!password.length >= 10) {
    console.log("Choose a better password, fool.\nPassword must contain at least 10 characters.");
} else if (!/[a-z]/.test(password)) {
    console.log("Choose a better password, fool.\nPassword must contain at least one lowercase letter.");
} else if (!/[A-Z]/.test(password)) {
    console.log("Choose a better password, fool.\nPassword must contain at least one uppercase letter.");
} else if (!specialChars.test(password)) {
    console.log("Choose a better password, fool.\nPassword must contain at least one special character.");
} else {
    console.log("Choose a better password, fool.");
}
*/

const password = "Lukas4TheWin!";
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

switch (true) {
    case (password.length >= 10 && /[0-9]/.test(password) && /[a-z]/.test(password) && specialChars.test(password) && /[A-Z]/.test(password)):
        console.log("Password saved successfully!");
        break;
    case (!password.length >= 10):
        console.log("Choose a better password, fool.\nPassword must contain at least 10 characters.");
        break;
    case (!/[0-9]/.test(password)):
        console.log("Choose a better password, fool.\nPassword must contain at least one number.");
        break;
    case (!/[a-z]/.test(password)):
        console.log("Choose a better password, fool.\nPassword must contain at least one lowercase letter.");
        break;
    case (!/[A-Z]/.test(password)):
        console.log("Choose a better password, fool.\nPassword must contain at least one uppercase letter.");
        break;
    case (!specialChars.test(password)):
        console.log("Choose a better password, fool.\nPassword must contain at least one special character.");
        break;
    default:
        console.log("Choose a better password, fool.");
        break;
}
// main container div
const mainContainer = document.createElement("div");
mainContainer.className = "container";
document.body.appendChild(mainContainer);

//header
const welcomeHeader = document.createElement("h1");
welcomeHeader.textContent = "WELCOME";
welcomeHeader.style.color = "white";
welcomeHeader.style.background = "red";
mainContainer.appendChild(welcomeHeader);

//introductory paragraph
const introParagraph = document.createElement("p");
introParagraph.textContent = "You are 30 seconds away from earning your own money!";
introParagraph.style.color = "white";
introParagraph.style.fontSize = "larger";
mainContainer.appendChild(introParagraph);

// "login" button
const loginButton = document.createElement("a");
loginButton.href = "#";
loginButton.className = "button";
loginButton.textContent = "login";
mainContainer.appendChild(loginButton);

// second container div
const secondContainer = document.createElement("div");
secondContainer.className = "container";
document.body.appendChild(secondContainer);

//"Apply as a Employee" header
const applyHeader = document.createElement("h1");
applyHeader.textContent = "Apply as a Employee";
secondContainer.appendChild(applyHeader);

// form element
const registrationForm = document.createElement("form");
registrationForm.action = "";
registrationForm.method = "post";
registrationForm.name = "registration";
registrationForm.id = "registration";
secondContainer.appendChild(registrationForm);

//form input elements
function createFormInput(type, name, id, placeholder, required) {
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.id = id;
    input.placeholder = placeholder;
    if (required) {
        input.setAttribute("required", "true");
    }
    registrationForm.appendChild(input);
    return input;
}

const firstnameInput = createFormInput("text", "firstname", "firstname", "First Name");
const emailInput = createFormInput("email", "email", "email", "Your Email");
const lastnameInput = createFormInput("text", "lastname", "lastname", "Last Name");
const numberInput = createFormInput("tel", "number", "number", "Your Phone Number");
const passwordInput = createFormInput("password", "password", "password", "Password", true);
const confirmPasswordInput = createFormInput("password", "password1", "password1", "Confirm Password", true);

// security question select element
const securityQuestionSelect = document.createElement("select");
securityQuestionSelect.name = "Security Question";
securityQuestionSelect.id = "question";
registrationForm.appendChild(securityQuestionSelect);
//security question options
const securityQuestionOptions = [
    "Select a security question",
    "Pet's name",
    "Pet's favorite food",
    "Your favorite food"
];

securityQuestionOptions.forEach((optionText, index) => {
    const option = document.createElement("option");
    option.value = index.toString();
    option.textContent = optionText;
    securityQuestionSelect.appendChild(option);
});

// answer input field
const answerInput = createFormInput("text", "answer", "answer", "Enter your Answer");

//gender radio buttons
function createRadioInput(name, value, labelText, checked) {
    const label = document.createElement("label");
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = value;
    if (checked) {
        input.checked = true;
    }

    registrationForm.appendChild(label);
    label.appendChild(input);

    return input;
}

const maleRadio = createRadioInput("gender", "Male", "Male", true);
const femaleRadio = createRadioInput("gender", "Female", "Female", false);

//"Register" button
const registerButton = document.createElement("button");
registerButton.type = "submit";
registerButton.textContent = "Register";
registrationForm.appendChild(registerButton);

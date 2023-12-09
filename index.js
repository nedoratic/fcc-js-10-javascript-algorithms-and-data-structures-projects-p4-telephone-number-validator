// Define a function to check if a string is a valid US phone number
const telephoneCheck = (str) => {
	// Define a regular expression pattern for a valid US phone number
	const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
	// Test the input string against the regular expression pattern
	return phoneRegex.test(str);
};

// Define a function to render the result based on user input
const renderResult = () => {
	// Get the input string value
	const inputString = document.querySelector(".app__input").value;
	// Get the result element
	let result = document.querySelector(".app__result");
	// Check if the input string value is a valid US phone number and update the result
	result.innerHTML = telephoneCheck(inputString) ? `This is a valid telephone number.` : `This is not a valid telephone number.`;
	// Remove CSS classes to change the color of the result
	result.classList.remove("app__result--on", "app__result--off");
	// Add CSS class to change the color of the result based on validity
	result.classList.add(telephoneCheck(inputString) ? "app__result--on" : "app__result--off");
};

// Select the button element
const button = document.querySelector(".app__button");

// Add an event listener to the button to trigger the app functionality when clicked
button.addEventListener("click", renderResult);

// Tests with console logs
console.log(`Passed: ${telephoneCheck("555-555-5555")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("1 555-555-5555")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("1 (555) 555-5555")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("5555555555")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("555-555-5555")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("(555)555-5555")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("1(555)555-5555")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("555-5555")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("5555555")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("1 555)555-5555")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("1 555 555 5555")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("1 456 789 4444")}`);
// Passed: true

console.log(`Passed: ${telephoneCheck("123**&!!asdf#")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("55555555")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("(6054756961)")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("2 (757) 622-7382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("0 (757) 622-7382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("-1 (757) 622-7382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("2 757 622-7382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("10 (757) 622-7382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("27576227382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("(275)76227382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("2(757)6227382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("2(757)622-7382")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("555)-555-5555")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("(555-555-5555")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("(555)5(55?)-5555")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("55 55-55-555-5")}`);
// Passed: false

console.log(`Passed: ${telephoneCheck("11 555-555-5555")}`);
// Passed: false

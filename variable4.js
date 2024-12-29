// 1. Prompt the user to enter their name.
// 2. Wait for the user to input their name.
// 3. Once the user enters their name, capture the input.
// 4. Print a message saying "Hello [name]".
// 5. After the message is displayed, exit the program to prevent further input or processing.
// Asking the user for their name
process.stdout.write("Please enter your name: ");

// Listening for input from the user
process.stdin.on('data', function(inputFromUser) {
  // Convert input to a string and remove any extra newlines
  let givenName = inputFromUser.toString().trim();
  
  // Print the greeting message
  console.log("Hello " + givenName);
  
  // Exit the program
  process.exit();
});

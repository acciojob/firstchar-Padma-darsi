function firstChar(text) {
  // Ensure text is defined and remove leading/trailing spaces
  let trimmedText = text.trim() : 
  // Return the first character of the trimmed string, or an empty string if the input is empty
  return trimmedText.charAt(0);
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));

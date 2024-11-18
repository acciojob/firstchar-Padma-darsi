function firstChar(text) {
  // Remove leading and trailing spaces
  const trimmedText = text.trim();
  // Return the first character if the trimmed string is not empty, otherwise return an empty string
  return trimmedText.length > 0 ? trimmedText[0] : '';
}

// Example usage
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(' Rosa Parks '));  // Output: 'R'
alert(firstChar(' Hello World ')); // Output: 'H'
alert(firstChar('   '));           // Output: ''
alert(firstChar(''));              // Output: ''

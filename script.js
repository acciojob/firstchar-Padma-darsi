function firstChar(text) {
  // Remove leading and trailing spaces and iterate through the string
  for (let char of text.trim()) {
    // If the character is not a space, return it
    if (char !== ' ') {
      return char;
    }
  }
  // If no valid character is found, return an empty string
  return '';
}

// Example usage
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(' Rosa Parks '));  // Output: 'R'
alert(firstChar(' Hello World ')); // Output: 'H'
alert(firstChar('   '));           // Output: ''
alert(firstChar(''));              // Output: ''

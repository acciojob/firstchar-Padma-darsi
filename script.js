function firstChar(text) {
  // Ensure text is defined and remove leading/trailing spaces
  const trimmedText = text ? text.trim() : '';
  // Return the first character of the trimmed string, or an empty string if the input is empty
  return trimmedText.length > 0 ? trimmedText[0] : '';
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));

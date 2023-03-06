
const str = "I am Raju and Raju is my name and I am from Bangalore";

// Split the string into an array of words - Here word are recognized based on the space in between the words.
const words = str.split(" ");

// Initialize an empty object - this object works as store and help to store the repeated items, their indexes, and their count
const repeatedWords = {};

// Loop through each word in the array and add its index to the repeated object - we can do the task either using for also.
words.forEach((word, index) => {
  if (words.indexOf(word) !== index) {
    // Check if the word is already in the repeated object - here using hasOwnProperty we can find the wheather the object has the property which he has mentioned
    if (repeated.hasOwnProperty(word)) {
      // increment its count and push the new index to its array of indexes
      // Here we increment value of property count and pushes index to the array indexes
      repeated[word].count++;
      repeated[word].indexes.push(index);
    } else {
      // If object doesn't contain property of word or new word, create a new property with a count of 1 and an array of indexes
      repeated[word] = {
        count: 1,
        indexes: [index],
      };
    }
  }
});

console.log(repeatedWords);

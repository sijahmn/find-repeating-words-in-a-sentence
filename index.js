
const str = "I am Raju and Raju is my name and I am from Bangalore";

// Split the string into an array of words - Here word are recognized based on the space in between the words.
const words = str.split(" ");

// Here using reduce higher order function created a new empty object and added the repeated elemet in array and its index in 'words' array
const repeated = words.reduce((acc, item, index) => {
  if (words.indexOf(item) !== index) {
    // Check if the item is already in the repeated object
    if (acc.hasOwnProperty(item)) {
      // If it is, increment its count and push the new index to its array of indexes
      acc[item].count++;
      acc[item].indexes.push(index);
    } else {
      // If it's not, create a new property with a count of 1 and an array of indexes
      acc[item] = {
        count: 1,
        indexes: [index],
      };
    }
  }
  return acc;
}, {});
console.log(repeated);

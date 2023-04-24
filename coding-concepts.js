// ASSESSMENT 1: Coding Conceptual Questions


// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length) 

// a) Your answer: 10
// b) Verify and explain: 
        // Output: 10
            // The output comes out to 10 because it starts counting each character in the string individually starting from 1. Although there are only 9 alphabetical letters in the string, the space between LEARN and 2023 also counts as a character.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain:
        // Output: o
            // The output is o because the index of the character is 4. Indexed numbers always start at 0 which is why it isn't the l.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain:
        // Output: Ruby
            // The log shows Ruby as the output because of its location in the array. Index counting starts fromo 0, which is why Ruby is indexed as 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain:
        // Output: syntax error
            // The output is a syntax error because the toUpperCase method could only convert a string to uppercase letters, not an array. If I really needed to convert the elements of weekendDays array into uppercase, I could do weekendDays.join().toUpperCase()), to first convert the elements inside the array into a string then uppercasing the letters.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)
// a) Your answer: 4
// b) Verify and explain:
        // Output: number
            // I thought the answer was 4 since I only paid attention to the dataTypes.length. However, I should have paid attention that a typeof operator was included and since 4 is a number dataype, the log returned a string that said it's a number.
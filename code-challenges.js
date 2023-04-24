// ASSESSMENT 1: Coding Practical Questions

// 1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
    
    const temperature1 = 42
        // Expected output: "42 is below boiling point"

    const temperature2 = 350
        // Expected output: "350 is above boiling point"

    const temperature3 = 212
        // Expected output: "212 is at boiling point"

// Pseudo code: 
    // The variable temp represents the number inputted.
    // The function hotOrNot will determine if the variable temp is below, above, or at boiling point.
    // Only the variable temperature3 is necessary since it would be redundant to use the other variables.
    // However, since there are many possible numbers inputted, using conditionals such as if, else if, and else will be used.
    // The function hotOrNot will need to return a string that needs to display the following:
        // If the temp input is less than temperature3, it will need to show that it is below boiling point.
        // If the temp input is equal to temperature3, it will need to show that it is at boiling point.
        // If the temp input is greater than temperature3, it will need to show that it is at boiling point. 

const hotOrNot = (temp) => {
    if (temp < temperature3) {
        return (temp + " is below boiling point")
    } else if (temp > temperature3) 
        return (temp + " is above boiling point")
        else (temp = temperature3)
        return (temp + " is at boiling point")
    }

    console.log(hotOrNot(-1));
    console.log(hotOrNot(900));
    console.log(hotOrNot(212));


// 2) Create the code that will combine the two arrays and return the length using the test variables provided below.

    const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
    const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// Pseudo Code:
    // I need to declare another variable (padresWorldSeriesRuns) to represent the combination of the two arrays. 
    // Concantenation will be used to combine the two arrays. Since it is an accessor it will not alter the original values
    // Another built-in method is needed to return the length of the combined arrays.
    // The result should show 9 as the expected output since there are 5 values in the first array and 4 in the second array.

const padresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

    console.log(padresWorldSeriesRuns.length);
        // Expected output: 9


// 3) Create the code that will reverse the letters of a string using the test variable provided below.

    const currentCohort = "Charlie 2023"

// Pseudo Code:
    // I need to declare another variable (currentCohort) to represent the string that will be reversed. Using reverse on the variable currentCohort is not possible since the data type is not compatible with the method.
    // To start, it is necessary to turn a string into an array. Adding in quotations inside its grouping operator indexes the elements in specific location. 
    // Now that the is now separated into different elements inside an array, the reverse method can now be used to reverse the index of the elements.
    // The join method will be used to connect the separated elements, but adding in quotations inside its grouping operator removes the commas that separate the elements. 
    // The expected output should show the reversed "3202 eilrahC"

console.log(currentCohort.split("").reverse().join(""));
    // Expected output: "3202 eilrahC"


// 4) Create the code that will return the last index of the given value from the array using the test variables provided below.

    const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

        const givenValue1 = 42
        const index1 = numberOfConnections.lastIndexOf(givenValue1)
        console.log(index1);
        // Expected output: 7

        const givenValue2 = 10
        const index2 = numberOfConnections.lastIndexOf(givenValue2)
        console.log(index2);
        // Expected output: 8


// Pseudo code:
    // I need to declare different variables (index1 and index2) to use the index method on the array (numberOfConnections).
    // However .indexOf method will only show the first index of the givenValues. To show the last index of the givenValue, I have to use the .lastIndexOf instead. 
    // The index method starts counting from 0 (unlike the length method) which is why the expected output from givenValue1 is 7 and givenValue2 is 10. 


// 5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
    // I will need to use the sort method to sort the elements inside the array in a particular way. However, the .sort will not work properly unless it is sorting strings, which is why i had to use an arrow syntax to create a function.
    // I used the a and b parameters to represent the numbers inside the array.
    // The (b - a) indicates the comparison it needs to make to sort the values in the correct order. 
    // When you subtract the numbers you can either get a positive, a negative, or 0.
    // But if you wanna sort from largest to smallest, it was important for the highest positive difference between b and a to be the first number outputted (It's like the inverse of how they determine who places first in golf).
    
    const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
        // Expected output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoSummerTemperatures.sort((a, b) => b - a);
console.log(sanDiegoSummerTemperatures);

    const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
        // Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoWinterTemperatures.sort((a,b) => b - a);
console.log(sanDiegoWinterTemperatures);
       
       
// I wasn't paying attention and thought I had to combine the summer and winter temperatures
    // Pseudo code:
            // To sort all the numbers in one array, I concatenated to combine the two arrays (sanDiegoSummerTemp and sanDiegoWinterTemp) into a single array (sanDiegoTemperatures) without altering the data.
            // I then used the sorting method on the array. However, the default behavior of .sort will not work properly unless it is sorting strings, which is why a function is needed.
            // Thus, using the parameters (a and b) and the arrow syntax to represent a function expression.
            // And to ensure that the numbers are sorted from largest to smallest, it was necessary to use (b - a) so that if: 
                // a === b, it doesn't matter which one comes first
                // a > b, it returns a negative value and will place the b after the a
                // a < b, it returns a positive value and will place the b before the a
// const sanDiegoTemperatures = sanDiegoSummerTemperatures.concat(sanDiegoWinterTemperatures)

// sanDiegoTemperatures.sort((a,b) => b - a);

//     console.log(sanDiegoTemperatures);
        // Output: [82, 80, 79, 77, 76, 73, 72, 68, 67, 66, 66, 62, 59, 59]
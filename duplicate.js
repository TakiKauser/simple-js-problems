// remove duplicate items from an array of strings
const friends = ['mahfuz', 'chamak', 'rafsan', 'khairul', 'didi', 'arefin', 'khairul', 'arefin', 'nahid', 'bappi', 'nayan', 'shadhin', 'bappi', 'nahid'];

function removeDuplicate(array){
    const unique = [];
   /*  for (let i = 0; i < array.length; i++){
        const element = array[i];
        // console.log(element);
    } */

    for (const element of array){
        // console.log(element);
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqeNames = removeDuplicate(friends);
// console.log(uniqeNames);


// remove duplicate items from an array of numbers
const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 4, 6, 7, 9, 0, 10, 11,3, 12];

function removeDuplicateNumbers(array){
    const uniqueNumber = [];
    for(const element of array){
        if (uniqueNumber.indexOf(element) == -1){
            uniqueNumber.push(element);
        }
    }
    return uniqueNumber;
}

const uniqueArray = removeDuplicateNumbers(numbers);
console.log(uniqueArray);
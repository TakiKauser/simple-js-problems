const string = "Hey dude, what's up???";

function reverseString(text){
    let reverse = "";
    for (const letter of text){
        // console.log(letter);
        reverse = letter + reverse;
        // console.log(reverse);
    }
    console.log(reverse);
}

const reversed = reverseString(string);
console.log(reversed);
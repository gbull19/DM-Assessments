let arr = [28, 43, -12, 30, 4, 0, 12];
const addToZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length ; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            } 
        }
    }
    return false
}
console.log(addToZero(arr));
// runtime complexity: O(n^2)


let hasUniqueChars = str => {
    str = String(str);
    let set = new Set(str);
    return set.size === str.length;
}
console.log(hasUniqueChars("Moonday"));
// runtime complexity: O(n)


const isPangram = str => {
    str = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i <alphabet.length; i++) {
        if(str.indexOf(alphabet[i]) === -1) {return false};
    } return true;
}
console.log(isPangram("I like cats, but not mice"))
// runtime complexity: O(n)


const findLongestWord = arr => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {num = arr[i].length}
    } return num
}
console.log(findLongestWord(["hi", "hello"]))
// runtime complexity: O(n)



//suck it space complexity
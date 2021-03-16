// function reverseString(string){
//     var temp = "";
//     for (i = 0; i < string.length)
// }

// function parensValid(input){
//     var openPCount = 0;
//     var closedPCount = 0;
//     for (var i = 0; i < input.length; i++){
//         if (input[i] == "("){
//             openPCount++
//         }
//         else if (input[i] == ")"){
//             closedPCount++
//             if (closedPCount > openPCount){
//                 return false
//             }
//         }
//     }
//     if (openPCount == closedPCount){
//         return true
//     }
//     else{
//         return false
//     }
// }

// // console.log(parensValid("())[one million random characters]!!!"))

// function bracesValid(input){
//     var openBCount = 0;
//     var closedBCount = 0;
//     var openPCount = 0;
//     var closedPCount = 0;
//     var openCCount = 0;
//     var closedCCount = 0;
//     for (var i = 0; i < input.length; i++){
//         if (input[i] == "("){
//             openPCount++
//         }
//         else if (input[i] == ")"){
//             closedPCount++
//             if (closedPCount > openPCount){
//                 return false
//             }
//         }
//     }
//     for (var i = 0; i < input.length; i++){
//         if (input[i] == "["){
//             openBCount++
//         }
//         else if (input[i] == "]"){
//             closedBCount++
//             if (closedBCount > openBCount){
//                 return false
//             }
//         }
//     }
//     for (var i = 0; i < input.length; i++){
//         if (input[i] == "{"){
//             openCCount++
//         }
//         else if (input[i] == "}"){
//             closedCCount++
//             if (closedCCount > openCCount){
//                 return false
//             }
//         }
//     }
//     if (openBCount == closedBCount && openPCount == closedPCount && openCCount == closedCCount ){
//         return true
//     }
//     else{
//         return false
//     }
// }

// // console.log(bracesValid("({[])"))

// function bracesValid(input){
//     var openCount = 0;
//     var closedCount = 0;
//     for (var i = 0; i < input.length; i++){
//         if (input[i] == "(" || input[i] == "[" || input[i] == "{"){
//             openCount++
//         }
//         else if (input[i] == ")" || input[i] == "]" || input[i] == "}"){
//             closedCount++
//             if (closedCount > openCount){
//                 return false
//             }
//         }
//     }
//     if (openCount == closedCount){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(bracesValid("({[]})"))

// function charsValid(input, left_char, right_char){
//     var openPCount = 0;
//     var closedPCount = 0;
//     for (var i = 0; i < input.length; i++){
//         if (input[i] == left_char){
//             openPCount++
//         }
//         else if (input[i] == right_char){
//             closedPCount++
//             if (closedPCount > openPCount){
//                 return false
//             }
//         }
//     }
//     if (openPCount == closedPCount){
//         return true
//     }
//     else{
//         return false
//     }
// }

// // console.log(charsValid("(())", "(", ")"))

// function bracesValid2(input, characters) {
//   // characters is something like ['()', '[]', '<>']
//   for (x of characters) {
//     if (charsValid(input, x[0], x[1]) != true) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(bracesValid2("({}[])<>", ['()', '[]', '{}', '<>']))

// function isPalindrome(input){
//     for (var i = 0 ; i < input.length; i++){
//         if (input[i] != input[input.length - (i + 1)]){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPalindrome("tacocat"))


// longestPalindrome(input)
// find and return the longest palindrome within your input string
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "abacabd" -> "aba" or "aca"
// "abcde" -> "a" or "e", but probably "a"
// "a" -> "a" (lol)
// "racecar" -> "racecar"
// "" -> ""

// function longestPalindrome(input) {
//     var counter = 0; 
//     var max = 0;
//     for (var i = 0; i < input.length; i++){
//         // checking input[i-1] and input[i+1] ==, if so, check next one. If not, stop and go on
//         for (var x = 0; x < input.length; x++){
//             if (input[x - 1] == input[x + 1]){
//                 counter++;
//             }
//             else{
//                 if(counter > max){
//                     max = counter * 2 + 1;
//                 }
//                 counter = 0;
//                 break;
//             }
//         }
//     }
// }

// // can you improve this?
// // shoot me a message if you figure out something cool
// function longestPalindrome(input) {
//     if (input.length == 0) {
//       return "";
//     }

//     // if input length is 1

//     var result = input[0]; //just in case we find nothing,like an input of "abc"

//     for (var i = 0; i < input.length; i++) {
//       var left = 0;
//       var right = 0;
//       //determine if we have a string of idential characters
//       //i.e. a trivial palindrome
//       while (input[i - 1 - left] == input[i]) {
//         left++;
//       }
//       while (input[i + 1 + right] == input[i]) {
//         right++;
//       }
//       //now check for non-trivial palindromes
//       while (input[i - 1 - left] == input[i+ 1 + right]) {
//         if (input[i - 1 - left] === undefined && input[i+ 1 + right] === undefined) {
//           console.log("entire string is palindrome");
//           //special case here - entire string is a palindrome
//           //just return the input
//           return input;
//         }
//         left++;
//         right++;
//       }
//       //we have a potential longest palindrome -
//       //check it against the current longest
//       potential = input.slice(i - left, i + right + 1);
//       if (potential.length > result.length) {
//         result = potential;
//       }
//     }
    
//     return result;
//   }



// bookIndex(input)
// input is an array of integers representing
// pages in a book where a particular term is found
// (you can assume everything is an integer - no Roman
// numerals or anything)
// output is a string that is formatted similarly
// to a list of pages found in a book index
// [1, 13, 14, 15, 37, 38] -> "1, 13-15, 37-38"
// [7, 33, 34, 56, 57, 58, 59, 61] ->
// "7, 33-34, 56-59, 61"
//
// suggestion: break this into two parts
// go from [7, 33, 34, 56, 57, 58, 59, 61]
// to ["7", "33-34", "56-59", "61"]
// to "7, 33-34, 56-59, 61"

// function bookIndex(input) {

// }


class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
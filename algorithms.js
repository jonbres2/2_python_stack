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
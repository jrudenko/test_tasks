// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }
// checkPassword('mangohackzor');//Access denied, wrong password!
// checkPassword('polyhax');//Access denied, wrong password!
// console.log(checkPassword('jqueryismyjam'));//'Welcome!'

// Сложить два массива

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const newfruits = [...fruits, 'banana'];
// или;
// const newfruits2 = fruits.concat('mandarins', 'mangoes');

// fruits.slice(1, 1); - взять часть массива

// Task: 1
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// var countSheep = function (num) {
//   let sheep = '';
//   for (let i = 1; i <= num; i++) {
//     sheep += `${i} sheep...`;
//   }
//   return sheep;
// };

// Task: 2
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// function duplicateEncode(str) {
//   // создаем переменную для хранения строкового значения, которое ИГНОРИРУЕТ регистр
//   var word = str.toLowerCase();
//   //создаем переменную для хранения готовой строки, которая будет возвращена после того, как она зациклится
//   var unique = '';
//   //перебираем все буквы в строке
//   for (var i = 0; i < word.length; i++) {
//     //проверяем наличие повторяющихся символов
//     if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//       // для каждого персонажа, который никогда не дублирует, поместите (
//       unique += '(';
//     }
//     // для каждого символа, который ЯВЛЯЕТСЯ обманом, поместите )
//     else unique += ')';
//   }
//   //возвратить полное строковое значение, где '(' не обмануты, а все')' обмануты
//   return unique;
// }
// //проверить, напечатав это в консоли
// console.log(duplicateEncode('BaRaban'));

// Task: 3

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// function isValidWalk(walk) {
//   let dax = 0;
//   let dy = 0;
//   let dt = walk.length;

//   for (let i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n':
//         dy--;
//         break;
//       case 's':
//         dy++;
//         break;
//       case 'w':
//         dy--;
//         break;
//       case 'e':
//         dy++;
//         break;
//     }
//   }
//   return dt === 10 && dax === 0 && dy === 0;
// }

// Task: 4  === Метод charAt() возвращает указанный символ из строки.
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// function getMiddle(s) {
//   const evenOdd = s.length % 2 === 0;
//   const minMid = s.charAt(s.length / 2 - 1);
//   const mid = s.charAt(s.length / 2);

//   return evenOdd === true ? minMid.concat(mid) : mid;
// }
// - - - alt - - -
// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

// Task: 5
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// var countBits = function (n) {
//   //сделать массив с битовым результатом
//   const base = n.tostring(2).split('');
//   // составим сумму с массивом и сделайте индекс Number
//   const result = base.reduse((sum, num) => sum + Number(num), 0);
//   return result;
// };
// - - - alt - - -
// countBits = n => n.toString(2).split('0').join('').length;

// Task:6 Каждая первая буква в строке должна быть заглавной
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// String.prototype.toJadenCase = function () {
//   return this.split(' ')
//     .map(function (item) {
//       return item.charAt(0).toUpperCase() + item.slice(1);
//     })
//     .join(' ');
// };

// // - - - alt - - -
// String.prototype.toJadenCase = function () {
//   return this.split(' ')
//     .map(item => item[0].toUpperCase() + item.slice(1))
//     .join(' ');
// };

// Task: 6;
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
// function isPangram(string) {
//   return (string.match(/([a-z](?!.*\1)/gi) || []).length === 26;
// }

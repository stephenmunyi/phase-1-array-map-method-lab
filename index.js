const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let titleCased = () => {
  return tutorials.map((line) => {
    let letters = line.split(" ");
    let capitalizedLetters = letters.map(
      (letter) => letter.charAt(0).toUpperCase() + letter.slice(1)
     );
       let response = capitalizedLetters.join(" ");
       return response;
    });
};
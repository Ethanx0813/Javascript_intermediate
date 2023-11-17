const replaceJavaScriptWithES6 = inputText => inputText.replace(/javascript/gi, 'ES6');

const originalText = "JavaScript is a programming language. there are two types of javascript functions normal functions and arrow javascript functions.";
const modifiedText = replaceJavaScriptWithES6(originalText);

console.log(modifiedText);

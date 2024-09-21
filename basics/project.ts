// a variable userName, receives a string.
// userName now has string type. so the code below that will not work
let userName = 'Lucas';

// this code will not work:
userName = 28;

// but in Javascript it would work 'cause it does not support types.


// important thing to mention is that userName now has string type, because it was assigned a stirng value
// so TS was capable to implicit type the variable userName to type string.

// but ofcourse we can explicity type the varibales. Like Ill do bellow
let someStringTypeVariable: string;
let someNumberTypeVariable: number;

// will work:
someStringTypeVariable = 'Lucas';
someNumberTypeVariable = 29;

// will not work:
someStringTypeVariable = 29:
someNumberTypeVariable = 'Lucas';

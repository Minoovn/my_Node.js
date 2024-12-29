const util = require("util");

const name = "Ali";
const age = 30;
const pi = 3.14159;

// فرمت کردن خروجی برای نام و سن
const message = util.format("Hello %s, you are %d years old.", name, age);
console.log(message);  // خروجی: Hello Ali, you are 30 years old.

// فرمت کردن عدد pi با 2 رقم اعشار
const piFormatted = pi.toFixed(2);
console.log("Pi formatted: " + piFormatted);  // خروجی: Pi formatted: 3.14

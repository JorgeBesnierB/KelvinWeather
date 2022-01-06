const kelvin = 0; //measured temperature

//Fist Conversion: Kelvin to celsius (kelvin - 273)
let celsius = kelvin-273;

//Formula Fahrenheit: Fahrenheit = Celsius * (9/5) + 32
let Fahrenheit = celsius * (9/5) + 32;

//Round Fahrenheit result using floor method
Fahrenheit = Math.floor(Fahrenheit);

console.log(`the temperature is ${Fahrenheit} degrees Fahrenheit`);
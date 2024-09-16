let speedinput = 72;
let speedOutput= speedinput/3.6;
console.log(speedOutput);

let minutesInput =3;
let secondsOutput = 3*60;
console.log(secondsOutput);

let Input1 = 11;
let Input2= Input1/4;
console.log(Input2);

let input1= 11;
let output= input1%4;
console.log(output);

// A = π r²;
let cirkleRadius= 2;
let cirkleArea= Math.PI* Math.pow(cirkleRadius,2);
console.log(cirkleArea );

let numberInput=11;
let negativeOutput= -(numberInput);
console.log(negativeOutput);

// Input: 70, 1,82 Output: 21,13...
// Bmi = 1,82* 1,82/ 70

let HeightM = 1.82;
let Weight= 70;

let Bmi= Weight/ Math.pow(HeightM, 2);
console.log(Bmi);

/*Implement a program that takes a number input representing seconds and converts it to minutes and remaining seconds, then displays the result.*/

let InputInSeconds = 111;

let OutputInMin= Math.floor(InputInSeconds/60);
console.log(OutputInMin);
let OutputInMinAndSec= OutputInMin + "(min)" +  InputInSeconds% 60+ "(sec) ";
console.log(OutputInMinAndSec);


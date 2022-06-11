// [변수선언하기] : var/let/const 변수명
// - let/const 재선언불가
// - let : 재할당 가능
// - const : 재할당 불가능

// 1. 숫자형 자료 선언
var num = 1;
var num = 10;
console.log(num);

let num2 = 2;
num2 = 20;
console.log(num2);

const num3 =3;
console.log(num3);

// 2. 문자형 자료 : ""/''
let string = "안녕";

// 3. 논리형 자료 : true/false , 참거짓
let bool = true;
let t = 100 > 10;

console.log(t);
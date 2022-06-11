// 1. 산술연산자

// % : 나머지
console.log(1 % 3);

// 2. 비교연산자

// === : 같다 / !== : 다르다 (자료형까지 비교)
console.log(1 === 1); // true
console.log(1 === "1"); // false

// == : 같다 / != : 다르다 (데이터타입상관없이 값만 비교)
console.log(1 == 1); // true
console.log(1 == "1"); // true

// 3. 논리연산자
let option1 = 10 > 1; // true
let option2 = 2 == 3; // false

// or연산 : 둘 중 하나라도 true 이면 true를 반환
console.log(option1 || option2); // true

// and연산 : 모두 true 이여야 true 반환
console.log(option1 && option2); // false

// not연산 : 논리의 반댓값을 반환
console.log(!option1); // false

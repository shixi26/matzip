/*
[ 문제 ]
`적정체중 = (키 - 100) * 0.9` 라고 합니다.

[ 풀이 ]
1. 본인의 키를 변수에 저장하세요.
2. 본인의 적정체중을 변수에 저장하세요
3. 아래 문자열을 콘솔창에 반환하세요.

`당신의 키는 -cm이며 적정체중은 -kg입니다.`
*/

let height = 158;
let properWeight = (height - 100) * 0.9;
console.log(
  "당신의 키는 " + height + "cm이며 적정체중은 " + properWeight + "kg입니다."
);

console.log(`당신의 키는 ${height}cm이며 적정체중은 ${properWeight}kg입니다.`);

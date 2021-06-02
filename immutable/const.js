const c = 1;

console.log(c);

// 상수변수 const 는 한번선언하면 변수 값을 바꿀 수 없다
// 시도했을 시 에러가 뜬다

var o1 = { name: "jy" };
var o2 = Object.assign({}, o1); // o1의 객체 복사
console.log(o2.name);

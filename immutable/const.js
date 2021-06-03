const c = 1;

console.log(c);

// 상수변수 const 는 한번선언하면 변수 값을 바꿀 수 없다
// 시도했을 시 에러가 뜬다

var o1 = { name: "jy" };
var o2 = Object.assign({}, o1); // o1의 객체 복사
console.log(o2.name);
concat; // 원본 복제 & push 기능 있다. (배열복제에경우 사용 )

//예시
var o1 = {
  score: [1, 2],
};

var o2 = Object.assign({}, o1); // Object로 o1객체 복사

o2.score = o1.score.concat(3); //score값 배열 복사 & 3 추가
console.log(o2);

// 상황에따라 가변과 불변의 api를 적절히 선택해서 사용할것

//객체 (프로퍼티) 얼리기 Object freeze();

//const vs Object.freeze
// const 이름과 값을 고정한다
// freeze 값 자체를 바꾸지 못한다

const o = { name: "yeom" };
Object.freeze(o);
const o5 = { name: "ke" };

// o5 = o;  에러 const 땜에
// o.name = "kdfg";  에러 freeze땜에

console.log(o5);

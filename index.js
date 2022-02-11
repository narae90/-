// .ts 파일은 브라우저가 못읽음 
// ts파일을 js로 변환해야 사용가능
// 터미널에서 tsc -w 입력하면 자동변환됨
var john = [123, true];
var 이름 = 'kim';
var 나이 = 44;
var 결혼여부 = false; // undefined, null 타입도 있음
//array
var 이름들 = ['kim', 'park'];
// object
var 오브젝트이름 = { name1: 'kim', name2: 'yang' };
var profile = { name: 'kim', age: '33' };
// class 타입지정 가능 
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// Union Type
// 타입2개 이상 합친 새로운 타입 만들기
var 회원 = 1234;
회원 = 'kim';
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: '123' };
// any타입 
// 타입실드 해제문법
// 일반 JS변수로 만들고 싶을 때
// 타입 관련 버그가 나도 잡아주지 않음
var 이름2;
이름2 = 123;
이름2 = [];
// unknown 타입 
// any보다 안전
// unknown은 number타입이 아님
var 이름3;
// 간단한 수학연산도 타입을 맞춰야 함
var 나이2;
// string타입 +1 (허용)
// number타입 +1 (허용)
// string | number +1 (안됨)
// 나이2 + 1; 안됨 
// 함수는 파라미터,return값에 타입지정 가능
// 자바스크립트와 다른점 -> 타입지정된 파라미터 필수
function 함수(x) {
    return x * 2;
}
함수(5);
// 파라미터가 옵션일 경우엔 -> 파라미터변수?:타입
// 변수?(물음표):number는 -> 변수:number|undefined와 같음
// function 함수3(x? :number) :number {
//     return x * 2
// }
// 함수3()
// 함수에서 void타입 활용 가능 -> 실수로 뭔가 return하는걸 사전에 막을 수 있음
function 함수2(x) {
    // return x * 2
}
// Narrowing으로 판정해주는 문법들
// typeof 변수
// 속셩명 in 오브젝트자료
// 인스턴스 instanceof 부모
function 내함수(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
내함수(123);
// assertion 문법의 용도
// 1. Narrowing 할때
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓰기
// 남이 짠 코드 수정할때, 왜 타입에러가 나는지 모르겠을 때 비상용으로 주로 쓰임
function 내함수2(x) {
    var array = [];
    array[0] = x;
}
내함수2(123);
var 동물 = 123;
var 동물2 = { name: 'kim', age: 5 };
var 남친 = {
    name: '강동원'
};
var position = { x: 10, y: 30 };
// 더 엄격한 타입지정  Literal types
var 이름4;
var 접니다;
function 함수5(a) {
    return 1;
}
function 가위바위보(a) {
    return ['가위'];
}
가위바위보('바위');
// Literal type 문제점
var 자료 = {
    name: 'kim'
}; // 해결법
function 내함수3(a) {
}
내함수3(자료.name); // 문제점
var 함수6 = function (a) {
    return 10;
};
// object 안에 함수 만들기 
// 다시 해보기
var 회원정보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 10;
    },
    changName: function () {
    }
};
회원정보.plusOne(1);
회원정보.changName();
//html 변경해보기 - narrowing 하는 법 
// 1. null : 제목 != null 
// 2. instanceof : 제목 instanceof Element -> 가장 많이 씀?
// 4. 오브젝트에 붙이는 ?. -> 1. 제목에 innerHTML이 있으면 출력해주고 2. 없으면 undifined (optional chaining)
// 5. strictNullChecks 모드를 false로 바꾸는 무식한 방법
var 제목 = document.querySelector('#title');
// if( 제목 != null ){
if (제목 instanceof Element) {
    // if(제목?.innerHTML != undefined ){
    제목.innerHTML = '반갑습니다.';
}
// 3. as - 비상시만 
var 제목1 = document.querySelector('#title');
제목1.innerHTML = '반갑습니다.';
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) { // 태그마다 다 다름 버튼이면 HTMLButtonElement 등 잘 찾아서 쓰기
    링크.href = 'https://kakao.com';
}
//버튼 
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('안녕');
});

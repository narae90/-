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
// 변수 타입 지정해보기 1
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 타입 지정해보기  답 2
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

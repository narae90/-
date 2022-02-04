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

// .ts 파일은 브라우저가 못읽음 
// ts파일을 js로 변환해야 사용가능
// 터미널에서 tsc -w 입력하면 자동변환됨

//타입지정 (첫글자는 대문자)
type Member = [number, boolean];

let john:Member = [123, true];

let 이름 :string  = 'kim';
let 나이 :number = 44;
let 결혼여부 :boolean = false; // undefined, null 타입도 있음

//array
let 이름들 :string[] = ['kim', 'park'];


// object
let 오브젝트이름 :{ name1 : string, name2 : string } = { name1 : 'kim', name2 : 'yang'};

// 오브젝트에 타입지정 해야 할 속성이 너무 많으면

type Member2 = {
    [key :string] : string,
}

let profile : Member2 = { name : 'kim', age: '33' };


// class 타입지정 가능 
class User {
    name :string;
    constructor(name :string){
        this.name = name
    }
}


// Union Type
// 타입2개 이상 합친 새로운 타입 만들기
let 회원 :number | string = 1234;
회원 = 'kim';

let 회원들 :(number | string)[] = [1, '2', 3];
let 오브젝트 :{ a : string | number } = { a : '123'}


// any타입 
// 타입실드 해제문법
// 일반 JS변수로 만들고 싶을 때
// 타입 관련 버그가 나도 잡아주지 않음
let 이름2 :any;
이름2 = 123;
이름2 = [];


// unknown 타입 
// any보다 안전
// unknown은 number타입이 아님
let 이름3 :unknown;

// 간단한 수학연산도 타입을 맞춰야 함

let 나이2 :string | number;

// string타입 +1 (허용)
// number타입 +1 (허용)
// string | number +1 (안됨)

// 나이2 + 1; 안됨 



// 변수 타입 지정해보기 1
let user :string = 'kim';
let age :number | undefined  = undefined;
let married :boolean = false; 
let 철수 :(string|number|boolean )[] = [user, age, married];


// 타입 지정해보기  답 2
let 학교 : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
}

= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
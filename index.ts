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




// 함수는 파라미터,return값에 타입지정 가능
// 자바스크립트와 다른점 -> 타입지정된 파라미터 필수
function 함수(x :number) :number {
    return x * 2
}
함수(5)

// 파라미터가 옵션일 경우엔 -> 파라미터변수?:타입
// 변수?(물음표):number는 -> 변수:number|undefined와 같음
function 함수3(x? :number) :number {
    return x * 2
}
함수3()

// 함수에서 void타입 활용 가능 -> 실수로 뭔가 return하는걸 사전에 막을 수 있음
function 함수2(x :number) :void {
    // return x * 2

}

// Narrowing으로 판정해주는 문법들
// typeof 변수
// 속셩명 in 오브젝트자료
// 인스턴스 instanceof 부모

function 내함수(x :number|string){
    if(typeof x === 'string'){
        return x + '1'
    }else{
        return x + 1

    }
    
}

내함수(123);


// assertion 문법의 용도
// 1. Narrowing 할때
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓰기
// 남이 짠 코드 수정할때, 왜 타입에러가 나는지 모르겠을 때 비상용으로 주로 쓰임

function 내함수2(x :number|string){

    let array :number[] = [];
    array[0] = x as number;
    
}

내함수2(123);



// type 변수(alias) 만드는 법

type Animal = string | number | undefined;
type Animal2 = { name : string, age : number }

let 동물:Animal = 123;
let 동물2 :Animal2 = {name : 'kim', age: 5}



//오브젝트 자료 수정도 막을수 있음 -> readonly(읽기전용)
type Boyfriend = {
    readonly name : string
}

const 남친 :Boyfriend = {
    name : '강동원'
}


// type 변수 -> union type으로 합치기 가능
type Name = string;
type Age = number;
//합치기
type Person = Name | Age;


type PositionX = { x :number};
type PositionY = { y :number};
// & 연산자로 오브젝트 타입 합치기 (extend)
type NewType = PositionX & PositionY // = {x:number, y:number}

let position :NewType = { x: 10, y:30}


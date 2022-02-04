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




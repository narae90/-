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
// 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
function hello(x) {
    if (x) {
        console.log('안녕하세요' + x);
    }
    else {
        console.log('입력해주세요');
    }
}
// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
function count(x) {
    return x.toString().length;
}
// 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
function 결혼가능하냐(money, house, charm) {
    var score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(결혼가능하냐(100, true, '상'));
// 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오
function 클리닝함수(a) {
    var 클리닝완료된거 = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            클리닝완료된거.push(parseFloat(b));
        }
        else {
            클리닝완료된거.push(b);
        }
    });
    return 클리닝완료된거;
}
console.log(클리닝함수([123, '3']));
var 테스트 = {
    size: 1234,
    position: [1, 2, 3, 4]
};
var 테스트2 = {
    name: 'kim',
    phone: 123,
    email: 'na@naver.com'
};
var 테스트3 = {
    name: 'kim',
    adult: true,
    phone: 1234,
    email: 'rae@naver.com'
};
var cutZero = function (x) {
    var result = x.replace(/^0+/, ""); // /어쩌구/ 이건 정규식문법인데 정규식은 글자에서 원하는 글자를 찾는 식일 뿐입니다. 구글 검색
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
// Car 클래스를 만들고 싶습니다.
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var 소나타 = new Car('소나타', 4000);
console.log(소나타);
console.log(소나타.tax());
// class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
// 다시 해보기
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === 'string') {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park'] 
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var 업데이트 = { product: '청소기', price: 7000, card: false };
var 오브젝트1 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};

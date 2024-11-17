// name에 kalros라는 문자열 부여.
var name = 'kalros';
// 데이터에 letter라는 이름(변수명)을 부여한 것이다.
// 자바와 마찬가지로 ''+변수명+''을 사용.

//줄바꿈시에는 줄바꿈영역에 \(역슬래시)를 사용해줘야함
var letter = 'Dear '+name+' '+name+'\n\ndaewoo daewoo daewoo sibar'+name;
console.log(letter);

//템플릿으로 줄바꿈시에는 ''를 쓰지않고 ``를 사용한다.
//`` 사용시엔 변수명을 ${변수명}으로 감싸주어야 한다.
var letter = `Dear ${name}
daewoo daewoo daewoo sibar ${1+1}`;
console.log(letter);
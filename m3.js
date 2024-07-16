// 원시데이터의 경우 같은값이면 같은 디렉토리에 저장하기 때문에 가리키는게 같다.
var p1 = 1;
var p2 = 1;
console.log(p1,p2, p1 === p2);


// 객체의 경우 다른 디렉토리에 저장하기 때문에 객체의 내용이 같더라도 다른 디렉토리를 가리키게 된다.
var o1 = {name : 'ku'};
var o2 = {name : 'ku'};
console.log(o1, o2, o1 === o2);
// 배열을 사용할 때 o2의 값을 수정하고 싶을때 push를 사용하게 되면 원본인 o1의 값도 수정이 되기 때문에 push를 사용하기 전에 concat()으로 복제를 해준 다음 사용해야 한다.
var o1 = {name : 'ku', score : [1, 2]};
var o2 = Object.assign({},o1);
// 이렇게 하면 원본의 스코어값은 변하지 않는다.
o2.score = o2.score.concat();
o2.score.push(3);
console.log(o1, o2 , o1 === o2, o1.score === o2.score);
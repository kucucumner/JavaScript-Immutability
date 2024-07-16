// 원본을 바꾸지못하게 강제하는 방법은 Object.freeze()를 사용한다.
var o1 = {name : 'ku', score : [1, 2, 3]}
Object.freeze(o1);
// 프로퍼티가 객체여도 수정하지 못하게 규제하려면 직접 추가해야한다.
Object.freeze(o1.score);
// freeze를 풀고싶다면 복제하는것을 통해서 기존것을 대체해야 한다.
o1.name = 'kyo';
// 객체의 프로퍼티를 얼리는것이라고 생각하는것이 편한데 없던 프로퍼티를 추가하게 된다면 freeze의 기능이 제대로 작동하지만
// 프로퍼티가 객체 [] 라고 한다면 그것을 규제할 수 없다는 단점이 있다. 즉 push는 된다.
o1.name = 'hyun';
o1.score.push(4);
console.log(o1);
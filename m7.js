const o1 = {name : 'ku'}
Object.freeze(o1);
const o2 = {name : 'ku'}
// const로 인해서 o1이 가리키는 대상이 될 값을 바꾸려고 하는데 이것을 못하게 한다.
// o1 = o2; =error

// freeze로 인해서 값 자체를 못바꾸게 된다.
o1.name = 'park';
console.log(o1);
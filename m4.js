function fn(person){
    // 함수는 내부적으로 파라미터를 ku로 바꾼다.
    person = Object.assign({}, person);
    person.name = 'ku';
    return person;
}
var o1 = {name : 'kyo'}
// 원본을 바꾸지 않으려면 원본을 복제하면 된다. assign 사용한 후 return 을 해준다.
var o2 = fn(o1);
console.log(o1, o2);
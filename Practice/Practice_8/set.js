let set1 = new Set();

set1.add('aaa');
set1.add(123);
set1.add({name: 'Deepak'});

console.log(set1);

set1.forEach(item => {
    console.log(item);
});

let setArr = Array.from(set1);
console.log(setArr);
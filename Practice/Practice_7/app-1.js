// Enclose regex in two forward slashes /regex-goes-here/

let re = /hello/i; //Case insensitive
// let re = /hello/g;   //Global search

// console.log(re);
// console.log(re.source);

// exec()
// let result = re.exec('brad hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test()
// const result = re.test('Hello');
// console.log(result);

// match() (reverse of exec)
// const string = 'Hello there';
// let result = string.match(re);
// console.log(result); 

// // search()
// const str= 'Brad Hello there';
// let result = str.search('Hello');
// console.log(result);

// replace()
// let str = 'Hello there';
// let res = str.replace(re, 'HI');
// console.log(res);
let re;

re = /hello/;

// console.log(re.source);

const result = re.exec('deepak hellomandbmns world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);
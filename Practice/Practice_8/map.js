let map1 = new Map();

map1.set(name, 'Deepak');
map1.set(location, 'Bangalore');

// console.log(map1);

// console.log(map1.get(name));

// console.log(map1.get(location));

for(let key of map1.keys()){
    console.log(key);
}
for(let val of map1.values()){
    console.log(val);
}

const keyVal = Array.from(map1);
console.log(keyVal);

const keys = Array.from(map1.keys());
console.log(keys);

const vals = Array.from(map1.values());
console.log(vals);
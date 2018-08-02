// //STANDARD MODULE PATTERN
// const UICtrl = (function () {
//     const text = 'Hello world';

//     const changeText = function () {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function () {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();

//REVEALING MODULE PATTERN
const itemCtrl = (function () {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item added...');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id
        });
    }
    return {
        add: add,
        get: get
    }
})();

itemCtrl.add({id: 1, name: 'John'});

console.log(itemCtrl.get(1));
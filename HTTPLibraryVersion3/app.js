const http = new EasyHTTP();

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));

const data = {
    name: 'John Doe',
    username: 'JohnDoe',
    email: 'john@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// http.delete('https://jsonplaceholder.typicode.com/users/10')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
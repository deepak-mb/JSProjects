document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getPosts);
document.getElementById('button3').addEventListener('click', getExternalApi);

function getText() {
    fetch('test.txt')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => console.log(`Error: ${error}`));
}

function getPosts() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
            let output = '';
            posts.forEach(function (post) {
                //console.log(post);
                output += `<li>${post.title}: ${post.body}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}

function getExternalApi() {
    fetch('https://api.github.com/users')
        .then(response => {
            //console.log(response);
            return response.json();
        }).then(users => {
            console.log(users);
            let output = '';
            users.forEach(user => {
                output += `<li><a href=${user.avatar_url} target=blank>${user.login}</a></li>`
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}
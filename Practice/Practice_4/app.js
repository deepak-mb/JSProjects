document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getPosts);
document.getElementById('button3').addEventListener('click', getExternalApi);


function getText() {
    fetch('test1.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data;

        }).catch(function (error) {
            console.log(`Error: ${error}`);
        });
}

function getPosts() {
    fetch('posts.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            console.log(posts);
            let output = '';

            posts.forEach(function (post) {
                console.log(post);
                output += `<li>${post.title}: ${post.body}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getExternalApi() {
    fetch('https://api.github.com/users')
        .then(function (response) {
            //console.log(response);
            return response.json();
        }).then(function (users) {
            //console.log(users);
            let output = '';
            users.forEach(function (user) {
                output += `<li><a href=${user.avatar_url} target=blank>${user.login}</a></li>`
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (error) {
            console.log(error);
        });
}
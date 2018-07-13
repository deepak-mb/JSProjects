document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternalApi);

let output;
function getText() {
    fetch('test.txt')
        .then(response => {
            return response.text();
            console.log(response.text());
        }).then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        }).catch(err => {
            console.log(err);
        });
}

function getJson() {
    fetch('posts.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title}: ${post.body}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        });
}

function getExternalApi() {
    fetch('https://api.github.com/users')
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            let output = '';
            data.forEach(function (userName) {
                output += `<li><a href='${userName.avatar_url}' target=_blank>${userName.login}</li>`
            });
            document.getElementById('output').innerHTML = output;
        }).catch(err => {
            console.log(err);
        });
}
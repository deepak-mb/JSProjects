const posts = [{
        title: 'Post 1',
        body: 'This is the body of Post 1.'
    },
    {
        title: 'Post 2',
        body: 'This is the body of Post 2.'
    }
];

function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);
            const error = true;
            if (error) {
                resolve();
            } else {
                reject(`Something went wrong!`);
            }
        }, 1000);
    });
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 500);
}

createPost({
    title: 'Post 3',
    body: 'This is the body of post 3.'
}).then(getPosts).catch(function(error){
    console.log(error);
});
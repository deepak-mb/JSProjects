const posts = [
    {title: "Post one", body: "This is post one."},
    {title: "Post two", body: "This is post two."}
];


function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        console.log(posts);
        callback();
    },2000);
}

function getPosts() {
    setTimeout(function(){
        let output = '';
        posts.forEach( function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: "Post three", body: "This is post Three"},getPosts);
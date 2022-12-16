var p = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) { return response.json(); }, function (error) { return console.log(error); })
    .then(function (posts) { return renderPosts(posts); }, function (error) { return console.log(error); });
function renderPosts(posts) {
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].title == 'qui est esse') {
            console.log(posts[i].id + "." + ' ' + posts[i].title + "------- " + "Yes");
        }
        else {
            console.log(posts[i].id + "." + ' ' + posts[i].title + " -------" + "No");
        }
    }
}

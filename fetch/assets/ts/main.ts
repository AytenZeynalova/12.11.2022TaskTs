let p = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json(), error =>console.log(error))
.then(posts => renderPosts(posts), error =>console.log(error));


function renderPosts(posts) { 
    for (let i = 0; i < posts.length; i++) { 
        if (posts[i].title == 'qui est esse') { 
            console.log(posts[i].id + "." + ' ' + posts[i].title + "------- " + "Yes") 
        } 
        else { 
            console.log(posts[i].id + "." + ' ' + posts[i].title + " -------" + "No") 
        } 
    } 
}
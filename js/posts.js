function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
// getPosts()
function displayPost(posts) {
    const container = document.getElementById('posts');
    // console.log(posts);
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.body}</p>
        `;
        container.appendChild(div)
        console.log(post);
    }
}

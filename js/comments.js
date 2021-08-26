function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => display(data))
}
getComments()
function display(comments) {
    // console.log(comments);
    const commentBox = document.getElementById('comment');

    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
         <h4> user namme: ${comment.name}</h4>
         <p>${comment.body}</p>
         `;
        commentBox.appendChild(div)
    }
}

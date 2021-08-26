function lodeData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => load(data))
}
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}
function load(data) {
    console.log(data);
}
//
// formade 
//  fetch(url)
//     .than(a => a.json())
//     .than(b => console.log(b))

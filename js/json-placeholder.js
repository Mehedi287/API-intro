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
    const ul = document.getElementById('users');
    console.log(data);
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `User NameP: ${user.name}
        User Id : ${user.id}
        User Emil : ${user.email} 
        User Name ; ${user.username} 
        User Address : ${user.address}`
        ul.appendChild(li)
    }
}
//
// formade 
//  fetch(url)
//     .than(a => a.json())
//     .than(b => console.log(b))

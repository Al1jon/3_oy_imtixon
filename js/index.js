const cards = document.querySelector('.cards');
const select = document.querySelector('.select');
const input = document.querySelector('.input');

//   -------------RenderPosts-------------

function renderPosts(array) {
    cards.innerHTML = '';

    for (let i = 0; i < array.length; i++) {

        cards.innerHTML += `
        <div class="card d-flex flex-column justify-content-between m-2 bg-warning p-3 hover w-25 bg-gradient">
            <div><h2>${array[i].name}</h2>
            <hr>
            <b>email: </b>
            <a class="mb-2" href="#"> ${array[i].email}</a>
            <p>${array[i].body}</p>
            <h4>postId: ${array[i].postId}</h4>
            </div>
            <button data-id="${array[i].id}" class="delete btn btn-danger">Delete</button>
        </div>
        `
    }

}
renderPosts(data);

//   -------------Add-Option-------------

function AddOption(array) {
    let postId = [];
    for (let i = 0; i < array.length; i++) {
        if (!postId.includes(array[i].postId)) {
            postId.push(array[i].postId);
        };
    }
    for (let i = 0; i < postId.length; i++) {
        select.innerHTML += `<option value="${postId[i]}">PostId-${postId[i]}</option>`
    }
}
AddOption(data);


//   -------------Search-------------

input.addEventListener('input', function () {
    select.value = 'All'
    let searchArray = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.includes(input.value)) {
            searchArray.push(data[i])
        }
    }
    renderPosts(searchArray)
})



//   -------------Filter-------------

select.addEventListener('change', function () {
    input.value = '';
    let fiterArray = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].postId == select.value) {
            fiterArray.push(data[i])
        }
        else if (select.value == 'All') {
            fiterArray.push(data[i])
        }
    }
    renderPosts(fiterArray);

})

//   -------------Delete-------------


cards.addEventListener('click', (event) => {
    select.value = 'All'
    const target = event.target;

    if (target.className.includes('delete')) {
        let deletPosts = [];
        const id = Number(target.dataset.id);

        data.forEach((post) => {
            if (post.id !== id) {
                deletPosts.push(post);
            }
        });
        data = deletPosts;
        renderPosts(deletPosts);
    }
});













$('#delete').on('show.bs.modal', ev => {
    let button = $(ev.relatedTarget);
    let id = button.data('id');
    showDeleteModal(id);
})

async function showDeleteModal(id) {
    const user = await getUser(id);
    const form = document.forms["formDeleteUser"];
    form.id.value = user.id;
    form.name.value = user.name;
    form.secondName.value = user.secondName;
    form.age.value = user.age;
    form.email.value = user.email;
    form.password.value = user.password;
}

async function getUser(id) {
    const url = `http://localhost:8080/api/user/` + id;
    const response = await fetch(url);
    return await response.json();
}
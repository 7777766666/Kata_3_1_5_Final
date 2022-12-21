$('#edit').on('show.bs.modal', ev => {
    const button = $(ev.relatedTarget);
    const id = button.data('id');
    showEditModal(id);
})

async function showEditModal(id) {
    const user = await getUser(id);
    const form = document.forms["formEditUser"];
    form.id.value = user.id;
    form.name.value = user.name;
    form.secondName.value = user.secondName;
    form.age.value = user.age;
    form.email.value = user.email;
    form.password.value = user.password;
}
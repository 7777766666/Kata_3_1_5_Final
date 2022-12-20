$(async function () {
    await getAllUsers();
});

const allUsers = $(`#allUsersTable`);

async function getAllUsers() {

    //   allUsers.empty()
    fetch(`http://localhost:8080/api/admin`)
        .then(response => response.json())
        .then(dataAboutALLUsers => {
            dataAboutALLUsers.forEach(UserInfo => {
                $(`#emailH5`);
                const roles = UserInfo.roles.map(zzz => zzz.role.substring(5).concat(" ")).toString().replaceAll(",", "");
                const usersTable = `$(
                <tr>
                <td>${UserInfo.id}</td>
                <td>${UserInfo.name}</td>
                <td>${UserInfo.secondName}</td>
                <td>${UserInfo.age}</td>
                <td>${UserInfo.email}</td>
                <td>${roles}</td>
                <td>
                <button id="buttonEdit" type="button" class="btn btn-info" data-toggle="modal" 
                data-action="edit" data-id="${UserInfo.id}" data-target="#edit">Edit</button>
                </td>
                <td>
                <button id="buttonDelete" type="button" class="btn btn-danger" data-toggle="modal"
                data-action="delete" data-id="${UserInfo.id}" data-target="#delete">Delete</button>
                </td>
                </tr> )`;
                allUsers.append(usersTable);
            })
        })
}
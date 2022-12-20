$(async function() {
    await getAllUsers();
});

const allUsers = $(`#allUsersTable`);

async function getAllUsers(){

        allUsers.empty()
    fetch(`http://localhost:8080/api/admin`)
        .then(response =>response.json())
        .then(x => {
            x.forEach(x => {
                // let roles = x.roles.map(zzz => zzz.role.substring(5).concat(" ")).toString().replaceAll(",", "");
                let usersTable = `$(
                <tr>
                <td>${x.id}</td>
                <td>${x.name}</td>
                <td>${x.secondName}<td>
                <td>${x.age}</td>
                <td>${x.email}</td>
                <td>${x.roles.map(zzz => zzz.role.substring(5).concat(" ")).toString().replaceAll(",", "")};</td>
                <td>
                <button type="button" class="btn btn-info" data-toggle="modal" id="buttonEdit"
                data-action="edit" data-id="${x.id}" data-target="#edit">Edit</button>
                </td>
                </tr> )`;
                allUsers.append(usersTable)
            })
        })
}
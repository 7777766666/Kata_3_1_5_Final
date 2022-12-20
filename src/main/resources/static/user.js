$(async function() {
    await userU();
});

async function userU(){
    fetch(`http://localhost:8080/api/user`)
        .then(xxx => xxx.json())
        .then(yyy => {
            $(`#emailH5`).append(yyy.email);
            let roles = yyy.roles.map(zzz => zzz.role.substring(5).concat(" ")).toString().replaceAll(`,`,``);
            $(`#rolesUserPage`).append(roles);
            const user =
                `$(
                <tr>
                <td>${yyy.id}</td>
                <td>${yyy.name}</td>
                <td>${yyy.secondName}</td>
                <td>${yyy.age}</td>
                <td>${yyy.email}</td>
                <td>${roles}</td>`;
            $(`#userTable`).append(user);
        })

}

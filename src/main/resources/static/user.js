$(async function () {
    await userU();
});

async function userU() {
    fetch(`http://localhost:8080/api/user`)
        .then(response => response.json())
        .then(dataAboutUser => {
            $(`#emailH4`).append(dataAboutUser.email);
            const roles555 = dataAboutUser.roles.map(zzz => zzz.role.substring(5).concat(" ")).toString().replaceAll(`,`, ``);
            // const roles555 = dataAboutUser.roles.map(zzz => zzz.role.substring(5).concat(" ")).toString().replaceAll(`,`, ``);
            $(`#rolesUserPage`).append(roles555);
            const user =
                `$(
                <tr>
                <td>${dataAboutUser.id}</td>
                <td>${dataAboutUser.name}</td>
                <td>${dataAboutUser.secondName}</td>
                <td>${dataAboutUser.age}</td>
                <td>${dataAboutUser.email}</td>
                <td>${roles555}</td>`;
            $(`#userTable`).append(user);
        })
}
$(async function() {
    await newUser();

});


async function newUser(){

    const userNew = document.forms[`newUser`];
    userNew.addEventListener(`submit`, createNewUser)

    function createNewUser(e){
        e.preventDefault();

        const select_options = document.querySelector(`#newUserRoles`).selectedOptions;

        let rolesNamesArray = new Array(select_options.length);
        for (let i = 0; i < select_options; i++) {
            rolesNamesArray[i] = select_options[i].value;
        }

        fetch(`http://localhost:8080/api/new`, {
            method: "POST",
            headers:{
                "Content-Type": `application/json`
            },
            body: JSON.stringify({
                name: userNew.name.valueOf(),
                secondName: userNew.secondName.valueOf(),
                age: userNew.age.valueOf(),
                email: userNew.email.valueOf(),
                password: userNew.password.valueOf(),
                roles: rolesNamesArray
            })
        }).then(() =>{
            userNew.reset();
            getAllUsers();
            $("#")

        })

    }


    )



}
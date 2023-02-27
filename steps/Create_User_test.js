const {I, create_user } = inject()

Feature('Create User');

Scenario('Criar uma nova conta', async () => {
    //Quando colocamos apenas a barra ele acessa o o link do  codecept.config.js
    I.amOnPage('/')
 
    //Page Objects
    create_user.createUserWhithSucces()
    create_user.createUser()
});


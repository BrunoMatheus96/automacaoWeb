var validacao = require('assert')

const {I, home_page} = inject()

Feature('Create User');

Scenario('Criar uma nova conta', async ({}) => {
    //Quando colocamos apenas a barra ele acessa o o link do  codecept.config.js
    I.amOnPage('/')

    //Page Objects
    home_page.accessLoginPage

    I.click('Cadastro')
    I.fillField('#user', 'Bruno Matheus Stefano Leite')
    I.waitForElement('#user', 30)
    I.fillField('#email', 'brunolechon2008@gmail.com')
    I.waitForElement('#email', 30)
    I.fillField('#password', secret('123456'))
    I.waitForElement('#password', 30)
    I.click('#btnRegister')
    I.see('Cadastro realizado!')
    I.wait(2)
 }); 


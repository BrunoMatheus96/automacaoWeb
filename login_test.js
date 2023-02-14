var validacao = require('assert')

Feature('login');

Scenario('test 1', ({ I }) => {
   //Quando colocamos apenas a barra ele acessa o o link do  codecept.config.js
   I.amOnPage('/')
   I.click('Login')
   I.click('#btnLogin')
   I.see('E-mail inválido.')
}); 

Scenario('test 2', ({ I }) => { 
    I.amOnPage('/')
    I.click('Login')
    //Comando para preenchimento de campo
    I.fillField('#user.form-control', 'brunolechon2008@gmail.com')
    I.click('#btnLogin')
    I.dontSee('E-mail inválido.')
    I.see('Senha inválida.')
 }); 

 //o async é usado para testes assincronos 
 Scenario('recuperção de informação', async ({ I }) => { 
   I.amOnPage('/')
   I.click('Login')
   I.click('#btnLogin')
   I.see('E-mail inválido.')

   //Utilizado para capturar informações nas páginas web
   //O await é a função de assincrono onde ele informa que é preciso esperar uma ou mais ações para ser realizada
   var title = await I.grabTitle()
   validacao.equal(title, 'QAZANDO Shop E-Commerce')

   I.waitForElement('#user', 5)

   var titulodeLembrete = await I.grabTextFrom('.form-check')
   validacao.equal(titulodeLembrete, 'Lembrar de mim')
}); 

Scenario('Criar uma nova conta', ({ I }) => {
   //Quando colocamos apenas a barra ele acessa o o link do  codecept.config.js
   I.amOnPage('/')
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
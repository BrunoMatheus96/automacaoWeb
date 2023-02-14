Feature('login');

Scenario('test 1', ({ I }) => {
   //Quando colocamos apenas a barra ele acessa o o link do  codecept.config.js
   I.amOnPage('/')
   I.click('Login')
   I.click('#btnLogin')
   I.see('E-mail inválido.')
}); 

Scenario('test 2', ({ I }) => { 
    //Quando colocamos apenas a barra ele acessa o o link do  codecept.config.js
    I.amOnPage('/')
    I.click('Login')
    //Comando para preenchimento de campo
    I.fillField('#user.form-control', 'brunolechon2008@gmail.com')
    I.click('#btnLogin')
    I.dontSee('E-mail inválido.')
    I.see('Senha inválida.')
 }); 
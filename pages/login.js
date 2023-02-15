const { I } = inject();

module.exports = {

  fields: {

    emailAddressRegisterField: '#user'

  },
  button: {

   createAccountButton: '#btnRegister'

  },

  messages: {

  },

  subimitCreatNewAccount(){
    I.fillField('#user', 'Bruno Matheus Stefano Leite')
    I.fillField('#email', 'brunolechon2008@gmail.com')
    I.fillField('#password', secret('123456'))
    I.click('#btnRegister')
    I.see('Cadastro realizado!')
  }

}
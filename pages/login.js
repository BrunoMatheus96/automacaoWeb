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

  subimitCreatNewAccount(email){
    I.fillField(this.fields.emailAddressRegisterField, email)
    I.fillField('#email', 'brunolechon2008@gmail.com')
    I.fillField('#password', secret('123456'))
    I.click(this.button.createAccountButton)
    I.see('Cadastro realizado!')
  }

}
const { I } = inject();

module.exports = {

  fields: {
    completeName: '#user',
    email: '#email',
    senha: '#password'
   
  },
  button: {
    cadastro: 'Cadastro',
    cadastrar: '#btnRegister'

  },

  messages: {

  },

  createUserWhithSucces(){
    I.click(this.button.cadastro)
    I.fillField(this.fields.completeName, 'Bruno Matheus Stefano Leite')
    I.waitForElement(this.fields.completeName, 30)
    I.fillField(this.fields.email,'brunolechon2008@gmail.com')
    I.waitForElement(this.fields.email, 30)
    I.fillField(this.fields.senha, secret('123456'))
    I.waitForElement(this.fields.senha, 30)
  },

  createUser(){
    I.click(this.button.cadastrar)
    I.see('Cadastro realizado!')
    I.wait(2)
  }

}
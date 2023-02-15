const { I } = inject();

module.exports = {

  fields: {

  },
  button: {

    login: "Login"

  },

  messages: {

  },

  accessLoginPage() {
    I.click(this.button.login)
  }

}

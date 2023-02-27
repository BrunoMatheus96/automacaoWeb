/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type loginPage = typeof import('./pages/login.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, loginPage: loginPage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

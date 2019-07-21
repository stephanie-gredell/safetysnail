import Cookies from 'universal-cookie';


const cookies = new Cookies();

class Auth {
  login() {
    cookies.set('login',"test");
  }

  logout() {
    cookies.remove('login');
  }

  isAuthenticated() {
    return typeof cookies.get('login') !== 'undefined' ? true : false;
  }
}

export default new Auth();

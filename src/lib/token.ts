/* TOKEN SERVICE */

class TokenService {
  public key: string;

  constructor() {
    this.key = "token";
  }

  public get = (): string | undefined => {
    const sessionToken = window.sessionStorage.getItem(this.key);
    if (sessionToken) {
      return sessionToken;
    }
    const token = window.localStorage.getItem(this.key);
    if (token) {
      return token;
    }

    return undefined;
  };

  public set = (token: string): void => {
    window.localStorage.setItem(this.key, token);
  };

  public setSessionStorage = (token: string): void => {
    window.sessionStorage.setItem(this.key, token);
  };

  public remove = (): void => {
    if (window.sessionStorage.getItem(this.key)) {
      window.sessionStorage.removeItem(this.key);
    }
    if (window.localStorage.getItem(this.key)) {
      window.localStorage.removeItem(this.key);
    }
  };

  public isSessionStorage() {
    return !!window.sessionStorage.getItem(this.key);
  }
}

const TOKEN = new TokenService();

export default TOKEN;

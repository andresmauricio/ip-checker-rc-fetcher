export class HttpRequest {
  static get(url: string, useAuthorization: boolean) {
    let headers = {};
    if (useAuthorization) headers = this.authorization();
    return window.fetch(url, {
      method: "GET",
      headers,
    });
  }

  static post(url: string, payload: any) {
    return window.fetch(url, { method: "POST", body: payload });
  }

  private static authorization() {
    return {
      "Authorization": "Bearer WookieIP2022",
      "Content-Type": "application/json",
    };
  }
}

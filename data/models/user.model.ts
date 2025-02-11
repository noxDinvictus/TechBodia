export namespace User {
  export class Model {
    userId: string;
    userName: string;
    createdAt: string;

    constructor(data: any) {
      this.userId = data.userId;
      this.userName = data.userName;
      this.createdAt = data.createdAt;
    }
  }

  export class Payload {
    userName: string;
    password: string;
    constructor(data: any) {
      this.userName = data.userName;
      this.password = data.password;
    }
  }
}

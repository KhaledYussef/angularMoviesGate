export class RegisterModel {
  constructor(
    public userName:string,
    public email:string,
    public password:string,
  ){}
}


export class LoginModel {
  constructor(
    public userNameOrEmail:string,
    public password:string,
    public rememberMe:boolean,
  ){}
}

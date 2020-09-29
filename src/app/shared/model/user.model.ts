export interface IUser {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  department?: string;
}

export class User implements IUser {
  constructor(
    public firstName?: string,
    public middleName?: string,
    public lastName?: string,
    public email?: string,
    public department?: string,
  ){}
}

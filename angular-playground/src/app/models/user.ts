export class User {
  constructor(
    public street: string,
    public city: string,
    public state: string,
    public postalCode: number,
    public userName: string,
    public email: string,
    public phoneNumber: number,
    public topicName: string,
    public timePreference: string,
    public subscribeCheck: boolean
  ) {}
}

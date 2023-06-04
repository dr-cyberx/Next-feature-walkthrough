export class AuthRequiredError extends Error {
  constructor(message = "Auth is Required to access this page!") {
    super(message);
    this.name = "AuthRequiredError";
  }
}

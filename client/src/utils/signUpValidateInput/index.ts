export function signUpValidateInput(
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
): boolean {
  const emailValidation = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  if (
    username.length > 1 &&
    email.length > 6 &&
    emailValidation.test(email) &&
    password.length > 6 &&
    confirmPassword.length > 6 &&
    password === confirmPassword
  ) {
    return true;
  }
  return false;
}

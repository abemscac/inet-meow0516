export const usernameRegExp = new RegExp(/^[a-zA-Z0-9]([\w.-]{3,29})$/);
export const passwordRegExp = new RegExp(
  /^[a-zA-Z0-9]([\w.~!@#$%^&*()-+]{3,29})$/
);

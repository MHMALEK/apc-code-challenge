// Most-used Regular Expressions
const onlyNumberRegExp = /^[0-9]*$/;
const mobilePhoneRegExp = /^(((\+|00)?98)|0)?9\d{9}$/;
const emailRegExp = /^\w+.+@\w+.+\.[Aa-zZ]{2,}/;

// Functions
export const isOnlyNumber = (value: string) => onlyNumberRegExp.test(value);

export const isMobilePhoneValid = (value: string) =>
  mobilePhoneRegExp.test(value);

export const isEmailValid = (value: string) => emailRegExp.test(value);

export const isMinLengthValid = (value: string, length: number) => RegExp(`^.{${length},}$`).test(value);

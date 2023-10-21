const minimumCharRegex = /^.{8,}$/;
const lowerCaseRegex = /^(?=.*[a-z]).+$/;
const upperCaseRegex = /^(?=.*[A-Z]).+$/;
const symbolRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).+$/;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const isValid = (value: string, regex: RegExp) => {
  return regex.test(value);
};

export const Validation = {
  isValid,
};

export const Regex = {
  minChar: minimumCharRegex,
  lower: lowerCaseRegex,
  upper: upperCaseRegex,
  symbolRegex: symbolRegex,
  email: emailRegex,
};

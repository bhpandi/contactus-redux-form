export const validate = val => {
  const errors = {};
  if (!val.firstName) {
    errors.firstName = "Required";
  }
  if (!val.lastName) {
    errors.lastName = "Required";
  }
  if (!val.phone) {
    errors.phone = "Required";
  } else if (!val.phone.match(/^\d{8}$/)) {
    errors.phone = "Please enter 8 digits";
  }
  if (!val.email) {
    errors.email = "Required";
  } else if (!/^.+@.+$/i.test(val.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

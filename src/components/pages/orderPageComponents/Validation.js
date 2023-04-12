export function validateFields(email, name) {
  const result = {
    email: {
      valid: false,
    },
    name: {
      valid: false,
    },
  };

  const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (name.length > 2) {
    result.name.valid = true;
  }
  if (validEmail.test(email)) {
    result.email.valid = true;
  }
  return result;
}

export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  //.test() returns true if it matches otherwise false.
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password,
    );
  //In signin form,we dont have 'name' field,so it would be 'null'.
  const isNameValid = name === null ? true : /^[a-zA-Z ]{2,50}$/.test(name);

  //it input is valid(true),then the if() will never run
  if (!isNameValid) {
    return "Write a valid name";
  }
  if (!isEmailValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  //If everything is valid,null is returned otherwise an error string is returned.
  return null;
};

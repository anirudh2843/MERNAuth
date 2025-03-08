export const ValidateSignUp = (name, email, password, setErrors) => {
  let newErrors = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  } else if (name.length < 3) {
    newErrors.name = "Name must be at least 3 characters long";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailPattern.test(email)) {
    newErrors.email = "Enter a valid email address";
  }

  // Password validation
  if (!password.trim()) {
    newErrors.password = "Password is required";
  } else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters long";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

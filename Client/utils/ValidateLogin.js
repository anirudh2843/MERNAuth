export const ValidateLogin = (email, password, setErrors) => {
    let newErrors = {};
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Invalid Email";
    }
  
    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "InCorrect Password";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
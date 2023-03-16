function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*\d).{6,10}$/;
  return passwordRegex.test(password);
}

function validateInput(email, password) {
  const errors = {};

  if (!email) {
    errors.email = 'Email no puede estar vacío';
  } else if (email.length > 35) {
    errors.email = 'Email no puede tener más de 35 caracteres';
  } else if (!validateEmail(email)) {
    errors.email = 'Email no válido';
  }

  if (!password) {
    errors.password = 'Contraseña vacía';
  } else if (!validatePassword(password)) {
    errors.password = 'La contraseña debe tener al menos un número y entre 6 y 10 caracteres';
  }

  return errors;
}

export default validateInput;

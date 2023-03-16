import React, { useState } from 'react';
import validateInput from './validations';

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateInput(userData.email, userData.password);
    setErrors(errors);
    props.login(userData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex w-[300px] flex-col absolute top-1/4 left-1/2 -translate-x-1/2 border bg-gradient-to-r gap-5 from-violet-500 to-fuchsia-500 font-semibold rounded-md p-10 shadow-2xl"
      noValidate
    >
      <h1 className="text-white text-center">LOGIN</h1>
      <label htmlFor="" className="text-white">
        EMAIL
      </label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        className="h-8 w-full focus:outline-none rounded-sm shadow-lg"
      />
      {errors.email && <span className="text-sm">Ingresa un mail valido</span>}
      <label htmlFor="" className="text-white">
        PASSWORD
      </label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        className="h-8 focus:outline-none rounded-sm shadow-lg"
      />
      {errors.password && <span className="text-sm">{errors.password}</span>}
      <button
        type="submit"
        className="border-2 py-2 rounded-md text-white hover:text-slate-800 hover:bg-gradient-to-r from-violet-400 to-fuchsia-400"
      >
        Ingresar
      </button>
    </form>
  );
}

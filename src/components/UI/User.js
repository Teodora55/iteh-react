import React, { useState } from "react";
import Input from './Input'

const User = (props) => {
  const [valid, setValid] = useState({
    ime: false,
    prezime: false,
    kompanija: false,
    adresa: false,
    postanskiBr: false,
    mesto: false,
    drzava: false,
    email: false,
  });
  const [user, setUser] = useState({});

  const getMessage = (valid) => {
    let isValid = true;
    Object.keys(valid).forEach((key) => {
      isValid = isValid && valid[key];
    });
    if (!isValid) {
      return "Niste pravilno uneli podatke";
    }
    return "";
  };

  const changeHandler = (input) => {
    const name = input.name;
    const newValid = { ...valid, [name]: input.valid };
    setValid(newValid);
    const newUser = { ...user, [name]: input.value };
    const message = getMessage(newValid,newUser);
    const prijava = {
      user: newUser,
      message: message,
      valid: message === "",
    };
    setUser(newUser);
    props.getUser(prijava);
  };

  return (
    <div>
      <Input
        label="Ime"
        name="ime"
        placeholder="Ime"
        type="text"
        validator="^[a-zA-Z\s-]+$"
        onChange={changeHandler}
      />
      <Input
        label="Prezime"
        name="prezime"
        placeholder="Prezime"
        type="text"
        validator="^[a-zA-Z\s-]+$"
        onChange={changeHandler}
      />
      <Input
        label="Kompanija"
        name="kompanija"
        placeholder="Kompanija"
        type="text"
        validator="^[a-zA-Z0-9\s-+]+$"
        onChange={changeHandler}
      />
      <Input
        label="Adresa"
        name="adresa"
        placeholder="Adresa"
        type="text"
        validator="^[a-zA-Z0-9\s-]+$"
        onChange={changeHandler}
      />
      <Input
        label="Postanski broj"
        name="postanskiBr"
        placeholder="Postanski broj"
        type="text"
        validator="^\d{5}$"
        onChange={changeHandler}
      />
      <Input
        label="Mesto"
        name="mesto"
        placeholder="Mesto"
        type="text"
        validator="^[a-zA-Z\s]+$"
        onChange={changeHandler}
      />
      <Input
        label="Drzava"
        name="drzava"
        placeholder="Drzava"
        type="text"
        validator="^[a-zA-Z\s]+$"
        onChange={changeHandler}
      />
      <Input
        label="Email"
        name="email"
        placeholder="Email"
        type="email"
        validator="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
        onChange={changeHandler}
      />
    </div>
  );
};

export default User;

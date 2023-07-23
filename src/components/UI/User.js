import React, { useState } from "react";
import Input from './Input'

const User = (props) => {
  const [valid, setValid] = useState({
    ime: false,
    prezime: false,
    kompanija: false,
    adresa1: false,
    adresa2: false,
    postanskiBr: false,
    mesto: false,
    drzava: false,
    email: false,
    emailPotvrda: false,
  });
  const [user, setUser] = useState({});

  const getMessage = (valid,user) => {
    let isValid = true;
    Object.keys(valid).forEach((key) => {
      isValid = isValid && valid[key];
    });
    if (!isValid) {
      return "Niste pravilno uneli podatke";
    }
    if (user.email !== user.emailPotvrda) {
      return "Email adrese se ne poklapaju";
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
        label="Adresa 1"
        name="adresa1"
        placeholder="Adresa 1"
        type="text"
        validator="^[a-zA-Z0-9\s-]+$"
        onChange={changeHandler}
      />
      <Input
        label="Adresa 2"
        name="adresa2"
        placeholder="Adresa 2"
        type="text"
        validator="^.*$"
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
      <Input
        label="Potvrda email adrese"
        name="emailPotvrda"
        placeholder="Email"
        type="email"
        validator="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
        onChange={changeHandler}
      />
    </div>
  );
};

export default User;

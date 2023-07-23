import { useEffect, useState } from "react";
import User from "./UI/User";
import "./SignUp.css";

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    calculatePrice();
  }, [selectedOptions]);

  const userHandler = (application) => {
    setValidUser(application.valid);
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedOptions.includes(selectedValue)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== selectedValue)
      );
    } else {
      setSelectedOptions([...selectedOptions, selectedValue]);
    }
  };

  const calculatePrice = () => {
    setPrice(0);
    if (selectedOptions.includes("fe")) setPrice((prev) => prev + 1000);

    if (selectedOptions.includes("be")) setPrice((prev) => prev + 1200);
  };

  const valid = () => {
    if (!validUser) {
      return false;
    }
    if (selectedOptions.length === 0) {
      setMessage("Niste odabrali ni jedan dan konferencije");
      return false;
    }
    setMessage("");
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (valid()) {
      setMessage("Uspesno ste se prijavili za konferenciju");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <User getUser={userHandler} />
      <div>
        <label>
          <input
            type="radio"
            value="fe"
            checked={selectedOptions.includes("fe")}
            onClick={handleOptionChange}
          />
          Prvi dan - Front-end - 1000 RSD
        </label>
        <label>
          <input
            type="radio"
            value="be"
            checked={selectedOptions.includes("be")}
            onClick={handleOptionChange}
          />
          Drugi dan - Back-end - 1200 RSD
        </label>
      </div>
      <button type="submit">Prijavite se</button>
      <p>Ukupna cena je: {price}</p>
      {message !== "" && <p>{message}</p>}
    </form>
  );
};

export default SignUp;

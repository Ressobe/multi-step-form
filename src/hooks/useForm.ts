import { useState } from "react";

const useForm = (callback: () => void) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event: React.FormEvent) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;

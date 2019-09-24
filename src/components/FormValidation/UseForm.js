import { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";


const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      
      callback();
      
    }
  }, [errors]);

  const handleSubmit = e => {
    if (e) e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    // console.log(props);
  };

  const handleChange = e => {
    e.persist();
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
    console.log(values) // 
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
};

export default useForm;

import * as Yup from "yup";

const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const formValidation = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string().email("Invalid email").required("Email is required"),
  user_phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
});

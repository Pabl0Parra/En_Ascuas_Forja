import { useEffect, useState } from "react";
import axios from "axios";

import ContactFormInput from "../../components/form-input/form-input.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import {
  ContactContainer,
  ContactForm,
  ContactFormHeader,
  ContactTitle,
  ContactSubtitle,
  LogoContainer,
  SubmitButton,
} from "./contact.styles";

import logo from "../../assets/logo-color.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    axios({
      url: "contact",
      method: "POST",
      data: formData,
    })
      .then((res) => {
        alert("Your message was sent successfully!");
        setFormData({
          email: "",
          name: "",
          message: "",
        });
      })
      .catch((err) => {
        alert(
          "There was an issue with your submission.\nPlease check your fields and try again."
        );
        console.log(err);
      });
  };

  useEffect(() => {
    document.title = "Contact Us |  Taifa Clothing";
  }, []);

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleFormSubmission}>
        <ContactFormHeader>
          <LogoContainer>
            {" "}
            <img src={logo} alt='logo' className='logo' />
          </LogoContainer>
          <ContactTitle>Have a question?</ContactTitle>
        </ContactFormHeader>
        <ContactSubtitle>Please fill out the following fields.</ContactSubtitle>
        {/* Name */}
        <ContactFormInput
          name='name'
          type='text'
          label='Name'
          maxLength={20}
          value={formData.name}
          onChange={handleFormChange}
          required
        />
        {/* Email */}
        <ContactFormInput
          name='email'
          type='email'
          label='Email'
          value={formData.email}
          onChange={handleFormChange}
          required
        />
        {/* Message */}
        <ContactFormInput
          name='message'
          isTextarea={true}
          label='Your message'
          rows={4}
          maxLength={250}
          value={formData.message}
          onChange={handleFormChange}
          required
        />
        <SubmitButton buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'>
          SEND
        </SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;

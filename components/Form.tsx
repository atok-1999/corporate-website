import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

interface Values {
  company: string;
  name: string;
  phoneNumber: string;
  mail: string;
  content: string;
}

const initialValues: Values = {
  company: '',
  name: '',
  phoneNumber: '',
  mail: '',
  content: '',
};

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values: Values) => {
    setIsSubmitted(false);
    // fetch('/api/form', {
    //   method: 'POST',
    //   mode: 'same-origin',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //   },
    //   body: JSON.stringify(values),
    // }).catch((err) => console.error(err));
    setIsSubmitted(true);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (isSubmitted) {
      formik.resetForm();
    }
  }, [isSubmitted]);

  return (
    <div>
      <FormComponent onSubmit={formik.handleSubmit}>
        <Label htmlFor='name'>お名前</Label>
        <Input
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <Label htmlFor='mail'>メールアドレス</Label>
        <Input
          id='mail'
          name='mail'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.mail}
        />
        <Label htmlFor='content'>お問い合わせ内容</Label>
        <TextArea
          id='content'
          name='content'
          onChange={formik.handleChange}
          value={formik.values.content}
        />
        <SubmitButton onClick={() => formik.handleSubmit}>
          <span>送信する</span>
        </SubmitButton>
      </FormComponent>
    </div>
  );
};

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  font-weight: bold;
`;

const Input = styled.input`
  height: 20px;
  padding: 1rem;
`;

const TextArea = styled.textarea`
  height: 120px;
  padding: 1rem;
`;

const SubmitButton = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #000;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1.5rem 1rem;
  border-radius: 0;
  background: #fafafa;
  margin-top: 2rem;
  margin-right: 20%;
  margin-left: 20%;

  span {
    position: relative;
  }

  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-96%);
    transform: translateX(-96%);
    background: #ff5353;
  }

  :hover:before {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  :hover span {
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

export default Form;

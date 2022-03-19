import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Base from '../layouts/base';
import Text from '../components/text';
import MaskedInput from '../components/masked-input';
import Col from '../components/grid/col';
import Row from '../components/grid/row';
import Button from '../components/button';
import * as api from '../services/api';
import Popup from '../components/popup';
import { set } from 'lodash';

const validationSchema = Yup.object({
  cardNumber: Yup.string().matches(/^\d+$/).min(16).max(16).required(),
  expDate: Yup.string().matches(/^\d\d\\\d\d$/).required(),
  cvv: Yup.string().matches(/^\d+$/).min(3).max(3).required(),
  amount: Yup.number().required()
});

const initialValues = {
  cardNumber: '',
  expDate: '',
  cvv: '',
  amount: ''
};

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Home = () => {
  const [error, setError] = useState(null);

  const onCloseClick = () => setError(null);

  const onChange = (setFieldValue, name, shouldSanitize = true) => (e) => {
    setFieldValue(name, shouldSanitize ? e.target.value.replace(/\D/g, '') : e.target.value);
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const data = await api.bills.submit(values);
      resetForm(initialValues);
      alert(JSON.stringify(data));
    } catch (err) {
      if (err.response) {
        return setError(err.response.data);
      }
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Base>
      {error && (
        <Popup onClick={onCloseClick}>
          {error}
        </Popup>
      )}
      <Text variant="h3" className="mb-40">Payment form</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          errors,
          touched,
          setFieldValue,
          handleBlur,
          values,
          isSubmitting
        }) => (
          <Form>
            <MaskedInput
              name="cardNumber"
              label="Card Number"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="mb-15"
              mask="0000 0000 0000 0000"
              value={values.cardNumber}
              onChange={onChange(setFieldValue, 'cardNumber')}
              onBlur={handleBlur}
              error={errors.cardNumber && touched.cardNumber}
              errorText={errors.cardNumber}
            />
            <Row>
              <Col md="6">
                <MaskedInput
                  label="Expiry Date"
                  name="expDate"
                  type="text"
                  placeholder="14\21"
                  className="mb-15"
                  mask="00\\00"
                  value={values.expDate}
                  onChange={onChange(setFieldValue, 'expDate', false)}
                  onBlur={handleBlur}
                  error={errors.expDate && touched.expDate}
                  errorText={errors.expDate}
                />
              </Col>
              <Col md="6">
                <MaskedInput
                  label="CVV"
                  name="cvv"
                  type="password"
                  className="mb-15"
                  mask='000'
                  value={values.cvv}
                  onChange={onChange(setFieldValue, 'cvv')}
                  onBlur={handleBlur}
                  error={errors.cvv && touched.cvv}
                  errorText={errors.cvv}
                />
              </Col>
            </Row>
            <MaskedInput
              label="Amount"
              name="amount"
              className="mb-15"
              placeholder="e.g. 100"
              value={values.amount}
              mask={Number}
              min={1}
              max={100000000000000}
              onChange={onChange(setFieldValue, 'amount')}
              onBlur={handleBlur}
              error={errors.amount && touched.amount}
              errorText={errors.amount}
            />
            <Buttons>
              <Button type="submit" loading={isSubmitting}>Submit</Button>
            </Buttons>
          </Form>
        )}
      </Formik>
    </Base>
  );
};

export default Home;

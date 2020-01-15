import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';

import BuilderForm from 'Components/Views/BuilderForm';
import BuilderPreview from 'Components/Views/BuilderPreview';
import { IFormData, IFormHandler } from './types';

import styles from './HCardBuilder.module.scss';

const HCardBuilder = () => {
  const [givenName, setGivenName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');
  const [avatar, setAvatar] = useState();

  const formData: IFormData = {
    givenName,
    surname,
    email,
    tel,
    house,
    street,
    suburb,
    state,
    postcode,
    country,
    avatar
  };
  const formHandler: IFormHandler = {
    setGivenName,
    setSurname,
    setEmail,
    setTel,
    setHouse,
    setStreet,
    setSuburb,
    setState,
    setPostcode,
    setCountry,
    setAvatar
  };

  const { Content } = Layout;

  return (
    <Layout className={styles.container}>
      <Content>
        <Row>
          <Col lg={12}>
            <BuilderForm formData={formData} formHandler={formHandler} />
          </Col>
          <Col lg={12}>
            <BuilderPreview formData={formData} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HCardBuilder;

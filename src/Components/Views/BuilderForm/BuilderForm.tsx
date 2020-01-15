import React from 'react';
import { Form, Typography, Row, Col, Divider, Button, Input } from 'antd';
import v from 'voca';

import { IFormData, IFormHandler } from 'Components/Views/HCardBuilder';
import FormField from 'Components/Shared/FormField';

import { STRINGS_FORM } from 'configs/strings';
import styles from './BuilderForm.module.scss';

interface BuilderFormProps {
  formData: IFormData;
  formHandler: IFormHandler;
}

const BuilderForm = ({ formData, formHandler }: BuilderFormProps) => {
  const { Title } = Typography;

  return (
    <Form layout="vertical" className={styles.form}>
      <Row>
        <Title level={2}>{STRINGS_FORM.FORM_TITLE}</Title>
      </Row>

      <h5>{STRINGS_FORM.FORM_SUBTITLE_PERSONAL_DETAILS}</h5>
      <Divider />
      <Row gutter={20}>
        <FormField
          label={STRINGS_FORM.FORM_LABEL_GIVEN_NAME}
          value={formData.givenName}
          setValue={formHandler.setGivenName}
        />
        <FormField
          label={STRINGS_FORM.FORM_LABEL_SURNAME}
          value={formData.surname}
          setValue={formHandler.setSurname}
        />
        <FormField
          label={STRINGS_FORM.FORM_LABEL_EMAIL}
          value={formData.email}
          setValue={formHandler.setEmail}
          type="email"
        />
        <FormField
          label={STRINGS_FORM.FORM_LABEL_PHONE}
          value={formData.tel}
          setValue={formHandler.setTel}
          type="tel"
        />
      </Row>

      <h5>{STRINGS_FORM.FORM_SUBTITLE_ADDRESS}</h5>
      <Divider />
      <Row gutter={20}>
        <FormField
          label={STRINGS_FORM.FORM_LABEL_HOUSE_NAME_OR_NUMBER}
          value={formData.house}
          setValue={formHandler.setHouse}
        />
        <FormField
          label={STRINGS_FORM.FORM_LABEL_STREET}
          value={formData.street}
          setValue={formHandler.setStreet}
        />
        <FormField
          label={STRINGS_FORM.FORM_LABEL_SUBURB}
          value={formData.suburb}
          setValue={formHandler.setSuburb}
        />
        <FormField
          label={STRINGS_FORM.FORM_LABEL_STATE}
          value={formData.state}
          setValue={formHandler.setState}
        />
        <FormField
          label={STRINGS_FORM.FORM_LABEL_POSTCODE}
          value={formData.postcode}
          setValue={formHandler.setPostcode}
        />
        <FormField
          label={STRINGS_FORM.FORM_LABEL_COUNTRY}
          value={formData.country}
          setValue={formHandler.setCountry}
        />
      </Row>

      <Row>
        <Col lg={12} className={styles.button_col}>
          <Button className={styles.button_upload}>
            <label
              htmlFor={v.kebabCase(STRINGS_FORM.FORM_BUTTON_UPLOAD_AVATAR)}
            >
              {STRINGS_FORM.FORM_BUTTON_UPLOAD_AVATAR}
            </label>
            <Input
              id={v.kebabCase(STRINGS_FORM.FORM_BUTTON_UPLOAD_AVATAR)}
              name={v.kebabCase(STRINGS_FORM.FORM_BUTTON_UPLOAD_AVATAR)}
              type="file"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                e.target.files && formHandler.setAvatar(e.target.files[0])
              }
              className={styles.button_upload_input}
            />
          </Button>
        </Col>
        <Col lg={12} className={styles.button_col}>
          <Button className={styles.button_create}>
            {STRINGS_FORM.FORM_BUTTON_CREATE_HCARD}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BuilderForm;

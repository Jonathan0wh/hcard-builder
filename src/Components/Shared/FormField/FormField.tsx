import React from 'react';
import { Col, Form, Input } from 'antd';
import v from 'voca';

import styles from './FormField.module.scss';

interface FormFieldProps {
  label: string;
  value: string;
  setValue: (newValue: string) => void;
  type?: string;
}

const FormField = ({
  label,
  value,
  setValue,
  type = 'text'
}: FormFieldProps) => (
  <Col lg={12} className={styles.form_field_col}>
    <Form.Item label={label} htmlFor={v.kebabCase(label)}>
      <Input
        id={v.kebabCase(label)}
        name={v.kebabCase(label)}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        type={type}
      />
    </Form.Item>
  </Col>
);

export default FormField;

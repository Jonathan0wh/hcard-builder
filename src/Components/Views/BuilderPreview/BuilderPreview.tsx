import React from 'react';
import { Typography } from 'antd';
import classNames from 'classnames';

import { IFormData } from 'Components/Views/HCardBuilder';
import { STRINGS_PREVIEW } from 'configs/strings';
import defaultAvatar from 'assets/images/avatar_default.png';
import styles from './BuilderPreview.module.scss';

interface BuilderPreviewProps {
  formData: IFormData;
}

const BuilderPreview = ({ formData }: BuilderPreviewProps) => {
  const { Text } = Typography;

  return (
    <div className={styles.container}>
      <div className={styles.preview_title_container}>
        <Text className={styles.preview_title}>
          {STRINGS_PREVIEW.PREVIEW_TITLE}
        </Text>
      </div>

      <div className="vcard">
        <div className={styles.preview_identity}>
          <img
            src={
              formData.avatar
                ? URL.createObjectURL(formData.avatar)
                : defaultAvatar
            }
            alt="avatar"
            className="photo"
          />
          <span className="fn">
            <span className="given-name">
              {formData.givenName} {formData.surname}
            </span>
            <span className="family-name"></span>
          </span>
        </div>

        <div className={styles.preview_detail}>
          <div className={styles.preview_row}>
            <span className={styles.preview_label}>
              {STRINGS_PREVIEW.PREVIEW_LABEL_EMAIL}
            </span>
            <span className={classNames('email', styles.preview_content)}>
              {formData.email}
            </span>
          </div>
          <div className={styles.preview_row}>
            <span className={styles.preview_label}>
              {STRINGS_PREVIEW.PREVIEW_LABEL_PHONE}
            </span>
            <span className={classNames('tel', styles.preview_content)}>
              {formData.tel}
            </span>
          </div>
          <div className="adr">
            <div className={styles.preview_row}>
              <span className={styles.preview_label}>
                {STRINGS_PREVIEW.PREVIEW_LABEL_ADDRESS}
              </span>
              <span
                className={classNames('street-address', styles.preview_content)}
              >
                {`${formData.house}${formData.house && ' '}${formData.street}`}
              </span>
            </div>
            <div
              className={classNames(
                styles.preview_row,
                styles.preview_row_additional
              )}
            >
              <span className={classNames('locality', styles.preview_content)}>
                {`${formData.suburb}${formData.suburb &&
                  formData.state &&
                  ', '}`}
              </span>
              <span className={classNames('region', styles.preview_content)}>
                {formData.state}
              </span>
            </div>
          </div>
          <div className={styles.preview_row}>
            <span>
              <span className={styles.preview_label}>
                {STRINGS_PREVIEW.PREVIEW_LABEL_POSTCODE}
              </span>
              <span
                className={classNames('postal-code', styles.preview_content)}
              >
                {formData.postcode}
              </span>
            </span>
            <span>
              <span
                className={classNames(
                  styles.preview_label,
                  styles.preview_label_country
                )}
              >
                {STRINGS_PREVIEW.PREVIEW_LABEL_COUNTRY}
              </span>
              <span
                className={classNames('country-name', styles.preview_content)}
              >
                {formData.country}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPreview;

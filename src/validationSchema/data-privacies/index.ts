import * as yup from 'yup';

export const dataPrivacyValidationSchema = yup.object().shape({
  privacy_status: yup.string().required(),
  privacy_score: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

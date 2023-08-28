import * as yup from 'yup';

export const configurationValidationSchema = yup.object().shape({
  config_status: yup.string().required(),
  config_score: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

export const securityValidationSchema = yup.object().shape({
  security_status: yup.string().required(),
  security_score: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

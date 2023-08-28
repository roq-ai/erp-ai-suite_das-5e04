import * as yup from 'yup';

export const landscapeValidationSchema = yup.object().shape({
  landscape_status: yup.string().required(),
  landscape_score: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

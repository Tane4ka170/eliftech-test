import * as Yup from 'yup';

export const addToEventSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'You must enter Full name')
    .required('Please enter your full name'),
  email: Yup.string().email().required(),
  dateOfBirth: Yup.date()
    .required('Please enter your date of birth')
    .min(new Date(), 'Date of birth cannot be in the future'),
  source: Yup.string()
    .oneOf(
      ['social media', 'friends', 'found myself'],
      'Please select a source'
    )
    .required(),
});

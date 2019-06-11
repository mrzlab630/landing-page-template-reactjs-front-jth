import * as Yup from 'yup';

export const signUpValidation = Yup.object().shape({
  email: Yup.string()
    .email('Email is not valid')
    .required('Email should not be blank'),
  phone: Yup.string()
    .min(6, 'Phone number length is not valid')
    .required('Phone number is required'),
  businessType: Yup.string().required('Please choose the business type'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 characters')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords are not the same!')
    .required('Password confirm is required'),
});

export const allowedCountryCodes = [
  'at',
  'au',
  'be',
  'ca',
  'cl',
  'cz',
  'dk',
  'ee',
  'fi',
  'fr',
  'de',
  'gr',
  'hu',
  'is',
  'ie',
  'il',
  'it',
  'jp',
  'lv',
  'lt',
  'lu',
  'mx',
  'nl',
  'nz',
  'no',
  'pl',
  'pt',
  'sk',
  'kr',
  'es',
  'se',
  'ch',
  'tr',
  'uk',
  'us',
  'ru',
  'ua',
  'hr',
  'si',
  'in',
];

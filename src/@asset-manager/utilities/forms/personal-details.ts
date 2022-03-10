import { Form, Forms, PersonalDetails } from '../../types';

export const personalDetails: Form = {
  [Forms.PERSONAL_DETIALS]: {
    inputs: {
      [PersonalDetails.SEX]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [PersonalDetails.INITIALS]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [PersonalDetails.FIRST_NAME]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [PersonalDetails.LAST_NAME]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [PersonalDetails.DATE]: {
        value: null,
        isValid: false,
        errorText: '',
      },

      [PersonalDetails.NATIONALITY]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [PersonalDetails.SECURITY_NUMBER]: {
        value: '',
        isValid: false,
        errorText: '',
      },
    },

    isFormValid: false,
  },
};

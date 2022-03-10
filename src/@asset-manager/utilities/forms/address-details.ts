import { Forms, AddressDetails, Form } from '../../types';

export const addressDetails: Form = {
  [Forms.ADDRESS_DETAILS]: {
    inputs: {
      [AddressDetails.ADDRESS_LINE_ONE]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [AddressDetails.ADDRESS_LINE_TWO]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [AddressDetails.POSTAL_CODE]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [AddressDetails.CITY]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [AddressDetails.COUNTRY]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [AddressDetails.PHONE_NUMBER]: {
        value: '',
        isValid: false,
        errorText: '',
      },

      [AddressDetails.EMAIL]: {
        value: '',
        isValid: false,
        errorText: '',
      },
    },

    isFormValid: false,
  },
};

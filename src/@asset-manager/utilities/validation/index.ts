import { AddressDetails, Form, Forms, PersonalDetails } from '../../types';

function tryValidation(fn: (...args: any[]) => void) {
  const ref = this;

  return function (...args: any[]) {
    try {
      fn.apply(ref, args);

      return {
        errorText: '',
        isValid: true,
      };
    } catch (error) {
      return {
        errorText: (error as any).message,
        isValid: false,
      };
    }
  };
}

function checkEmptyString(value: string, error: string) {
  if (!value.length) {
    throw new Error(error);
  }
}

function checkDate(date: string) {
  if (isNaN(Date.parse(date))) {
    throw new Error('Invalid date.');
  }
}

function checkNumberString(value: string, error: string = 'Invalid number.') {
  // @ts-ignore

  if (!(Math.sign(value) >= 1)) {
    throw new Error(error);
  }
}

function checkEmail(value: string) {
  if (!/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(value)) {
    throw new Error('Invalid email.');
  }
}

function personalDetailsValidation(input: string, value: any) {
  switch (input) {
    case PersonalDetails.SEX:
      return checkEmptyString(value, 'Select your gender.');

    case PersonalDetails.DATE:
      return checkDate(value);

    case PersonalDetails.FIRST_NAME:
      return checkEmptyString(value, 'Insert you first name.');

    case PersonalDetails.INITIALS:
      return checkEmptyString(value, 'Insert an initial.');

    case PersonalDetails.LAST_NAME:
      return checkEmptyString(value, 'Insert your last name.');

    case PersonalDetails.NATIONALITY:
      return checkEmptyString(value, 'Pick your nationality.');

    case PersonalDetails.SECURITY_NUMBER:
      return checkNumberString(value);

    default:
      throw new Error('Invalid input');
  }
}

function addressDetailsValidation(formInfo: Form, input: string, value: any) {
  switch (input) {
    case AddressDetails.ADDRESS_LINE_ONE:
      if (!formInfo[Forms.ADDRESS_DETAILS].inputs[AddressDetails.ADDRESS_LINE_TWO].value && !value.length) {
        throw new Error('Insert your address.');
      }

      return;

    case AddressDetails.ADDRESS_LINE_TWO:
      if (!formInfo[Forms.ADDRESS_DETAILS].inputs[AddressDetails.ADDRESS_LINE_ONE].value && !value.length) {
        throw new Error('Insert your address.');
      }

      return;

    case AddressDetails.POSTAL_CODE:
      return checkEmptyString(value, 'Insert your postal code.');

    case AddressDetails.CITY:
      return checkEmptyString(value, 'Insert your city.');

    case AddressDetails.COUNTRY:
      return checkEmptyString(value, 'Insert your country.');

    case AddressDetails.PHONE_NUMBER:
      return checkNumberString(value, 'Insert your phone number.');

    case AddressDetails.EMAIL:
      return checkEmail(value);

    default:
      throw new Error('Invalid input.');
  }
}

function inputValidation(formInfo: Form, form: string, input: string, value: any) {
  switch (form) {
    case Forms.PERSONAL_DETIALS:
      return personalDetailsValidation(input, value);

    case Forms.ADDRESS_DETAILS:
      return addressDetailsValidation(formInfo, input, value);

    default:
      throw new Error('Invalid form');
  }
}

export const validation = tryValidation(inputValidation);

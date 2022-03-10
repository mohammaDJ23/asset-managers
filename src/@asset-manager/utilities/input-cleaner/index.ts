import { AddressDetails, PersonalDetails } from '../../types';

export function inputCleaner(input: string) {
  switch (input) {
    case PersonalDetails.DATE:
      return null;

    case PersonalDetails.FIRST_NAME:
    case PersonalDetails.LAST_NAME:
    case PersonalDetails.INITIALS:
    case PersonalDetails.NATIONALITY:
    case PersonalDetails.SECURITY_NUMBER:
    case PersonalDetails.SEX:
    case AddressDetails.ADDRESS_LINE_ONE:
    case AddressDetails.ADDRESS_LINE_TWO:
    case AddressDetails.CITY:
    case AddressDetails.COUNTRY:
    case AddressDetails.EMAIL:
    case AddressDetails.PHONE_NUMBER:
    case AddressDetails.POSTAL_CODE:
      return '';

    default:
      throw new Error('Invalid input.');
  }
}

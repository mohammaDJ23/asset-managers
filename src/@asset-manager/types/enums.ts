export enum Forms {
  PERSONAL_DETIALS = 'PERSONAL_DETIALS',
  ADDRESS_DETAILS = 'ADDRESS_DETAILS',
}

export enum PersonalDetails {
  SEX = 'sex',
  INITIALS = 'initials',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  DATE = 'date',
  NATIONALITY = 'nationality',
  SECURITY_NUMBER = 'securityNumber',
}

export enum AddressDetails {
  ADDRESS_LINE_ONE = 'addressLineOne',
  ADDRESS_LINE_TWO = 'addressLineTwo',
  POSTAL_CODE = 'postalCode',
  CITY = 'city',
  COUNTRY = 'country',
  PHONE_NUMBER = 'phoneNumber',
  EMAIL = 'email',
}

export enum Pages {
  INITIAL = '/',
  HOME = '/home',
}

export enum Actions {
  ON_CHANGE = 'ON_CHANGE',
  SET_FORM = 'SET_FORM',
  CHANGE_STEP = 'CHANGE_STEP',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  INPUT_CLEANER = 'INPUT_CLEANER',
}

import { FC } from 'react';
import { useAction, useState } from '../../../@asset-manager/hooks';
import { Forms } from '../../../@asset-manager/types';
import { FormControl, TextField, FormHelperText } from '@material-ui/core';
import { AddressDetails as AddressDetailsInputs } from '../../../@asset-manager/types';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { countries } from '../../../@asset-manager/constants';

const AddressDetails: FC = () => {
  const { formReducer } = useState();
  const { onChange } = useAction();
  const addressDetailsForm = formReducer.forms[Forms.ADDRESS_DETAILS];

  return (
    <div className="wh-100 p-5">
      <FormControl className="w-100 mb-4">
        <TextField
          error={
            !!(
              !addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_ONE].isValid &&
              addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_ONE].errorText
            )
          }
          fullWidth
          label="Address Line One"
          type="text"
          value={addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_ONE].value}
          onChange={event => {
            onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.ADDRESS_LINE_ONE, event.target.value);

            if (!addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_TWO].isValid) {
              onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.ADDRESS_LINE_TWO, '');
            }
          }}
        />

        <FormHelperText error>
          {addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_ONE].errorText}
        </FormHelperText>
      </FormControl>

      <FormControl className="mb-4 w-100">
        <TextField
          error={
            !!(
              !addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_TWO].isValid &&
              addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_TWO].errorText
            )
          }
          fullWidth
          label="Address Line Two"
          type="text"
          value={addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_TWO].value}
          onChange={event => {
            onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.ADDRESS_LINE_TWO, event.target.value);

            if (!addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_ONE].isValid) {
              onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.ADDRESS_LINE_ONE, '');
            }
          }}
        />

        <FormHelperText error>
          {addressDetailsForm.inputs[AddressDetailsInputs.ADDRESS_LINE_TWO].errorText}
        </FormHelperText>
      </FormControl>

      <FormControl className="mb-4 w-100">
        <TextField
          fullWidth
          error={
            !!(
              !addressDetailsForm.inputs[AddressDetailsInputs.POSTAL_CODE].isValid &&
              addressDetailsForm.inputs[AddressDetailsInputs.POSTAL_CODE].errorText
            )
          }
          label="Postal Code"
          type="text"
          value={addressDetailsForm.inputs[AddressDetailsInputs.POSTAL_CODE].value}
          onChange={event => onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.POSTAL_CODE, event.target.value)}
        />

        <FormHelperText error>{addressDetailsForm.inputs[AddressDetailsInputs.POSTAL_CODE].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="mb-4 w-100">
        <TextField
          error={
            !!(
              !addressDetailsForm.inputs[AddressDetailsInputs.CITY].isValid &&
              addressDetailsForm.inputs[AddressDetailsInputs.CITY].errorText
            )
          }
          fullWidth
          label="City"
          type="text"
          value={addressDetailsForm.inputs[AddressDetailsInputs.CITY].value}
          onChange={event => onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.CITY, event.target.value)}
        />

        <FormHelperText error>{addressDetailsForm.inputs[AddressDetailsInputs.CITY].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="w-100 mb-4">
        <InputLabel htmlFor="Country">Country</InputLabel>

        <Select
          error={
            !!(
              !addressDetailsForm.inputs[AddressDetailsInputs.COUNTRY].isValid &&
              addressDetailsForm.inputs[AddressDetailsInputs.COUNTRY].errorText
            )
          }
          value={addressDetailsForm.inputs[AddressDetailsInputs.COUNTRY].value}
          onChange={event => onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.COUNTRY, event.target.value)}
        >
          {countries.map((country, index) => (
            <MenuItem key={index} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </Select>

        <FormHelperText error>{addressDetailsForm.inputs[AddressDetailsInputs.COUNTRY].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="w-100 mb-4">
        <TextField
          fullWidth
          error={
            !!(
              !addressDetailsForm.inputs[AddressDetailsInputs.PHONE_NUMBER].isValid &&
              addressDetailsForm.inputs[AddressDetailsInputs.PHONE_NUMBER].errorText
            )
          }
          label="Phone Number"
          type="text"
          value={addressDetailsForm.inputs[AddressDetailsInputs.PHONE_NUMBER].value}
          onChange={event => onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.PHONE_NUMBER, event.target.value)}
        />

        <FormHelperText error>{addressDetailsForm.inputs[AddressDetailsInputs.PHONE_NUMBER].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="mb-2 w-100">
        <TextField
          fullWidth
          error={
            !!(
              !addressDetailsForm.inputs[AddressDetailsInputs.EMAIL].isValid &&
              addressDetailsForm.inputs[AddressDetailsInputs.EMAIL].errorText
            )
          }
          label="Email"
          type="email"
          value={addressDetailsForm.inputs[AddressDetailsInputs.EMAIL].value}
          onChange={event => onChange(Forms.ADDRESS_DETAILS, AddressDetailsInputs.EMAIL, event.target.value)}
        />

        <FormHelperText error>{addressDetailsForm.inputs[AddressDetailsInputs.EMAIL].errorText}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default AddressDetails;

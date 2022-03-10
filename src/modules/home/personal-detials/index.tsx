import { FC } from 'react';
import { useAction, useState } from '../../../@asset-manager/hooks';
import { Forms } from '../../../@asset-manager/types';
import { FormControl, TextField, FormHelperText } from '@material-ui/core';
import { PersonalDetails as PersonalDetailsInputs } from '../../../@asset-manager/types';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { nationalites } from '../../../@asset-manager/constants';

const PersonalDetails: FC = () => {
  const { formReducer } = useState();
  const { onChange } = useAction();
  const personalDetialsForm = formReducer.forms[Forms.PERSONAL_DETIALS];

  return (
    <div className="wh-100 p-5">
      <FormControl className="w-100 mb-4">
        <InputLabel htmlFor="Sex">Sex</InputLabel>

        <Select
          error={
            !!(
              !personalDetialsForm.inputs[PersonalDetailsInputs.SEX].isValid &&
              personalDetialsForm.inputs[PersonalDetailsInputs.SEX].errorText
            )
          }
          value={personalDetialsForm.inputs[PersonalDetailsInputs.SEX].value}
          onChange={event => onChange(Forms.PERSONAL_DETIALS, PersonalDetailsInputs.SEX, event.target.value)}
        >
          {['Male', 'Female'].map((gender, index) => (
            <MenuItem key={index} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </Select>

        <FormHelperText error>{personalDetialsForm.inputs[PersonalDetailsInputs.SEX].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="mb-4 w-100">
        <TextField
          error={
            !!(
              !personalDetialsForm.inputs[PersonalDetailsInputs.INITIALS].isValid &&
              personalDetialsForm.inputs[PersonalDetailsInputs.INITIALS].errorText
            )
          }
          fullWidth
          label="Initials"
          type="text"
          value={personalDetialsForm.inputs[PersonalDetailsInputs.INITIALS].value}
          onChange={event => onChange(Forms.PERSONAL_DETIALS, PersonalDetailsInputs.INITIALS, event.target.value)}
        />

        <FormHelperText error>{personalDetialsForm.inputs[PersonalDetailsInputs.INITIALS].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="mb-4 w-100">
        <TextField
          fullWidth
          error={
            !!(
              !personalDetialsForm.inputs[PersonalDetailsInputs.FIRST_NAME].isValid &&
              personalDetialsForm.inputs[PersonalDetailsInputs.FIRST_NAME].errorText
            )
          }
          label="First Name"
          type="text"
          value={personalDetialsForm.inputs[PersonalDetailsInputs.FIRST_NAME].value}
          onChange={event => onChange(Forms.PERSONAL_DETIALS, PersonalDetailsInputs.FIRST_NAME, event.target.value)}
        />

        <FormHelperText error>{personalDetialsForm.inputs[PersonalDetailsInputs.FIRST_NAME].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="mb-4 w-100">
        <TextField
          error={
            !!(
              !personalDetialsForm.inputs[PersonalDetailsInputs.LAST_NAME].isValid &&
              personalDetialsForm.inputs[PersonalDetailsInputs.LAST_NAME].errorText
            )
          }
          fullWidth
          label="Last Name"
          type="text"
          value={personalDetialsForm.inputs[PersonalDetailsInputs.LAST_NAME].value}
          onChange={event => onChange(Forms.PERSONAL_DETIALS, PersonalDetailsInputs.LAST_NAME, event.target.value)}
        />

        <FormHelperText error>{personalDetialsForm.inputs[PersonalDetailsInputs.LAST_NAME].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="w-100 mb-4">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            error={
              !!(
                !personalDetialsForm.inputs[PersonalDetailsInputs.DATE].isValid &&
                personalDetialsForm.inputs[PersonalDetailsInputs.DATE].errorText
              )
            }
            margin="normal"
            className="w-100"
            id="date-picker-inline"
            fullWidth
            label="Date of Birth"
            value={personalDetialsForm.inputs[PersonalDetailsInputs.DATE].value}
            onChange={date => onChange(Forms.PERSONAL_DETIALS, PersonalDetailsInputs.DATE, date)}
          />
        </MuiPickersUtilsProvider>

        <FormHelperText error>{personalDetialsForm.inputs[PersonalDetailsInputs.DATE].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="w-100 mb-4">
        <InputLabel htmlFor="nationality">Nationality</InputLabel>

        <Select
          fullWidth
          error={
            !!(
              !personalDetialsForm.inputs[PersonalDetailsInputs.NATIONALITY].isValid &&
              personalDetialsForm.inputs[PersonalDetailsInputs.NATIONALITY].errorText
            )
          }
          label="Nationality"
          value={personalDetialsForm.inputs[PersonalDetailsInputs.NATIONALITY].value}
          onChange={event => onChange(Forms.PERSONAL_DETIALS, PersonalDetailsInputs.NATIONALITY, event.target.value)}
        >
          {nationalites.map((nationality, index) => (
            <MenuItem key={index} value={nationality.nationality}>
              {nationality.nationality}
            </MenuItem>
          ))}
        </Select>

        <FormHelperText error>{personalDetialsForm.inputs[PersonalDetailsInputs.NATIONALITY].errorText}</FormHelperText>
      </FormControl>

      <FormControl className="mb-2 w-100">
        <TextField
          fullWidth
          error={
            !!(
              !personalDetialsForm.inputs[PersonalDetailsInputs.SECURITY_NUMBER].isValid &&
              personalDetialsForm.inputs[PersonalDetailsInputs.SECURITY_NUMBER].errorText
            )
          }
          label="Social Security Number"
          type="text"
          value={personalDetialsForm.inputs[PersonalDetailsInputs.SECURITY_NUMBER].value}
          onChange={event =>
            onChange(Forms.PERSONAL_DETIALS, PersonalDetailsInputs.SECURITY_NUMBER, event.target.value)
          }
        />

        <FormHelperText error>
          {personalDetialsForm.inputs[PersonalDetailsInputs.SECURITY_NUMBER].errorText}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default PersonalDetails;

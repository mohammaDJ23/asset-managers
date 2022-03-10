import { FC } from 'react';
import { useState } from '../../../@asset-manager/hooks';
import { AddressDetails, Forms, PersonalDetails } from '../../../@asset-manager/types';
import moment from 'moment';

const Review: FC = () => {
  const { formReducer } = useState();
  const personalDetailsForm = formReducer.forms[Forms.PERSONAL_DETIALS];
  const addressDetailsForm = formReducer.forms[Forms.ADDRESS_DETAILS];

  return (
    <div className="wh-100 p-5">
      <div className="wh-100">
        <div className="mb-4">
          <div className="mb-4">
            <h3>Personal details</h3>
          </div>

          <div>
            <p>Sex: {personalDetailsForm.inputs[PersonalDetails.SEX].value}</p>
            <p>Initials: {personalDetailsForm.inputs[PersonalDetails.INITIALS].value}</p>
            <p>First Name: {personalDetailsForm.inputs[PersonalDetails.FIRST_NAME].value}</p>
            <p>Last Name: {personalDetailsForm.inputs[PersonalDetails.LAST_NAME].value}</p>
            <p>Date Of Birth: {moment(personalDetailsForm.inputs[PersonalDetails.DATE].value).format('l')}</p>
            <p>Nationality: {personalDetailsForm.inputs[PersonalDetails.NATIONALITY].value}</p>
            <p>Social Security Number: {personalDetailsForm.inputs[PersonalDetails.SECURITY_NUMBER].value}</p>
          </div>
        </div>

        <div className="mb-3">
          <div className="mb-4">
            <h3>Address details</h3>
          </div>

          <div>
            <p>Address Line One: {addressDetailsForm.inputs[AddressDetails.ADDRESS_LINE_ONE].value || '_'}</p>
            <p>Addres Line Two: {addressDetailsForm.inputs[AddressDetails.ADDRESS_LINE_TWO].value || '_'}</p>
            <p>Postal Code: {addressDetailsForm.inputs[AddressDetails.POSTAL_CODE].value}</p>
            <p>City: {addressDetailsForm.inputs[AddressDetails.CITY].value}</p>
            <p>Country: {addressDetailsForm.inputs[AddressDetails.COUNTRY].value}</p>
            <p>Phone Number: {addressDetailsForm.inputs[AddressDetails.PHONE_NUMBER].value}</p>
            <p>Email: {addressDetailsForm.inputs[AddressDetails.EMAIL].value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

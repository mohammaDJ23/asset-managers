import { FC } from 'react';
import PageContainer from '../../../@asset-manager/interfaces/page-container';
import AddressDetails from '../address-details';
import PersonalDetials from '../personal-detials';
import Review from '../review';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useAction, useState } from '../../../@asset-manager/hooks';
import Button from '@material-ui/core/Button';
import { Forms } from '../../../@asset-manager/types';
import { combineFormsToString } from '../../../@asset-manager/redux/actions';

const steps = ['Personal details', 'Address details', 'Review'];

const Container: FC = () => {
  const { stepReducer, formReducer, requestProcessReducer } = useState();
  const { changeStap, formSubmit } = useAction();

  const forms = [
    formReducer.forms[Forms.PERSONAL_DETIALS].isFormValid,
    formReducer.forms[Forms.ADDRESS_DETAILS].isFormValid,
  ];

  return (
    <PageContainer>
      <div>
        <Stepper activeStep={stepReducer.step} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {(function () {
          switch (stepReducer.step) {
            case 0:
              return <PersonalDetials />;

            case 1:
              return <AddressDetails />;

            case 2:
              return <Review />;

            default:
              return null;
          }
        })()}

        <div className="w-100 px-5">
          <div className="d-flex align-items-center justify-content-start">
            {stepReducer.step > 0 && (
              <div className="mr-14">
                <Button
                  variant="text"
                  color="primary"
                  type="button"
                  size="small"
                  onClick={() => changeStap(stepReducer.step - 1)}
                >
                  Back
                </Button>
              </div>
            )}

            {stepReducer.step <= forms.length - 1 ? (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  size="small"
                  disabled={!forms[stepReducer.step]}
                  onClick={() => changeStap(stepReducer.step + 1)}
                >
                  Next
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  size="small"
                  disabled={
                    requestProcessReducer.loading[combineFormsToString([Forms.PERSONAL_DETIALS, Forms.ADDRESS_DETAILS])]
                  }
                  onClick={() => formSubmit(combineFormsToString([Forms.PERSONAL_DETIALS, Forms.ADDRESS_DETAILS]))}
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Container;

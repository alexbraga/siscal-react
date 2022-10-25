import React, { useState } from "react";
import BusinessDetailsForm from "./BusinessDetailsForm";
import RelevanceFactorForm from "./RelevanceFactorForm";
import TemporalityFactorForm from "./TemporalityFactorForm";
import CoverageFactorForm from "./CoverageFactorForm";
import Report from "./Report";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

function Form() {
  const [step, setStep] = useState(0);

  const [info, setInfo] = useState({
    businessName: "",
    cnpj: "",
    referenceValue: 0,
    relevanceFactor: 0,
    temporalityFactor: 0,
    coverageFactor: 0,
  });

  const steps = ["Informações do Empreendimento", "Fator de Relevância", "Fator de Temporalidade", "Fator de Abrangência", "Relatório Final"]

  function nextStep() {
    setStep((currentValue) =>
      currentValue + 1
    );
  }

  function prevStep() {
    setStep((currentValue) =>
      currentValue - 1
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function pageDisplay() {
    switch (step) {
      case 0:
        return (
          <BusinessDetailsForm
            handleChange={handleChange}
            values={info}
          />
        );

      case 1:
        return (
          <RelevanceFactorForm
            handleChange={handleChange}
            values={info}
          />
        );

      case 2:
        return (
          <TemporalityFactorForm
            handleChange={handleChange}
            values={info}
          />
        );

      case 3:
        return (
          <CoverageFactorForm
            handleChange={handleChange}
            values={info}
          />
        );

      case 4:
        return (
          <Report
            handleChange={handleChange}
            values={info}
          />
        );

      default:
        break;
    }
  }

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <div className="progress-bar">
            <Stepper activeStep={step} alternativeLabel sx={{margin: 5}}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>

        <div className="body">{pageDisplay()}</div>

        <div className="footer">
          <Button
            variant="contained"
            disabled={step === 0}
            onClick={prevStep}
            sx={{ margin: 2 }}
          >
            Anterior
          </Button>
          <Button
            variant="contained"
            disabled={step === 4}
            onClick={nextStep}
            sx={{ margin: 2 }}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;

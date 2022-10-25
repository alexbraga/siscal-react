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
    relevanceFactor: {
      rf01: false,
      rf02: false,
      rf03: "",
      rf04: false,
      rf05: false,
      rf06: "",
      rf07: false,
      rf08: false,
      rf09: false,
      rf10: false,
      rf11: false,
      rf12: false,
      rf13: false,
    },
    temporalityFactor: "",
    coverageFactor: "",
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
    const { name, id, value, checked } = event.target;

    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        relevanceFactor: {
          ...prevValue.relevanceFactor,
          [id]: checked,
          [name]: value
        },
      };
    });
  }

  function pageDisplay() {
    switch (step) {
      case 0:
        return (
          <BusinessDetailsForm
            handleChange={handleChange}
            formData={info}
          />
        );

      case 1:
        return (
          <RelevanceFactorForm
            handleChange={handleChange}
            formData={info}
          />
        );

      case 2:
        return (
          <TemporalityFactorForm
            handleChange={handleChange}
            formData={info}
          />
        );

      case 3:
        return (
          <CoverageFactorForm
            handleChange={handleChange}
            formData={info}
          />
        );

      case 4:
        return (
          <Report
            handleChange={handleChange}
            formData={info}
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

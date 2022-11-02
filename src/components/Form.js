import React, { useState, useEffect } from "react";
import BusinessDetailsForm from "./BusinessDetailsForm";
import RelevanceFactorForm from "./RelevanceFactorForm";
import TemporalityFactorForm from "./TemporalityFactorForm";
import CoverageFactorForm from "./CoverageFactorForm";
import Report from "./Report";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Relevance } from "../factors";

function Form() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
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

  const steps = [
    "Informações do Empreendimento",
    "Fator de Relevância",
    "Fator de Temporalidade",
    "Fator de Abrangência",
    "Relatório Final",
  ];

  const [relFactors, setRelFactors] = useState([]);
  const [tempFactor, setTempFactor] = useState("");
  const [coverageFactor, setCoverageFactor] = useState("");
  const [scores, setScores] = useState(0);
  const radioScores = [0, 0, 0, 0];

  useEffect(() => {
    const uncheckedElements = document.querySelectorAll(
      `input[type="radio"]:not(:checked)`
    );

    const uncheckedRadios = [];

    uncheckedElements.forEach((elem) => {
      switch (elem.name) {
        case "rf03":
          return uncheckedRadios.push(Relevance[2].text + " " + elem.value);

        case "rf06":
          return uncheckedRadios.push(
            "Interferência em áreas prioritárias para a conservação: " +
              elem.value
          );

        default:
          break;
      }
    });

    setRelFactors(
      relFactors.filter((element) => {
        return !uncheckedRadios.includes(element);
      })
    );
    console.log(scores);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  function nextStep() {
    setStep((currentValue) => currentValue + 1);
  }

  function prevStep() {
    setStep((currentValue) => currentValue - 1);
  }

  function handleChange(event) {
    const { name, id, value, checked } = event.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        relevanceFactor: {
          ...prevValue.relevanceFactor,
          [id]: checked,
          [name]: value,
        },
      };
    });
  }

  function addScore(score) {
    setScores(
      (currentValue) =>
        (currentValue.toFixed(3) * 1000 + score.toFixed(3) * 1000) / 1000
    );
  }

  function subtractScore(score) {
    setScores(
      (currentValue) =>
        (currentValue.toFixed(3) * 1000 - score.toFixed(3) * 1000) / 1000
    );
  }

  function handleChoice(event, text, score) {
    const { name, value, type, checked } = event.target;
    const index = relFactors.indexOf(text);

    if (checked) {
      if (type === "radio") {
        if (name === "rf03") {
          setRelFactors([...relFactors, `${text} ${value}`]);
          radioScores[0] = score;
        } else if (name === "rf06") {
          setRelFactors([
            ...relFactors,
            `Interferência em áreas prioritárias para a conservação: ${value}`,
          ]);
          radioScores[1] = score;
        } else {
          if (name === "temporalityFactor") {
            setTempFactor(text);
            radioScores[2] = score;
          }

          if (name === "coverageFactor") {
            setCoverageFactor(text);
            radioScores[3] = score;
          }
        }
      } else {
        setRelFactors([...relFactors, text]);
        addScore(score);
      }
    } else {
      setRelFactors(
        relFactors.filter((element, id) => {
          return index !== id;
        })
      );

      subtractScore(score);
    }
  }

  function pageDisplay() {
    switch (step) {
      case 0:
        return (
          <BusinessDetailsForm
            handleChange={handleChange}
            formData={formData}
          />
        );

      case 1:
        return (
          <RelevanceFactorForm
            formData={formData}
            handleChange={handleChange}
            handleChoice={handleChoice}
          />
        );

      case 2:
        return (
          <TemporalityFactorForm
            formData={formData}
            handleChange={handleChange}
            handleChoice={handleChoice}
          />
        );

      case 3:
        return (
          <CoverageFactorForm
            formData={formData}
            handleChange={handleChange}
            handleChoice={handleChoice}
          />
        );

      case 4:
        return (
          <Report
            handleChange={handleChange}
            formData={formData}
            relevanceFactors={relFactors}
            temporalityFactor={tempFactor}
            coverageFactor={coverageFactor}
            scores={scores}
            radioScores={radioScores}
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
            <Stepper activeStep={step} alternativeLabel sx={{ margin: 5 }}>
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
import React, { useState, useEffect } from "react";
import BusinessDetailsForm from "../components/BusinessDetailsForm/BusinessDetailsForm";
import RelevanceFactorForm from "../components/RelevanceFactorForm/RelevanceFactorForm";
import TemporalityFactorForm from "../components/TemporalityFactorForm/TemporalityFactorForm";
import CoverageFactorForm from "../components/CoverageFactorForm/CoverageFactorForm";
import EnvironmentalCompensation from "../components/EnvironmentalCompensation/EnvironmentalCompensation";
import Button from "@mui/material/Button";
import { Relevance } from "../factors";
import MainLayout from "../components/MainLayout";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import UpdateIcon from "@mui/icons-material/Update";
import TerrainIcon from "@mui/icons-material/Terrain";
import PaidIcon from "@mui/icons-material/Paid";
import "./styles.css";
import { Typography } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./Report/Report";

function Form() {
  const [title, setTitle] = useState(0);

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
    <div>
      <InfoIcon fontSize="large" />
      <Typography variant="h4">Informações do Empreendimento</Typography>
    </div>,
    <div>
      <AssignmentIcon fontSize="large" />
      <Typography variant="h4">Fator de Relevância</Typography>
    </div>,
    <div>
      <UpdateIcon fontSize="large" />
      <Typography variant="h4">Fator de Temporalidade</Typography>
    </div>,
    <div>
      <TerrainIcon fontSize="large" />
      <Typography variant="h4">Fator de Abrangência</Typography>
    </div>,
    <div>
      <PaidIcon fontSize="large" />
      <Typography variant="h4">Compensação Ambiental</Typography>
    </div>,
    <Typography variant="h4">Relatório</Typography>,
  ];

  const [relFactors, setRelFactors] = useState([]);
  const [tempFactor, setTempFactor] = useState("");
  const [coverageFactor, setCoverageFactor] = useState("");
  const [scores, setScores] = useState(0);
  const [radioScores] = useState([0, 0, 0, 0]);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  function nextStep() {
    setTitle((currentValue) => currentValue + 1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function prevStep() {
    setTitle((currentValue) => currentValue - 1);
  }

  function handleChange(event, maskedvalue, floatvalue) {
    const { name, id, value, checked } = event.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: name === "referenceValue" ? floatvalue : value,
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
    switch (title) {
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
          <EnvironmentalCompensation
            formData={formData}
            scores={scores}
            radioScores={radioScores}
          />
        );

      default:
        break;
    }
  }

  // Create a date object from a date string
  const date = new Date(Date.now());

  // Get year, month, and day part from the date
  const year = date.toLocaleString("pt-BR", { year: "numeric" });
  const month = date.toLocaleString("pt-BR", { month: "2-digit" });
  const day = date.toLocaleString("pt-BR", { day: "2-digit" });

  // Generate yyyy-mm-dd date string
  const formattedDate = year + "-" + month + "-" + day;

  return (
    <MainLayout>
      <Box m="auto">
        <div className="form" style={{ textAlign: "center" }}>
          <div className="form-container">
            <div className="header">
              <h1>{steps[title]}</h1>
            </div>

            <div className="body">{pageDisplay()}</div>

            <div className="footer">
              <Button
                variant="contained"
                disabled={title === 0}
                onClick={prevStep}
                sx={{ margin: 2 }}
              >
                Anterior
              </Button>
              {title === 4 ? (
                <PDFDownloadLink
                  style={{
                    backgroundColor: "green",
                    borderRadius: "4px",
                    color: "white",
                    display: "inline-block",
                    fontSize: 14,
                    height: "39px",
                    padding: "10px",
                    textDecoration: "none",
                    width: "106px",
                    margin: "0 15px",
                  }}
                  document={
                    <MyDocument
                      formData={formData}
                      relevanceFactors={relFactors}
                      temporalityFactor={tempFactor}
                      coverageFactor={coverageFactor}
                      scores={scores}
                      radioScores={radioScores}
                    />
                  }
                  fileName={`${formattedDate}-relatorio.pdf`}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Aguarde..." : "DOWNLOAD"
                  }
                </PDFDownloadLink>
              ) : (
                <Button
                  variant="contained"
                  disabled={
                    (title === 2 && formData.temporalityFactor === "") ||
                    (title === 3 && formData.coverageFactor === "")
                  }
                  onClick={nextStep}
                  sx={{ margin: 2 }}
                >
                  {title === 3 ? "Calcular" : "Próximo"}
                </Button>
              )}
              {title === 4 ? (
                <Button
                  sx={{ display: "block", margin: "auto" }}
                  onClick={() => window.location.reload()}
                >
                  Novo Cálculo
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Box>
    </MainLayout>
  );
}

export default Form;

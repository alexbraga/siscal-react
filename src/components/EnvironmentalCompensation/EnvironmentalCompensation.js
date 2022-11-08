import React from "react";
import Typography from "@mui/material/Typography";
import "./styles.css";

function EnvironmentalCompensation(props) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function relFactorScore() {
    const sum =
      (props.scores.toFixed(3) * 1000 +
        props.radioScores[0].toFixed(3) * 1000 +
        props.radioScores[1].toFixed(3) * 1000) /
      1000;

    return sum;
  }

  function tempFactorScore() {
    return props.radioScores[2];
  }

  function coverFactorScore() {
    return props.radioScores[3];
  }

  function envCompensation() {
    const scoreSum =
      (relFactorScore().toFixed(3) * 1000 +
        tempFactorScore().toFixed(3) * 1000 +
        coverFactorScore().toFixed(3) * 1000) /
      1000;

    let factorIndex = 0;

    if (scoreSum > 0.5) {
      factorIndex = 0.005;
    } else {
      factorIndex = scoreSum * 0.01;
    }

    const compensationValue = props.formData.referenceValue * factorIndex;

    return compensationValue;
  }

  return (
    <div>
      <Typography variant="h6">
        <strong>
          Valor da Compensação Ambiental (CA = FR + (FT + FA) * VR):
        </strong>{" "}
        <span>
          <h3>{formatter.format(envCompensation())}</h3>
        </span>
      </Typography>

      <div className="info">
        <Typography variant="body2">
          <strong>Valor de Referência:</strong>{" "}
          {formatter.format(props.formData.referenceValue)}
        </Typography>

        <Typography variant="body2">
          <strong>Índice FR:</strong> {relFactorScore()}
        </Typography>

        <Typography variant="body2">
          <strong>Índice FT:</strong> {tempFactorScore()}
        </Typography>

        <Typography variant="body2">
          <strong>Índice FA:</strong> {coverFactorScore()}
        </Typography>
        <br />

        <Typography variant="body2" sx={{ mt: 1 }}>
          <em>
            *Se FR + (FT + FA) &gt; 0,5, o índice a ser utilizado é
            0,005; caso contrário, considera-se o valor obtido multiplicado por
            0,01.
          </em>
        </Typography>
      </div>
    </div>
  );
}

export default EnvironmentalCompensation;

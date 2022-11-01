import React from "react";
import Typography from "@mui/material/Typography";

function Report(props) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div>
      <Typography>
        <strong>Empreendimento:</strong> {props.formData.businessName}
      </Typography>

      <Typography>
        <strong>CNPJ:</strong> {props.formData.cnpj}
      </Typography>

      <Typography>
        <strong>Valor de Referência:</strong>{" "}
        {formatter.format(props.formData.referenceValue)}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        <strong>Fatores de Relevância:</strong>
      </Typography>
      {props.relevanceFactors.map((factor, index) => (
        <p key={index}>{factor}</p>
      ))}

      <Typography sx={{ mt: 2 }}>
        <strong>Fator de Temporalidade:</strong>
      </Typography>
      <p>{props.temporalityFactor}</p>

      <Typography sx={{ mt: 2 }}>
        <strong>Fator de Cobertura:</strong>
      </Typography>
      <p>{props.coverageFactor}</p>
    </div>
  );
}

export default Report;

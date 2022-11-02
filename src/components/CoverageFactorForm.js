import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Coverage } from "../factors";

function CoverageFactorForm(props) {
  function getOptions() {
    return Coverage.options.map((option, index) => {
      return (
        <FormControlLabel
          key={index}
          label={option.value}
          control={
            <Radio
              name="coverageFactor"
              value={option.value}
              checked={props.formData.coverageFactor === option.value}
              onChange={(event) => {
                props.handleChange(event);
                props.handleChoice(event, option.value, option.score);
              }}
            />
          }
        />
      );
    });
  }

  return (
    <div>
      <FormControl sx={{ height: "120px" }}>
        <FormLabel id="demo-radio-buttons-group-label">
          Área de Interferência
        </FormLabel>
        {getOptions()}
      </FormControl>

      <Stack sx={{ width: "60%", margin: "auto" }} spacing={2}>
        <div className="alert">
          <Alert severity="info">
            O Fator de Abrangência é o critério que permite avaliar a
            distribuição espacial do comprometimento do meio ambiente pelo
            empreendimento
          </Alert>
        </div>
        <div>
          <Alert severity="info">
            "Entende-se por: (1) área de interferência direta - até 10Km da
            linha perimétrica da área principal do empreendimento, onde os
            impactos incidem de forma primária; e (2) área de interferência
            indireta - abrangência regional ou da bacia hidrográfica na qual se
            insere o empreendimento, onde os impactos incidem de forma
            secundária ou terciária."
          </Alert>
        </div>
      </Stack>
    </div>
  );
}

export default CoverageFactorForm;

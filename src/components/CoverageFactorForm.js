import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
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
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Área de Interferência
        </FormLabel>
        {getOptions()}
      </FormControl>
    </div>
  );
}

export default CoverageFactorForm;
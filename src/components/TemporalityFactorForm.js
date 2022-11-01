import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Temporality } from "../factors";

function TemporalityFactorForm(props) {
  function getOptions() {
    return Temporality.options.map((option) => {
      return (
        <FormControlLabel
          key={option.value}
          label={option.value}
          control={
            <Radio
              name="temporalityFactor"
              value={option.value}
              checked={props.formData.temporalityFactor === option.value}
              onChange={(event) => {
                props.handleChange(event);
                props.handleChoice(event, option.value);
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
        <FormLabel id="demo-radio-buttons-group-label">Duração</FormLabel>
        {getOptions()}
      </FormControl>
    </div>
  );
}

export default TemporalityFactorForm;

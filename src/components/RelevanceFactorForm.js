import React from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Relevance } from "../factors";

function RelevanceFactorForm(props) {
  function getOptions() {
    return Relevance.map((factor) => {
      if (factor.id === "rf03" || factor.id === "rf06") {
        return (
          <tr key={factor.id}>
            <td>
              <Typography>{factor.text}</Typography>

              <FormControl>
                {factor.options.map((option) => {
                  return (
                    <FormControlLabel
                      key={option.value}
                      label={option.value}
                      control={
                        <Radio
                          name={factor.id}
                          value={option.value}
                          checked={
                            props.formData.relevanceFactor[factor.id] === option.value
                          }
                          onChange={(event) => {
                            props.handleChange(event);
                            props.handleChoice(event, factor.text);
                          }}
                        />
                      }
                    />
                  );
                })}
              </FormControl>
            </td>
          </tr>
        );
      }

      return (
        <tr key={factor.id}>
          <td>
            <Typography>{factor.text}</Typography>
          </td>
          <td>
            <Switch
              id={factor.id}
              checked={props.formData.relevanceFactor[factor.id]}
              onChange={(event) => {
                props.handleChange(event);
                props.handleChoice(event, factor.text);
              }}
            />
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <div className="rf-table">
        <table>
          <tbody>{getOptions()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default RelevanceFactorForm;

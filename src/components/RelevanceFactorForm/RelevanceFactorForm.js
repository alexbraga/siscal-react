import React from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Relevance } from "../../factors";
import Box from "@mui/material/Box";
import "./styles.css"

function RelevanceFactorForm(props) {
  function getOptions() {
    return Relevance.map((factor) => {
      if (factor.id === "rf03" || factor.id === "rf06") {
        return (
          <tr key={factor.id}>
            <td>
              <Typography>{factor.text}</Typography>

              <FormControl>
                {factor.options.map((option, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      label={option.value}
                      control={
                        <Radio
                          name={factor.id}
                          value={option.value}
                          checked={
                            props.formData.relevanceFactor[factor.id] ===
                            option.value
                          }
                          onChange={(event) => {
                            props.handleChange(event);
                            props.handleChoice(
                              event,
                              factor.text,
                              option.score
                            );
                          }}
                        />
                      }
                    />
                  );
                })}
              </FormControl>
            </td>
            <td></td>
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
                props.handleChoice(event, factor.text, factor.score);
              }}
            />
          </td>
        </tr>
      );
    });
  }

  return (
    <Box m="auto">
      <div>
        <div className="table-container">
          <table className="rf-table">
            <tbody>{getOptions()}</tbody>
          </table>
        </div>
      </div>
    </Box>
  );
}

export default RelevanceFactorForm;

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Relevance } from "../../factors";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import "./styles.css";

function RelevanceFactorForm(props) {
  const [show, setShow] = useState(null);

  const handleExpand = (clickedIndex) => {
    if (show === clickedIndex) {
      setShow(null);
    } else {
      setShow(clickedIndex);
    }
  };

  function getInfo(factor, factorIndex) {
    return (
      <div>
        <p className="show-info" onClick={() => handleExpand(factorIndex)}>
          {show === factorIndex ? "Ocultar" : "Mais informações"}
        </p>
        <div className="info-container">
          <Collapse in={show === factorIndex}>
            {factor.info.map((item, itemIndex) => {
              if (item.url) {
                return (
                  <p key={itemIndex}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={item.url}
                    >
                      {item.url}
                    </a>
                  </p>
                );
              }

              return <p key={itemIndex}>{item.text}</p>;
            })}
          </Collapse>
        </div>
      </div>
    );
  }

  function getOptions() {
    return Relevance.map((factor, factorIndex) => {
      if (factor.id === "rf03" || factor.id === "rf06") {
        return (
          <tr key={factor.id}>
            <td colSpan="2">
              <Typography>{factor.text}</Typography>

              <FormControl>
                {factor.options.map((option, optionIndex) => {
                  return (
                    <FormControlLabel
                      key={optionIndex}
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
              {getInfo(factor, factorIndex)}
            </td>
          </tr>
        );
      }

      return (
        <tr key={factor.id}>
          <td>
            <Typography>{factor.text}</Typography>
            {getInfo(factor, factorIndex)}
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

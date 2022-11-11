import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    lineHeight: 1.5,
  },
  description: {
    paddingLeft: 8,
    textAlign: "left",
    width: "100%",
  },
});

const ReportTableRow = (props) => {
  return (
    <Fragment>
      {Array.isArray(props.items) ? (
        props.items.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.description}>• {item}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.description}>• {props.items}</Text>
      )}
    </Fragment>
  );
};

export default ReportTableRow;

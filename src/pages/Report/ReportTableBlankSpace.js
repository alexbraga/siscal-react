import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    color: "white",
    flexDirection: "row",
    lineHeight: 1.5,
  },
  description: {
    width: "100%",
  },
});

const ReportTableBlankSpace = (props) => {
  const blankRows = Array(props.rowsCount).fill(0);
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} key={`BR${i}`}>
      <Text style={styles.description}>-</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default ReportTableBlankSpace;

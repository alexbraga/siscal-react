import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: "#608f39",
    borderBottomWidth: 2,
    flexDirection: "row",
    flexGrow: 1,
    height: 24,
    marginVertical: 5,
    textAlign: "left",
  },
  description: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    width: "100%",
  },
});

const ReportTableHeader = (props) => (
  <View style={styles.container}>
    <Text style={styles.description}>{props.title}</Text>
  </View>
);

export default ReportTableHeader;

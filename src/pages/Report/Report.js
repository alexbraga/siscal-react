import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import ReportHeader from "./ReportHeader";
import ReportDetails from "./ReportDetails";
import ReportTable from "./ReportTable";
import ReportNotes from "./ReportNotes";

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    fontFamily: "Helvetica",
    fontSize: 9,
    paddingBottom: 25,
    paddingHorizontal: 25,
    paddingTop: 15,
  },
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <ReportHeader />
      <ReportDetails formData={props.formData} />
      <ReportTable
        formData={props.formData}
        relevanceFactors={props.relevanceFactors}
        temporalityFactor={props.temporalityFactor}
        coverageFactor={props.coverageFactor}
        scores={props.scores}
        radioScores={props.radioScores}
      />
      <ReportNotes />
    </Page>
  </Document>
);

export default MyDocument;

import { Column, Heading, Row, Section, Text } from "@react-email/components";
import EmailLayout from "#layouts/base";

export default function EmailVerify() {
  return (
    <EmailLayout preview="Your report has been received: #{{reportPublicId}}" title="Report: #{{reportPublicId}}">
      <Text>Hello {"{{userName}}"},</Text>
      <Text>This is a confirmation that your report to the profile <strong>{"{{profileNameId}}"}</strong> has been received. It will be reviewed and </Text>
      <Heading as="h3">Report summary:</Heading>
      <Heading as="h4" style={styleReportHeading}>Report ID</Heading>
      <Text style={styleReportValue}>#{"{{reportPublicId}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>URL</Heading>
      <Text style={styleReportValue}>https://profile.rocks/{"{{profileNameId}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>Categories</Heading>
      <Text style={styleReportValue}>{"{{categories}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>Date</Heading>
      <Text style={styleReportValue}>{"{{date}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>Additional details</Heading>
      <Text style={styleReportDetailsValue}>{"{{details}}"}</Text>
    </EmailLayout>
  );
}

/**
 * @type {React.CSSProperties}
 */
const styleReportDetailsValue = {
  backgroundColor: "#08090a",
  padding: "8px",
  marginTop: "4px",
}

/**
 * @type {React.CSSProperties}
 */
const styleReportHeading = {
  marginBottom: 0
};

/**
 * @type {React.CSSProperties}
 */
const styleReportValue = {
  marginTop: 0,
};

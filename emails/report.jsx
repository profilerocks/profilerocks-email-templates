import { Column, Row, Section, Text } from "@react-email/components";
import EmailLayout from "#layouts/base";

export default function EmailVerify() {
  return (
    <EmailLayout preview="Your report has been received: #{{reportPublicId}}" title="Report: #{{reportPublicId}}">
      <Text>Hello {"{{userName}}"},</Text>
      <Text>This is a confirmation that your report to the profile <strong>{"{{profileNameId}}"}</strong> has been received. It will be reviewed and </Text>
      <Text>Report summary:</Text>
      <Section style={styleReportSummarySection}>
        <Row>
          <Column><strong>Report ID:</strong></Column>
          <Column>#{"{{reportPublicId}}"}</Column>
        </Row>
        <Row>
          <Column><strong>Date:</strong></Column>
          <Column>{"{{date}}"}</Column>
        </Row>
        <Row>
          <Column><strong>Categories:</strong></Column>
          <Column>{"{{categories}}"}</Column>
        </Row>
        <Row>
          <Column><strong>URL:</strong></Column>
          <Column>{"{{url}}"}</Column>
        </Row>
      </Section>
    </EmailLayout>
  );
}

/**
 * @type {React.CSSProperties}
 */
const styleReportSummarySection = {
  textAlign: "left"
};

import { Heading, Text } from "@react-email/components";
import EmailLayout from "#layouts/base";

export default function EmailReport() {
  return (
    <EmailLayout preview="Your report has been received." title="Report: #{{reportPublicId}}">
      <Text>Hello {"{{userName}}"},</Text>
      <Text>
        This is a confirmation that your report to profile <strong>{"{{profile}}"}</strong> has been received. It will be reviewed
        and a decision will be made regarding this report and the profile. Once the review is complete, you will receive an email
        notification with the outcome.
      </Text>
      <Heading as="h3">Report summary:</Heading>
      <Heading as="h4" style={styleReportHeading}>
        Report ID
      </Heading>
      <Text style={styleReportValue}>#{"{{reportPublicId}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>
        Profile public ID
      </Heading>
      <Text style={styleReportValue}>#{"{{profilePublicId}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>
        URL
      </Heading>
      <Text style={styleReportValue}>https://profile.rocks/{"{{profile}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>
        Categories
      </Heading>
      <Text style={styleReportValue}>{"{{categories}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>
        Date
      </Heading>
      <Text style={styleReportValue}>{"{{date}}"}</Text>
      <Heading as="h4" style={styleReportHeading}>
        Additional details {"{{detailsStatus}}"}
      </Heading>
    </EmailLayout>
  );
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
  marginTop: 0
};

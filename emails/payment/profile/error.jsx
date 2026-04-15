import { Text } from "@react-email/components";
import EmailLayout from "#layouts/base";

export default function PaymentProfileError() {
  return (
    <EmailLayout preview="Payment processing for profile {{profile}} on {{billing}} has failed." title="Profile Payment Error">
      <Text>
        The payment processing for plan {"{{plan}}"} for profile <strong>{"{{profile}}"}</strong> on {"{{billing}}"} has failed because the
        profile no longer exists.
      </Text>
      <Text>
        A refund of <strong>{"{{amount}}"}</strong> has been automatically issued; if you haven't received it or the amount is incorrect,
        please contact support.
      </Text>
    </EmailLayout>
  );
}

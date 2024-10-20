import { VerificationEmailTemplate } from "../../emails/VerificationEmial";
import { resend } from "@/lib/resend";

export async function SendVerficationEmail(
  username: string,
  email: string,
  code: string
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verification Code",
      react: VerificationEmailTemplate({ firstName: username, code: code }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

import React from "react";

interface VerificationEmailTemplateProps {
  firstName: string;
  code: string;
}

export const VerificationEmailTemplate: React.FC<
  Readonly<VerificationEmailTemplateProps>
> = ({ firstName, code }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Verification Code for the HPS is {code}</p>
  </div>
);

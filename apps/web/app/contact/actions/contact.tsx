'use server';

import { parseError } from '@titan/design-system/lib/error';
import { ContactTemplate } from '@titan/email-templates/contact';
import { env } from '@titan/env';
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_TOKEN);

export const contact = async (
  name: string,
  email: string,
  message: string
): Promise<{
  error?: string;
}> => {
  try {
    await resend.emails.send({
      from: env.RESEND_FROM,
      to: env.RESEND_FROM,
      subject: 'Contact form submission',
      replyTo: email,
      react: <ContactTemplate name={name} email={email} message={message} />,
    });

    return {};
  } catch (error) {
    const errorMessage = parseError(error);

    return { error: errorMessage };
  }
};

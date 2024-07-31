import { Resend } from 'resend';
import { render } from "@react-email/render";
import WelcomeEmail from '../../../emails/Emailtemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handle(req, res) {
  const { method } = req;

  if (method === 'POST') {
    try {
      const {name,email,phone,service,details} = req.body;

      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['roshanahamed9600@gmail.com'],
        subject: 'You Got Booking',
        html: render(WelcomeEmail({name,email,phone,service,details})),
      });

      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
      }

      return res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
      console.error('Error in POST handler:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

import emailInstance from '@/lib/nodemailer/instance'
import { render } from '@react-email/render'
import { EmailAdmin } from '@/components/FormatEmail'
import { Email } from '@/types/email.type'

export const sendContactUsEmail = async ({ name, email, phone, service, message }: Email) => {
  await emailInstance({
    to: 'domsattech@gmail.com',
    subject: `New message from ${name}`,
    html: await render(EmailAdmin({ name, email, phone, service, message }))
  })
}

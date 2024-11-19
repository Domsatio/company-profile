import instance from '@/lib/axios/instance'
import { Email } from '@/types/email.type'

const services = {
  sendEmail: (payload: Email) => instance.post<Email>('/api/email', payload)
}

export default services

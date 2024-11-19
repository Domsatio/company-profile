import { Loader2, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { FC, useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ListComponent from "./ListComponent"
import { Services } from "@/constants/Services"
import { useForm, SubmitHandler } from "react-hook-form"
import services from "@/services/service"
import { Email } from "@/types/email.type"

type ContactFormProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

const ContactForm: FC<ContactFormProps> = ({ open, setOpen }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Email>()

  const onSubmit: SubmitHandler<Email> = async (data) => {
    setIsLoading(true)
    try {
      await services.sendEmail(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="hidden md:block rounded-full md:text-base">
          Let&apos;s Talk
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let&apos;s Talk</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name" className="after:content-['*'] after:text-red-500">Name </Label>
            <Input
              type="text"
              id="name"
              placeholder="Type your name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="after:content-['*'] after:text-red-500">Email </Label>
            <Input
              type="email"
              id="email"
              placeholder="Type your email"
              {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone" className="after:content-['*'] after:text-red-500">Phone Number </Label>
            <Input
              type="number"
              id="phone"
              placeholder="Type your phone number"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="service" className="after:content-['*'] after:text-red-500">Service Type </Label>
            <Select onValueChange={(value) => setValue("service", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Service Type" />
              </SelectTrigger>
              <SelectContent>
                <ListComponent
                  data={Services}
                  renderItem={({ title }) => (
                    <SelectItem
                      key={title}
                      value={title}
                      className="cursor-pointer"
                    >
                      {title}
                    </SelectItem>
                  )} />
              </SelectContent>
            </Select>
            {errors.service && <span className="text-red-500 text-sm">Service type is required</span>}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="message" className="after:content-['*'] after:text-red-500">Project Description </Label>
            <Textarea
              id="message"
              placeholder="Type your message"
              className="min-h-[100px]"
              {...register("message", { required: true })}
            />
            {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
          </div>
          <Button type="submit" size="lg" className="w-full flex items-center justify-center" disabled={isLoading}>
            {isLoading ? <><Loader2 className="size-4 animate-spin" /> Sending...</> : <>Send Email <Send className="size-4" /></>}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ContactForm
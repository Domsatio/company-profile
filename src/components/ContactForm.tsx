'use client'
import { Loader2, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
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

const ContactForm = () => {
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
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name" className="after:content-['*'] after:text-red-500">Nama </Label>
        <Input
          type="text"
          id="name"
          placeholder="Masukkan nama Anda"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500 text-sm">Nama harus diisi</span>}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email" className="after:content-['*'] after:text-red-500">Email </Label>
        <Input
          type="email"
          id="email"
          placeholder="Masukkan email Anda"
          {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
        />
        {errors.email && <span className="text-red-500 text-sm">Email harus diisi</span>}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="phone" className="after:content-['*'] after:text-red-500">Nomor Telepon </Label>
        <Input
          type="number"
          id="phone"
          placeholder="Masukkan nomor telepon Anda"
          {...register("phone", { required: true })}
        />
        {errors.phone && <span className="text-red-500 text-sm">Nomor telepon harus diisi</span>}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="service" className="after:content-['*'] after:text-red-500">Layanan yang Diminati </Label>
        <Select onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih layanan" />
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
        {errors.service && <span className="text-red-500 text-sm">Layanan harus diisi</span>}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="message" className="after:content-['*'] after:text-red-500">Deskripsi Proyek </Label>
        <Textarea
          id="message"
          placeholder="Deskripsikan proyek yang ingin Anda kerjakan bersama kami"
          className="min-h-[100px]"
          {...register("message", { required: true })}
        />
        {errors.message && <span className="text-red-500 text-sm">Deskripsi proyek harus diisi</span>}
      </div>
      <Button type="submit" size="lg" className="rounded-full flex items-center justify-center" disabled={isLoading}>
        {isLoading ? <><Loader2 className="size-4 animate-spin" /> Mengirim...</> : <>Kirim <Send className="size-4" /></>}
      </Button>
    </form>
  )
}

export default ContactForm
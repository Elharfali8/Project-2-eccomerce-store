import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"

export function FormInput({type, name}) {
    return <div className="flex flex-col md:flex-row items-center gap-2">
        <Input type={type} placeholder={name} name={name} className='placeholder:capitalize lg:text-lg ' />
        <Button className='w-full md:w-auto text-lg font-semibold'>Search</Button>
  </div>
}

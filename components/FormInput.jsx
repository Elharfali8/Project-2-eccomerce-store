import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Label } from "./ui/label"

export function FormInput({type, name, btn, value, onChange}) {
  return <div className="flex flex-col md:flex-row items-center gap-2">
    <div className="w-full">
    {!btn && <Label htmlFor={name} className="mb-1 capitalize lg:text-lg">
          {name}
        </Label>}
        <Input type={type} placeholder={name} name={name} value={value} onChange={onChange} className='placeholder:capitalize lg:text-lg ' />
        </div>
        {btn && <Button className='w-full md:w-auto text-lg font-semibold'>Search</Button>}
  </div>
}

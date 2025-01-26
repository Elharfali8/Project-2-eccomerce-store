'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from './ui/label';

const SelectInput = ({ name, data}) => {


    return (
      <div className="grid w-full items-center ">
        <Label htmlFor={name} className="mb-1 capitalize lg:text-lg">
          {name}
        </Label>
        <Select
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={'Select an option'} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.isArray(data) &&
                data.map((item, index) => (
                  <SelectItem key={item.id || index} value={item.title || item}>
                    {item.title || item}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  };
  
  

export default SelectInput;
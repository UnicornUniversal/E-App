import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectItemProps {
    label: string
    name: string
    value: string
    items: string[] | number[] | Record<string, string>[]
    placeholder: string 
    title: string
}

export function SelectDemo({ title, items, label, value, placeholder, name }: SelectItemProps) {
  return (
    <>
    <div  className="grid grid-cols-1">
    <h1 className="font-medium">{title}</h1>
    <Select name={name}>
      <SelectTrigger className="w-[180px]">
      <SelectValue  placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
                {items.map((item, index) => (
                  <SelectItem key={index} value={value}>{item.toString()}</SelectItem>
                ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
    </>
  )
}

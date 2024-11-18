import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import * as React from 'react'
import { IconType } from 'react-icons/lib'

export type SortOption = {
  id: string
  name: string
  icon: IconType
}

type SortListboxProps = {
  selected: SortOption
  setSelected: React.Dispatch<React.SetStateAction<SortOption>>
  options: SortOption[]
}

export default function SortListbox({ selected, setSelected, options }: SortListboxProps) {
  return (
    <div className="w-full max-w-[200px]">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={selected.name} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.id} value={option.name} className='cursor-pointer' onClick={() => setSelected(option)}>
              <div className="flex items-center gap-2">
                <option.icon className="size-4" />
                <span>{option.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

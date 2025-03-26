import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface FilterProps {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setExcludeEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  excludeEmpty: boolean;
}

export const FilterMain: React.FC<FilterProps> = ({ sortBy, setSortBy, excludeEmpty, setExcludeEmpty }) => {
  return (
    <div>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Add filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="title">Sort by title</SelectItem>
            <SelectItem value="id">Sort by data</SelectItem>
            <SelectItem value="countByQuestion">Sort by count question</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={String(excludeEmpty)} onValueChange={(value) => setExcludeEmpty(value === "true")}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Exclude empty" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Exclude Empty</SelectLabel>
            <SelectItem value="true">True</SelectItem>
            <SelectItem value="false">False</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

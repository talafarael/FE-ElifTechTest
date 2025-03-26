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
import { Card } from '@/components/ui/card';

export interface FilterProps {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setExcludeEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  excludeEmpty: boolean;
}

export const FilterMain: React.FC<FilterProps> = ({ sortBy, setSortBy, excludeEmpty, setExcludeEmpty }) => {
  return (
    <Card className="flex flex-col md:flex-row gap-4 p-4 bg-bg-secondary shadow-lg rounded-xl border border-gray-200">
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-full md:w-[200px] py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500">
          <SelectValue placeholder="Add filter" />
        </SelectTrigger>
        <SelectContent className=" border border-gray-200 shadow-md rounded-lg">
          <SelectGroup>
            <SelectLabel className="text-gray-700 font-semibold">Fruits</SelectLabel>
            <SelectItem value="title" className="">Sort by title</SelectItem>
            <SelectItem value="id" className="">Sort by data</SelectItem>
            <SelectItem value="countByQuestion" className="">Sort by count question</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={String(excludeEmpty)} onValueChange={(value) => setExcludeEmpty(value === "true")}>
        <SelectTrigger className="w-full md:w-[200px] py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500">
          <SelectValue placeholder="Exclude empty" />
        </SelectTrigger>
        <SelectContent className=" border border-gray-200 shadow-md rounded-lg">
          <SelectGroup>
            <SelectLabel className="text-gray-700 font-semibold">Exclude Empty</SelectLabel>
            <SelectItem value="true" className="hover:bg-gray-100">True</SelectItem>
            <SelectItem value="false" className="hover:bg-gray-100">False</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Card>
  );
};

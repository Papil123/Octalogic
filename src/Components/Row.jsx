import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Status from '../Components/ui/Status';
import ActionButton from '../Components/ui/ActionButton';

const Row = ({ obj }) => {
  return (
    <TableRow className="border-b border-gray-200 py-2">
      <TableCell className="text-center text-base font-normal">{obj.coursename}</TableCell>
      <TableCell className="text-center text-base font-normal">{obj.courseDescription}</TableCell>
      <TableCell className="text-center text-base font-normal">{obj.instructor}</TableCell>
      <TableCell className="text-center text-base font-normal">{obj.instrument}</TableCell>
      <TableCell className="text-center text-base font-normal">{obj.dayofweek}</TableCell>
      <TableCell className="text-center text-base font-normal">{obj.numberOfStudents}</TableCell>
      <TableCell className="text-center text-base font-normal">${obj.price}</TableCell>
      <TableCell className="text-center text-base font-normal">
        <Status ob={obj} />
      </TableCell>
      <TableCell className="text-center text-base font-normal">
        <button disabled={!obj.isactive}>
          <ActionButton ob={obj} />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default Row;

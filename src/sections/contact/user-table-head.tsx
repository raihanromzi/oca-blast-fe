import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from './utils';

// ----------------------------------------------------------------------

type UserTableHeadProps = {
  orderBy: string;
  order: 'asc' | 'desc';
  onSort: (id: string) => void;
  headLabel: Record<string, any>[];
};

export function UserTableHead({ order, onSort, orderBy, headLabel }: UserTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'center'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              width: 100,
              minWidth: headCell.minWidth,
              // Ensure consistent header height
              height: 56, // Set a fixed height for table header cells
              padding: '12px', // Ensure consistent padding
              fontWeight: 'bold', // Make the header text bold for clarity
              fontSize: '0.875rem', // Ensure consistent font size
            }}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

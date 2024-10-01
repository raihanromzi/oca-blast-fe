import { useCallback, useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// ----------------------------------------------------------------------

export type UserProps = {
  id: string;
  name: string;
  role: string;
  status: string;
  company: string;
  avatarUrl: string;
  isVerified: boolean;
};

export type CampaignProps = {
  id: string;
  campaignName: string;
  channel: string;
  contact: string;
  totalBroadcast: number;
  createdDate: string;
  broadcastDate: string;
  status: string;
};

type UserTableRowProps = {
  row: CampaignProps;
};

export function UserTableRow({ row }: UserTableRowProps) {
  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell component="th" scope="row">
          {row.campaignName}
        </TableCell>

        <TableCell align="center">{row.channel}</TableCell>

        <TableCell align="center">{row.contact}</TableCell>

        <TableCell align="center">{row.totalBroadcast}</TableCell>

        <TableCell align="center">{row.createdDate}</TableCell>

        <TableCell align="center">{row.broadcastDate}</TableCell>

        <TableCell align="center">{row.status}</TableCell>
      </TableRow>
    </>
  );
}

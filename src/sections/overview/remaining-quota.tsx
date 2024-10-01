import type { CardProps } from '@mui/material/Card';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { fShortenNumber } from 'src/utils/format-number';
import { varAlpha } from 'src/theme/styles';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: { value: string; label: string; total: number }[];
};

export function RemainingQuota({ title, subheader, list, sx, ...other }: Props) {
  return (
    <Card sx={sx} {...other}>
      <CardHeader title={title} subheader={subheader} />

      {/* Display all items in the list */}
      <Box display="grid" gap={2} gridTemplateColumns="1fr" sx={{ p: 3 }}>
        {list.map((quota) => (
          <Box
            key={quota.label}
            sx={(theme) => ({
              py: 2.5,
              display: 'flex',
              borderRadius: 1.5,
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
              gap: 1, // Add some space between elements
            })}
          >
            {/* Render top icon based on quota type */}
            {quota.value === 'whatsAppQuota' && (
              <Iconify icon="simple-icons:whatsapp" color="#25D366" width={32} />
            )}
            {quota.value === 'emailQuota' && (
              <Iconify icon="eva:email-fill" color="#1E90FF" width={32} />
            )}

            {/* Total Remaining Quota */}
            <Typography variant="h6" sx={{ mt: 1 }}>
              {fShortenNumber(quota.total)}
            </Typography>

            {/* Quota Label */}
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {quota.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

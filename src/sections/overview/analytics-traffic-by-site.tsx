import type { CardProps } from '@mui/material/Card';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  successRate: number; // Success rate in percentage
  totalSuccess: number; // Total number of successful messages
  quotas: { value: string; label: string; total: number }[]; // Quotas for the bottom boxes
};

export function SuccessMessage({
  title,
  subheader,
  successRate,
  totalSuccess,
  quotas,
  sx,
  ...other
}: Props) {
  return (
    <Card sx={sx} {...other}>
      <CardHeader title={title} subheader={subheader} />

      {/* WhatsApp Success Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 3,
          borderRadius: 2,
          mx: 2,
          mb: 3,
        }}
      >
        {/* Success Rate Circular Progress */}
        <Box sx={{ position: 'relative', display: 'inline-flex', mt: 2 }}>
          <CircularProgress
            variant="determinate"
            value={successRate}
            size={56}
            thickness={4}
            color="success"
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              {`${Math.round(successRate)}%`}
            </Typography>
          </Box>
        </Box>

        {/* Total Success */}
        <Typography variant="h4" sx={{ mt: 1 }}>
          {fShortenNumber(totalSuccess)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Success
        </Typography>
      </Box>

      {/* Bottom row with quotas */}
      <Box display="grid" gap={2} gridTemplateColumns="repeat(3, 1fr)" sx={{ px: 2, pb: 3 }}>
        {quotas.map((quota) => (
          <Box
            key={quota.label}
            sx={(theme) => ({
              py: 2.5,
              display: 'flex',
              borderRadius: 1.5,
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 1,
            })}
          >
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

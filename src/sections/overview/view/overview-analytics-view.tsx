import Grid from '@mui/material/Unstable_Grid2';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

// import { _posts, _tasks, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

// import { AnalyticsNews } from '../analytics-news';
// import { AnalyticsTasks } from '../analytics-tasks';
// import { AnalyticsCurrentVisits } from '../analytics-current-visits';
// import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
// import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
// import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { RemainingQuota } from '../remaining-quota';
import { SuccessMessage } from '../analytics-traffic-by-site';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
// import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      {/* <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome! 👋
      </Typography> */}

      {/* Banner slideshow inside Material-UI Card */}
      <Card sx={{ mb: 4, p: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="div" sx={{ mb: { xs: 3, md: 5 } }}>
          Hi, Welcome to OCA Dashboard! 👋
        </Typography>

        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
          style={{
            borderRadius: '10px', // Rounded corners for Swiper
            overflow: 'hidden', // Make sure content fits
          }}
        >
          <SwiperSlide>
            <Box
              component="img"
              src="https://utfs.io/f/PmkugTpD2YmUGLFvSkssKFc42nCOBNulDHbAtwvgaS96hVYU"
              alt="Banner 1"
              sx={{ width: 'auto', height: '100%' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component="img"
              src="https://utfs.io/f/PmkugTpD2YmUknWsAHvjRGfuEYPm9MwtWOpAcqUsI3rhFz02"
              alt="Banner 1"
              sx={{ width: 'auto', height: '100%' }}
            />
          </SwiperSlide>
        </Swiper>
      </Card>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={4}>
          <RemainingQuota
            title="Remaining Quota"
            list={[
              { value: 'whatsAppQuota', label: 'WhatsApp Quota', total: 260000 },
              { value: 'emailQuota', label: 'Email Quota', total: 130000 },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <SuccessMessage
            title="WhatsApp Success"
            successRate={60} // 60% success rate
            totalSuccess={76253} // 76,253 successful messages
            quotas={[
              { value: 'whatsAppQuota', label: 'Blasting', total: 84763 },
              { value: 'instantMessages', label: 'Instant Messages', total: 50496 },
              { value: 'schedulerMessages', label: 'Scheduler Messages', total: 34267 },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <SuccessMessage
            title="Email Success"
            successRate={80} // 60% success rate
            totalSuccess={3535} // 76,253 successful messages
            quotas={[
              { value: 'emailQuota', label: 'Blasting', total: 4321 },
              { value: 'instantMessages', label: 'Instant Messages', total: 13253 },
              { value: 'schedulerMessages', label: 'Scheduler Messages', total: 87123 },
            ]}
          />
        </Grid>

        {/* <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={2.6}
            total={714000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="New users"
            percent={-0.1}
            total={1352831}
            color="secondary"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Purchase orders"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Current visits"
            chart={{
              series: [
                { label: 'America', value: 3500 },
                { label: 'Asia', value: 2500 },
                { label: 'Europe', value: 1500 },
                { label: 'Africa', value: 500 },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Conversion rates"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Current subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}

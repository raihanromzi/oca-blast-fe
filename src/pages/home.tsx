import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ContactView } from 'src/sections/contact/view';
import { OverviewAnalyticsView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Dashboard | ${CONFIG.appName}`}</title>
        <meta name="description" content="This is OCA built by Team 35 Digistar" />
        <meta name="keywords" content="react,material,kit,application,dashboard,admin,template" />
      </Helmet>
      <OverviewAnalyticsView />
      <ContactView />
    </>
  );
}

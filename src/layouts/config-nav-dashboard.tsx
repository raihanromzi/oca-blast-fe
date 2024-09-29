import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: icon('ic-user'),
  },
  {
    title: 'Broadcast',
    path: '/broadcast',
    icon: icon('ic-blog'),
  },
  {
    title: 'Template',
    path: '/template',
    icon: icon('ic-blog'),
  },
  {
    title: 'Purchase',
    path: '/purchase',
    icon: icon('ic-cart'),
  },
];

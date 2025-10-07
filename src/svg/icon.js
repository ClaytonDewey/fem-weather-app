import {
  IconCheckmark,
  IconChevronDown,
  IconError,
  IconLoading,
  IconLogo,
  IconMoon,
  IconRetry,
  IconSearch,
  IconSun,
  IconUnits,
} from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'check':
      return <IconCheckmark />;
    case 'dropdown':
      return <IconChevronDown />;
    case 'error':
      return <IconError />;
    case 'loading':
      return <IconLoading />;
    case 'logo':
      return <IconLogo />;
    case 'moon':
      return <IconMoon />;
    case 'retry':
      return <IconRetry />;
    case 'search':
      return <IconSearch />;
    case 'sun':
      return <IconSun />;
    case 'units':
      return <IconUnits />;
    default:
      return <IconLogo />;
  }
};

export default Icon;

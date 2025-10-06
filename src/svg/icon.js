import { IconMoon, IconSun } from './index';

const Icon = ({ name }) => {
  switch (name) {
    case 'moon':
      return <IconMoon />;
    case 'sun':
      return <IconSun />;
    default:
      return <IconMoon />;
  }
};

export default Icon;

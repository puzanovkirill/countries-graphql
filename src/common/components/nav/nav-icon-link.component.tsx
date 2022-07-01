import { As, IconButton, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type TNavIconLink = {
  link: string;
  label: string;
  icon: As<any>;
};

function NavIconLink({ link, label, icon }: TNavIconLink) {
  return (
    <Link to={link}>
      <Tooltip label={label} hasArrow placement="right">
        <IconButton
          w="full"
          as={icon}
          variant="ghost"
          aria-label="Navigate to home page"
        />
      </Tooltip>
    </Link>
  );
}

export default NavIconLink;

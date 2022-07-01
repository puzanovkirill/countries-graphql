import {
  Icon,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';

function ColorModeSwitcher() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(Moon, Sun);
  return (
    <Tooltip label={`Switch to ${text} mode`} hasArrow>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<Icon as={SwitchIcon} w="6" h="6" />}
        aria-label={`Switch to ${text} mode`}
      />
    </Tooltip>
  );
}

export default ColorModeSwitcher;

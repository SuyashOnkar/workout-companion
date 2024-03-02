import { Box, Flex, Center, IconButton, useBreakpointValue } from '@chakra-ui/react';

import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const iconSize = useBreakpointValue({ base: 10, md: 20 });

  return (
    <Center>
      <Box
        p={4}
        my={5}
        h={{ base: '60px', md: '80px' }}
        pos="fixed"
        bottom="0"
        w={{ base: '100%', md: '2xl' }}
        bgColor={'gray.100'}>
        <Flex
          justifyContent="space-around"
          alignItems="center">
          <IconButton
            background="none"
            aria-label="home"
            w={iconSize}
            h={iconSize}
            as={Link}
            to="/"
            icon={<HomeIcon />}
          />

          <IconButton
            background="none"
            aria-label="history"
            w={iconSize}
            h={iconSize}
            as={Link}
            to="/history"
            icon={<HistoryIcon />}
          />

          <IconButton
            background="none"
            aria-label="workout"
            w={iconSize}
            h={iconSize}
            as={Link}
            to="/workout"
            icon={<FitnessCenterIcon />}
          />

          <IconButton
            background="none"
            aria-label="profile"
            w={iconSize}
            h={iconSize}
            as={Link}
            to="/profile"
            icon={<PersonOutlineIcon />}
          />
        </Flex>
      </Box>
    </Center>
  );
};

export default Navbar;

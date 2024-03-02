import {
  Box,
  Center,
  Card,
  Heading,
  useBreakpointValue,
  Text,
  HStack,
  Flex,
  Icon,
} from '@chakra-ui/react';
import Streak from '../components/Streak';
import { Whatshot } from '@mui/icons-material';
import BodyStats from '../components/BodyStats';

function HomePage() {
  const boxWidth = useBreakpointValue({ base: '100%', md: '600px' });

  return (
    <Center>
      <Box w={boxWidth}>
        <Card
          bgColor="gray.100"
          variant="outline"
          p={10}>
          <Heading
            as="h2"
            fontSize={{ base: '24px', md: '30px' }}
            letterSpacing={1.5}
            fontWeight={900}>
            Welcome back, Suyash !
          </Heading>
        </Card>
        <Card p={10}>
          <Flex
            gap={20}
            alignItems={'center'}>
            <Streak />
            <HStack>
              <Text>7</Text>
              <Icon viewBox="0 0 400 400">
                <Whatshot fontSize="large" />
              </Icon>
            </HStack>
          </Flex>
        </Card>

        <BodyStats />
      </Box>
    </Center>
  );
}

export default HomePage;

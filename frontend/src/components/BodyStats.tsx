import React from 'react';
import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Center,
} from '@chakra-ui/react';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

const BodyStats = () => {
  // Hardcoded stats
  const weight = 150; // lbs
  const benchPress = 180; // lbs
  const squat = 220; // lbs
  const deadlift = 270; // lbs

  const goalBenchPress = weight * 1.5;
  const goalSquat = weight * 2;
  const goalDeadlift = weight * 2.5;

  return (
    <Card
      bgColor="gray.100"
      variant="outline"
      p={10}
      h={400}>
      <Center>
        <Heading
          as="h2"
          fontSize={{ base: '24px', md: '30px' }}
          letterSpacing={1.5}
          fontWeight={900}>
          Body Stats
        </Heading>
      </Center>
      <CardBody>
        <Flex
          justifyContent="space-between"
          mb={4}>
          <Stat>
            <StatLabel>Weight</StatLabel>
            <StatNumber>{weight}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Height</StatLabel>
            <StatNumber>N/A</StatNumber>
          </Stat>
        </Flex>
        <Flex
          justifyContent="space-between"
          mb={4}>
          <Stat>
            <StatLabel>Bench Press</StatLabel>
            <StatNumber>{benchPress}</StatNumber>
            <StatHelpText>
              {benchPress >= goalBenchPress ? (
                <Text color="green.500">
                  <Icon
                    as={CheckIcon}
                    mr={1}
                  />{' '}
                  Goal Reached!
                </Text>
              ) : (
                <Text color="red.500">
                  <Icon
                    as={ErrorIcon}
                    mr={1}
                  />{' '}
                  Aim for {goalBenchPress} lbs
                </Text>
              )}
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Squat</StatLabel>
            <StatNumber>{squat}</StatNumber>
            <StatHelpText>
              {squat >= goalSquat ? (
                <Text color="green.500">
                  <Icon
                    as={CheckIcon}
                    mr={1}
                  />{' '}
                  Goal Reached!
                </Text>
              ) : (
                <Text color="red.500">
                  <Icon
                    as={ErrorIcon}
                    mr={1}
                  />{' '}
                  Aim for {goalSquat} lbs
                </Text>
              )}
            </StatHelpText>
          </Stat>
        </Flex>
        <Flex justifyContent="space-between">
          <Stat>
            <StatLabel>Deadlift</StatLabel>
            <StatNumber>{deadlift}</StatNumber>
            <StatHelpText>
              {deadlift >= goalDeadlift ? (
                <Text color="green.500">
                  <Icon
                    as={CheckIcon}
                    mr={1}
                  />{' '}
                  Goal Reached!
                </Text>
              ) : (
                <Text color="red.500">
                  <Icon
                    as={ErrorIcon}
                    mr={1}
                  />{' '}
                  Aim for {goalDeadlift} lbs
                </Text>
              )}
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Bodyweight Goal</StatLabel>
            <StatNumber>N/A</StatNumber>
          </Stat>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BodyStats;

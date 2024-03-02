import { useState, useEffect } from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { CircleOutlined } from '@mui/icons-material';

function Streak() {
  const [streak, setStreak] = useState(0); // Initial streak state

  // Fetches streak data from local storage (or an API if needed)
  useEffect(() => {
    const storedStreak = localStorage.getItem('streak');
    if (storedStreak) {
      setStreak(parseInt(storedStreak));
    }
  }, []);

  // Function to handle day click
  const handleDayClick = (dayIndex: any) => {
    // Update streak based on click (implement your logic here)
    // For now, toggling the day's status is simulated

    setStreak((prevStreak) => {
      const newStreak = prevStreak === 7 ? 0 : prevStreak + 1;
      return newStreak;
    });
  };

  return (
    <Box
      rounded="md"
      w={'100%'}>
      <Flex
        justifyContent="space-around"
        mt={2}>
        {[...Array(7)].map((_, dayIndex) => (
          <Box
            key={dayIndex}
            onClick={() => handleDayClick(dayIndex)}>
            {dayIndex < streak ? (
              <Icon
                as={CheckIcon}
                color="green.500"
              />
            ) : dayIndex === streak ? (
              <CircleOutlined
                viewBox="0 0 24 24"
                fill="transparent"
                stroke="black"
              />
            ) : (
              <CloseIcon />
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Streak;

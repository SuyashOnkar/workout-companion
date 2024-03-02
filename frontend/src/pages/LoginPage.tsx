import { Box, HStack, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { Login } from '../components/Login';
import { useState } from 'react';
import { Signup } from '../components/Signup';

export default function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(false);

  const handleToggleForm = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <Box>
      <VStack
        my={20}
        mx={20}>
        {isNewUser ? <Signup /> : <Login />}
        <HStack>
          <Text>{isNewUser ? 'Already have an account?' : 'New here?'}</Text>
          <Link
            color="#0969da"
            onClick={handleToggleForm}
            cursor="pointer">
            {isNewUser ? 'Login' : 'Create Account'}
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}

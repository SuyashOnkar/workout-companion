import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      console.log('Login successfull');
      const { accessToken } = response.data;

      login(accessToken);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Login failed');
      toast({
        title: 'Invalid Credentials',
        description: 'Please recheck your email or password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box>
        <Center>
          <VStack>
            <Heading
              as="h1"
              size="lg"
              fontWeight={700}
              color="#28231d"
              paddingBottom={3}>
              User Login
            </Heading>
            <Card
              bg="#f6f8fa"
              variant="outline"
              borderColor="#d8dee4"
              w={[250, 400]}
              my={10}
              px={3}
              py={2}>
              <CardBody>
                <Stack spacing="4">
                  <FormControl>
                    <FormLabel size="sm">Email address</FormLabel>
                    <Input
                      type="text"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                      p={3}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel size="sm">Password</FormLabel>
                    <Input
                      type="password"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                      p={3}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Button
                    bg="#2da44e"
                    color="white"
                    size="sm"
                    _hover={{ bg: '#2c974b' }}
                    _active={{ bg: '#298e46' }}
                    onClick={handleLogin}>
                    Sign in
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </VStack>
        </Center>
      </Box>
    </>
  );
}

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
} from '@chakra-ui/react';

export function Signup() {
  return (
    <Box>
      <Center>
        <VStack>
          <Heading
            as="h1"
            size="lg"
            fontWeight={700}
            color="#28231d"
            paddingBottom={3}>
            User Signup
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
              <form>
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
                    />
                  </FormControl>

                  <Button
                    bg="#2da44e"
                    color="white"
                    size="sm"
                    _hover={{ bg: '#2c974b' }}
                    _active={{ bg: '#298e46' }}>
                    Sign up
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </VStack>
      </Center>
    </Box>
  );
}

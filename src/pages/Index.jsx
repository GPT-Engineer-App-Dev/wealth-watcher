import { Box, Container, Flex, Heading, Text, VStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Financial Times
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <Box flex="3">
          <VStack align="stretch" spacing={4}>
            <Box>
              <Heading as="h2" size="lg">Headline 1</Heading>
              <Text>Summary of the first headline article. This is a brief overview of the main points of the article.</Text>
            </Box>
            <Divider />
            <Box>
              <Heading as="h2" size="lg">Headline 2</Heading>
              <Text>Summary of the second headline article. This is a brief overview of the main points of the article.</Text>
            </Box>
            <Divider />
            <Box>
              <Heading as="h2" size="lg">Headline 3</Heading>
              <Text>Summary of the third headline article. This is a brief overview of the main points of the article.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <Text>Additional content or advertisements can go here.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
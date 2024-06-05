import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  const trendingArticles = [
    "Trending Article 1",
    "Trending Article 2",
    "Trending Article 3",
    "Trending Article 4",
  ];

  return (
    <Box bg="gray.100" p={4} borderRadius="md">
      <Heading size="md" mb={4}>Trending News</Heading>
      <VStack align="start" spacing={2}>
        {trendingArticles.map((article, index) => (
          <Text key={index}>{article}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
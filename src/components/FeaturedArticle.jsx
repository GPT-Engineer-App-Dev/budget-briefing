import { Box, Image, Text, Heading } from "@chakra-ui/react";

const FeaturedArticle = () => {
  return (
    <Box mb={8}>
      <Image src="https://via.placeholder.com/800x400" alt="Featured Article" />
      <Heading mt={4} size="lg">Featured Article Title</Heading>
      <Text mt={2}>This is a brief summary of the featured article. It provides an overview of the main points and entices readers to click through to read the full article.</Text>
    </Box>
  );
};

export default FeaturedArticle;
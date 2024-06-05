import { SimpleGrid, Box, Image, Text, Heading } from "@chakra-ui/react";

const ArticleGrid = () => {
  const articles = [
    { title: "Article 1", summary: "Summary of article 1", image: "https://via.placeholder.com/400x200" },
    { title: "Article 2", summary: "Summary of article 2", image: "https://via.placeholder.com/400x200" },
    { title: "Article 3", summary: "Summary of article 3", image: "https://via.placeholder.com/400x200" },
    { title: "Article 4", summary: "Summary of article 4", image: "https://via.placeholder.com/400x200" },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {articles.map((article, index) => (
        <Box key={index}>
          <Image src={article.image} alt={article.title} />
          <Heading mt={4} size="md">{article.title}</Heading>
          <Text mt={2}>{article.summary}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ArticleGrid;
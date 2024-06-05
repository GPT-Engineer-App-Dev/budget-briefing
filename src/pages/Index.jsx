import { Container, Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleGrid from "../components/ArticleGrid";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" mt={8}>
        <FeaturedArticle />
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          <Box flex="3">
            <ArticleGrid />
          </Box>
          <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
            <Sidebar />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;
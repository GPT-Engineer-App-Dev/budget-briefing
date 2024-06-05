import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex justify="center">
        <Link px={2} href="/contact">Contact</Link>
        <Link px={2} href="/privacy">Privacy Policy</Link>
        <Link px={2} href="/terms">Terms of Service</Link>
      </Flex>
      <Text textAlign="center" mt={2}>&copy; 2023 Financial Times. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
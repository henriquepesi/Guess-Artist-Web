import React from "react";

import { Container, Box, BoxTop, BoxContent, Title } from "./styles";

export default function Block({ titulo, content }) {
  return (
    <Container>
      <Box>
        <BoxTop>
          <Title>{titulo}</Title>
        </BoxTop>
        <BoxContent>{content}</BoxContent>
      </Box>
    </Container>
  );
}

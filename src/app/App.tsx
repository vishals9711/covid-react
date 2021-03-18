import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import { PageLayout } from '../pageLayout/PageLayout';
import './App.scss';
import { ColorModeSwitcher } from './ColorSwitcher/ColorSwitcher';
function App(): JSX.Element {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Box width={"40px"} height={"40px"} float={"right"} p="1" mr="4"><ColorModeSwitcher justifySelf="flex-end" /></Box>
          <Grid minH="100vh" p={3}>
            <PageLayout />
          </Grid>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;

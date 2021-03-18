import { Box, Flex, Grid, HStack, StackDivider, VStack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Card } from '../app/components/card/Card';
import LineChart from '../app/LineChart/LineChart';
import { getGlobalCount, getGlobalCountDateWise, IGlobalCountDateResponse } from '../services/covidapi';
import { returnLastDays } from '../utils/utils';
import './PageLayout.scss';
export const PageLayout = (): JSX.Element => {

  const [globalCount, setGlobalCount] = useState<{ confirmed: number, deaths: number, recovered: number } | null>(null);

  const [dateWiseData, setDateWiseData] = useState<{
    labels: string[],
    confirmed: number[],
    deaths: number[],
    recovered: number[]
  } | null>(null);

  useEffect(() => {
    getGlobalCount().then((response) => {
      const { result } = response.data
      setGlobalCount(result);
    });
    getGlobalCountDateWise().then(response => {
      const { data } = response;
      setDateWiseData(returnLastDays(data, 20));
    })
  }, []);

  return (
    <>
      <VStack divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch">
        <Flex justifyContent="center">
          {globalCount &&
            <Box p="6" boxShadow="base" rounded="md" height="240px">
              <HStack spacing="16" justify="center">
                <Box
                  mb="4"
                  fontWeight="semibold"
                  as="h1"
                  lineHeight="tall"
                  fontSize="24px"
                >
                  {"World"}
                </Box>
              </HStack>
              <Grid
                spacing="8"
                divider={<StackDivider borderColor="gray.200" />}
                templateColumns="repeat(3, 1fr)" gap={6}
              >
                <Card label={"Confirmed"} count={globalCount.confirmed} />
                <Card label={"Recovered"} count={globalCount.deaths} />
                <Card label={"Deaths"} count={globalCount.recovered} />
              </Grid >
            </Box>
          }
        </Flex>
        {/* <HStack divider={<StackDivider borderColor="gray.200" />} spacing={4}
          justify="center">
          <Box boxShadow="base" p="6" rounded="md" borderWidth="1px" borderRadius="lg"><LineChart /></Box>
          <Box boxShadow="base" p="6" rounded="md" borderWidth="1px" borderRadius="lg"><LineChart /></Box>
          <Box boxShadow="base" p="6" rounded="md" borderWidth="1px" borderRadius="lg"><LineChart /></Box>
        </HStack> */}
        <Tabs variant="line" colorScheme="blue" align="center" isFitted >
          <TabList>
            <Tab>Confirmed</Tab>
            <Tab>Deaths</Tab>
            <Tab>Recovered</Tab>
          </TabList>

          {dateWiseData && <TabPanels>
            <TabPanel>
              <LineChart label={dateWiseData.labels} data={dateWiseData.confirmed} chartLabel="Confirmed" />
            </TabPanel>
            <TabPanel>
              <LineChart label={dateWiseData.labels} data={dateWiseData.deaths} chartLabel="Deaths" />
            </TabPanel>
            <TabPanel>
              <LineChart label={dateWiseData.labels} data={dateWiseData.recovered} chartLabel="Recovered" />
            </TabPanel>
          </TabPanels>}
        </Tabs>
      </VStack>
    </>
  );
};

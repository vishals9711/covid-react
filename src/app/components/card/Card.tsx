import {
  Box,
  Stat,

  StatLabel,
  StatNumber
} from '@chakra-ui/react';
import React from 'react';

interface ICardProps {
  label: string;
  count: number;
}

export const Card = ({ count, label }: ICardProps): JSX.Element => {
  return (
    <Box boxShadow="base" p="6" rounded="md" borderWidth="1px" borderRadius="lg">
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{count}</StatNumber>
      </Stat>
    </Box>
  );
};

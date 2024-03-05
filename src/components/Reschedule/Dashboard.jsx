import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useApollo } from '../../hooks/useApollo';
import { useQuery } from '@apollo/client';
import { queries } from '../../queries';

export const Dashboard = () => {
  const { data, loading, error } = useQuery(queries.GET_SCHEDULED_AUCTIONS);
  console.log(data, loading, error);
  return (
    <Flex>
      <h1>Dashboard</h1>
    </Flex>
  );
};

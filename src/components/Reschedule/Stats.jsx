import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChartIcon, RocketIcon, PersonIcon } from '@radix-ui/react-icons';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@apollo/client';
import { queries, keymaps } from '../../queries';
import { normalizeGraphqlResponse } from '@/lib/utils';
import { USERS } from '../../constants';

const Stats = ({ data }) => {
  const {
    data: recentlySoldData,
    loading: recentlySoldLoading,
    error: recentlySoldError,
  } = useQuery(queries.GET_RECENTLY_SOLD_AUCTIONS);
  const recentlySoldNormalizedData = useMemo(() => {
    if (recentlySoldData && !recentlySoldError && !recentlySoldLoading) {
      return normalizeGraphqlResponse({
        data: recentlySoldData,
        keymap: keymaps.GET_RECENTLY_SOLD_AUCTIONS,
      });
    } else {
      return [];
    }
  }, [recentlySoldData]);
  const isLoading = !data;
  const totalExpired = useMemo(() => {
    if (data) {
      return data?.filter((item) => item.expired?.value).length || 0;
    }
  }, [data]);

  const calculateTotalProfitPotential = () =>
    Array.isArray(data)
      ? data
        .reduce((totalProfit, item) => {
          const reservePrice = item?.reservePrice?.value;
          /**
           * If the reservePrice is not a string of 9s, then calculate the profit as 10% of the reservePrice.
           * This is because they can't seem to decide on a standard for when the reservePrice is unknown.
           * Sometimes it's 8 9s, sometimes it's 9 9s, sometimes it's 10 9s. Completely arbitrary.
           *
           * This is a great example of a code smell. This code is trying to account for a business rule
           * that is not well defined, but what can I do about it, lol.
           */
          if (reservePrice && !/^9+$/.test(reservePrice.toString())) {
            const numericValue = Number(reservePrice) || 0;
            const profit = 0.1 * numericValue;
            return totalProfit + profit;
          }
          return totalProfit;
        }, 0)
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : '$0';

  const calculateListingCountPerAssignedToId = () => {
    if (recentlySoldNormalizedData) {
      const listingCountPerAssignedToId = recentlySoldNormalizedData.reduce((acc, item) => {
        const assignedToId = USERS[item?.assignedTo?.value] || item?.assignedTo?.value;
        if (assignedToId) {
          if (!acc[assignedToId]) {
            acc[assignedToId] = 0;
          }
          acc[assignedToId]++;
        }
        return acc;
      }, {});
      return listingCountPerAssignedToId;
    }
  };

  const totalProfitPotential = useMemo(() => calculateTotalProfitPotential(), [data]);
  const listingCountPerAssignedToId = useMemo(
    () => calculateListingCountPerAssignedToId(),
    [recentlySoldNormalizedData],
  );

  return (
    <div className='dash-widgets pt-6 pl-4 pr-4 pb-6 flex [text-align-last:justify] bg-primary'>
      {isLoading ||
        (data?.length === 0 ? (
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 tracking-tight'>
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
          </div>
        ) : (
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 tracking-tight w-full'>
            <Card>
              <CardHeader>
                <CardTitle className='text-sm font-medium flex justify-between'>
                  Listings <BarChartIcon className='text-secondary-accent/50' />
                </CardTitle>
              </CardHeader>
              <CardContent className='text-2xl font-bold'>{data.length}</CardContent>
              <CardFooter className='text-xs text-muted-foreground'>{totalExpired} expired</CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className='text-sm font-medium flex justify-between'>
                  Profit Potential <RocketIcon className='text-secondary-accent/50' />
                </CardTitle>
              </CardHeader>
              <CardContent className='text-2xl font-bold'>{totalProfitPotential}</CardContent>
              <CardFooter className='text-xs text-muted-foreground'>10% per Reserve</CardFooter>
            </Card>
            {/*
            <Card>
              <CardHeader>
                <CardTitle className='text-sm font-medium flex justify-between'>
                  Recently Sold <BarChartIcon className='text-secondary-accent/50' />
                </CardTitle>
              </CardHeader>
              <CardContent className='text-2xl font-bold'>{recentlySoldNormalizedData?.length}</CardContent>
              <CardFooter className='text-xs text-muted-foreground'>Last 30 days</CardFooter>
            </Card>
            */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-medium flex justify-between'>
                  Recently Sold
                  <PersonIcon className='text-secondary-accent/50' />
                </CardTitle>
              </CardHeader>
              <CardContent>
                {Object.entries(listingCountPerAssignedToId || {}).map(([key, value]) => (
                  <div className='text-xs' key={key}>
                    {key}: {value}
                  </div>
                ))}
              </CardContent>

              <CardFooter className='text-xs text-muted-foreground'>
                Last {recentlySoldNormalizedData?.length}
              </CardFooter>
            </Card>
          </div>
        ))}
    </div>
  );
};
export { Stats };

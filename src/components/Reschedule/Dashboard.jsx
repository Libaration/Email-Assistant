import { useQuery } from '@apollo/client';
import React, { useCallback, useMemo } from 'react';
import { queries, keymaps } from '../../queries';
import { DataTable } from '../Reschedule/DataTable';
import { columns } from './columns';
import { useSalesforce } from '../../hooks/useSalesforce';
import { Button } from '@/components/ui/button';
import { normalizeGraphqlResponse } from '@/lib/utils';
import { BarChartIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const Dashboard = () => {
  useSalesforce();
  const { data, loading, error } = useQuery(queries.GET_SCHEDULED_AUCTIONS);
  const normalizedData = useCallback(() => {
    if (data) {
      return normalizeGraphqlResponse({
        data,
        keymap: keymaps.GET_SCHEDULED_AUCTIONS,
      });
    } else {
      return [];
    }
  }, [data]);
  const totalExpired = useMemo(() => {
    if (normalizedData()) {
      console.log(normalizedData());
      return normalizedData().filter((item) => item.expired.value).length;
    }
    return 0;
  }, [normalizedData]);

  return (
    <div className='ml-6 mt-6 flex flex-col'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 tracking-tight'>
        {(loading && !error) || normalizedData.length > 0 ? (
          <>
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
          </>
        ) : (
          <>
            <Card>
              <CardHeader>
                <CardTitle className='text-sm font-medium flex justify-between'>
                  Listings <BarChartIcon className='text-secondary-accent/50' />
                </CardTitle>
              </CardHeader>
              <CardContent className='text-2xl font-bold'>{normalizedData().length}</CardContent>
              <CardFooter className='text-xs text-muted-foreground'>{totalExpired} expired</CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </>
        )}
      </div>
      <h1>Dashboard</h1>
      <p>Dashboard content</p>
      <div className='container mx-auto py-10'>
        <h1 className='text-3xl font-bold mb-8'>Reschedule Auctions</h1>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && data && <DataTable columns={columns} data={normalizedData()} />}
      </div>
      {error && (
        <div className='text-center'>
          <h1>Seeing this error often? Try hard resetting by clicking the button below.</h1>
          <Button
            onClick={() => {
              localStorage.clear();
              window.electronAPI?.restartApp();
            }}
          >
            Refresh
          </Button>
        </div>
      )}
    </div>
  );
};

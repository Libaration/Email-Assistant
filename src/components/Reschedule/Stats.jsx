import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChartIcon } from '@radix-ui/react-icons';
import { Skeleton } from '@/components/ui/skeleton';

const Stats = ({ data }) => {
  const isLoading = !data;
  const totalExpired = useMemo(() => {
    if (data) {
      return data?.filter((item) => item.expired?.value).length || 0;
    }
  }, [data]);

  return (
    <div className='dash-widgets pt-6 pl-2 pr-2 pb-6'>
      {isLoading ||
        (data?.length === 0 ? (
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 tracking-tight'>
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
            <Skeleton className='rounded-xl shadow w-[300px] h-[150px]' />
          </div>
        ) : (
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 tracking-tight'>
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
          </div>
        ))}
    </div>
  );
};
export { Stats };

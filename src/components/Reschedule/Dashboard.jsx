import { Button } from '@/components/ui/button';
import { normalizeGraphqlResponse } from '@/lib/utils';
import { useQuery } from '@apollo/client';
import { useMemo, Suspense, lazy, useCallback } from 'react';
import { useSalesforce } from '../../hooks/useSalesforce';
import { keymaps, queries } from '../../queries';
import { DataTable } from '../Reschedule/DataTable';
import { columns } from './columns';
import { Skeleton } from '@/components/ui/skeleton';

export const Dashboard = () => {
  useSalesforce();
  const { data, loading, error } = useQuery(queries.GET_SCHEDULED_AUCTIONS);
  const normalizedData = useMemo(() => {
    if (data && !error && !loading) {
      return normalizeGraphqlResponse({
        data,
        keymap: keymaps.GET_SCHEDULED_AUCTIONS,
      });
    } else {
      return [];
    }
  }, [data]);

  const StatsFallback = useCallback(() => {
    return (
      <div className='bg-primary/40'>
        <div className='pl-6 pt-6 pr-6 pb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 tracking-tight'>
          <Skeleton className='rounded-xl shadow w-full h-[150px]' />
          <Skeleton className='rounded-xl shadow w-full h-[150px]' />
          <Skeleton className='rounded-xl shadow w-full h-[150px]' />
        </div>
      </div>
    );
  }, []);

  const Stats = useMemo(() => {
    if (!error) {
      return lazy(() => import('./Stats'));
    }
    return () => <StatsFallback />;
  }, [error]);

  return (
    <div className='mt-6'>
      {!error && (
        <Suspense
          fallback={<StatsFallback />}
        >
          <Stats data={normalizedData} />
        </Suspense>
      )}
      <div className='ml-6 mt-6 flex flex-col no-drag'>
        <div className='container mx-auto py-10'>
          <h1 className='text-3xl font-bold mb-8'>Reschedule Auctions</h1>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {!loading && !error && data && normalizedData.length > 0 && (
            <DataTable columns={columns} data={normalizedData} />
          )}
        </div>
        {error && (
          <div className='text-center no-drag'>
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
    </div>
  );
};

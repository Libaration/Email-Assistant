import { useQuery } from '@apollo/client';
import React, { useCallback, useMemo } from 'react';
import { queries, keymaps } from '../../queries';
import { DataTable } from '../Reschedule/DataTable';
import { columns } from './columns';
import { useSalesforce } from '../../hooks/useSalesforce';
import { Button } from '@/components/ui/button';
import { normalizeGraphqlResponse } from '@/lib/utils';
import { Stats } from './Stats';
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

  return (
    <>
      {loading || error ? '' : <Stats data={normalizedData} />}
      <div className='ml-6 mt-6 flex flex-col'>
        <h1>Dashboard</h1> <p> Dashboard; content</p>
        <div className='container mx-auto py-10'>
          <h1 className='text-3xl font-bold mb-8'>Reschedule Auctions</h1>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {!loading && !error && data && normalizedData.length > 0 && (
            <DataTable columns={columns} data={normalizedData} />
          )}
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
    </>
  );
};

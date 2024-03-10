import { useQuery } from "@apollo/client";
import React, { Suspense, useEffect } from "react";
import { queries, keymaps } from "../../queries";
import { DataTable } from "../Reschedule/DataTable";
import { columns } from "./columns";
import { useSalesforce } from "../../hooks/useSalesforce";
import { Button } from "@/components/ui/button";
import { normalizeGraphqlResponse } from "@/lib/utils";

export const Dashboard = () => {
  const { refreshToken } = useSalesforce();
  const { data, loading, error } = useQuery(queries.GET_SCHEDULED_AUCTIONS);
  const normalizedData = normalizeGraphqlResponse({
    data,
    keymap: keymaps.GET_SCHEDULED_AUCTIONS,
  });

  useEffect(() => {
    if (data) {
      console.log('normalizedData');
      console.log(normalizedData);
    }
  }, [data, normalizedData]);

  // const data = [
  //   {
  //     id: "728ed52f",
  //     amout: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   {
  //     id: "728ed52f",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  // ];
  // const loading = false;
  // const error = false;

  return (
    <div className="ml-6 mt-6 flex flex-col">
      <h1>Dashboard</h1>
      <p>Dashboard content</p>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Reschedule Auctions</h1>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && data && (
          <DataTable columns={columns} data={data} />
        )}
      </div>
      {error && (
        <div className="text-center">
          <h1>
            Seeing this error often? Try hard resetting by clicking the button
            below.
          </h1>
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

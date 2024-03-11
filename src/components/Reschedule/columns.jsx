import moment from "moment";
const expiredColor = "text-yellow-100";

export const columns = [
  {
    accessorKey: "street",
    header: "Street",
    cell: ({ row }) => (
      <div className={row.original.expired.value && expiredColor}>
        {row.original.street}
      </div>
    ),
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ row }) => (
      <div className={row.original.expired.value && expiredColor}>
        {row.original.city}
      </div>
    ),
  },
  {
    accessorKey: "state",
    header: "State",
    cell: ({ row }) => (
      <div className={row.original.expired.value && expiredColor}>
        {row.original.state}
      </div>
    ),
  },
  {
    accessorKey: "zipcode",
    header: "Zip",
    cell: ({ row }) => (
      <div className={row.original.expired.value && expiredColor}>
        {row.original.zipcode}
      </div>
    ),
  },
  {
    accessorKey: "expired.value",
    header: "Expired",
    cell: ({ row }) => (
      <div className={row.original.expired.value ? expiredColor : ""}>
        {row.original.expired.value ? "Yes" : "No"}
      </div>
    ),
  },
  {
    accessorKey: "previousAuctions.totalCount",
    header: "Prev Listings",
    cell: ({ row }) => (
      <div className={row.original.expired.value && expiredColor}>
        {row.original.previousAuctions.totalCount}
      </div>
    ),
  },
  {
    accessorKey: "expirationDate",
    header: "Expires In",
    cell: ({ row }) => {
      const expirationDate = moment(
        row.original.expirationDate.value,
        "YYYY-MM-DD",
      ).endOf("day");
      const yesterday = moment().subtract(1, "days").startOf("day");
      const daysRemaining = expirationDate.diff(yesterday, "days");

      // Calculate color intensity based on remaining days, starting dynamic coloring after a week
      const colorIntensity =
        daysRemaining > 7
          ? 0
          : Math.max(
            0,
            Math.min(100, Math.floor((7 - daysRemaining) * (100 / 7))),
          );

      const textColor =
        daysRemaining > 7
          ? ""
          : `rgb(255, ${255 - colorIntensity + 150}, ${255 - colorIntensity})`; // Dynamic color for days, no color for anything past a week, and maintain red for "Expired"

      return (
        <div
          style={{ color: daysRemaining > 0 ? textColor : "rgb(252 165 165)" }}
        >
          {daysRemaining > 0 ? `${daysRemaining} days` : "Expired"}
        </div>
      );
    },
  },

  {
    accessorKey: "status.value",
    header: "Status",
    cell: ({ row }) => {
      const expired = row.original.expired.value;
      const status = expired ? "Waiting" : row.original.status.value;
      return <div className={expired && expiredColor}>{status}</div>;
    },
  },
];

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CaretSortIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import moment from 'moment';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Redirect, Link } from 'react-router-dom';

const expiredColor = 'text-yellow-100';

export const columns = [
  {
    accessorKey: 'street',
    header: 'Street',
    cell: ({ row }) => (
      <div className={row.original.expired.value ? expiredColor : undefined}>
        {row.original.street.replace(/\.$/, ' ')}
      </div>
    ),
  },
  {
    accessorKey: 'city',
    header: 'City',
    cell: ({ row }) => <div className={row.original.expired.value ? expiredColor : undefined}>{row.original.city}</div>,
  },
  {
    accessorKey: 'state',
    header: 'State',
    cell: ({ row }) => (
      <div className={row.original.expired.value ? expiredColor : undefined}>{row.original.state}</div>
    ),
  },
  {
    accessorKey: 'zipcode',
    header: 'Zip',
    cell: ({ row }) => (
      <div className={row.original.expired.value ? expiredColor : undefined}>{row.original.zipcode}</div>
    ),
  },
  {
    accessorKey: 'expired.value',
    header: 'Expired',
    cell: ({ row }) => (
      <div className={row.original.expired.value ? expiredColor : ''}>{row.original.expired.value ? 'Yes' : 'No'}</div>
    ),
  },
  {
    accessorKey: 'previousAuctions.totalCount',
    header: 'Prev Listings',
    cell: ({ row }) => (
      <div className={row.original.expired.value ? expiredColor : undefined}>
        {row.original.previousAuctions.totalCount}
      </div>
    ),
  },
  {
    accessorKey: 'expirationDate',
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span>Expires In</span>
          <CaretSortIcon className='w-4 h-4 ml-1' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const expirationDate = moment(row.original.expirationDate.value, 'YYYY-MM-DD').endOf('day');
      const yesterday = moment().subtract(1, 'days').startOf('day');
      const daysRemaining = expirationDate.diff(yesterday, 'days');

      // Calculate color intensity based on remaining days, starting dynamic coloring after 60 days
      const colorIntensity =
        daysRemaining > 30 ? 0 : Math.max(0, Math.min(100, Math.floor(((30 - daysRemaining) / 30) * 100)));

      const textColor =
        daysRemaining > 30 ? undefined : `rgb(255, ${255 - colorIntensity + 150}, ${255 - colorIntensity})`; // Dynamic color for days, no color for anything past 60 days, and maintain red for "Expired"

      return (
        <div
          style={{
            color: daysRemaining > 0 ? textColor : 'rgb(252, 165, 165)',
          }}
        >
          {daysRemaining > 0 ? `${daysRemaining} days` : 'Expired'}
        </div>
      );
    },
  },

  {
    accessorKey: 'status.value',
    header: 'Status',
    cell: ({ row }) => {
      const expired = row.original.expired.value;
      const status = expired ? 'Waiting' : row.original.status.value;
      return <div className={expired ? expiredColor : undefined}>{status}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const listing = row.original;

      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className='sr-only'>Open menu</span>
              <DotsVerticalIcon className='h-4 w-4 text-secondary-accent' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='dark bg-primary'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <AlertDialogTrigger>
                <DropdownMenuItem>Reschedule</DropdownMenuItem>
              </AlertDialogTrigger>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Seller Details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Warning! This feature is in beta.</AlertDialogTitle>
              <AlertDialogDescription>
                Rescheduling an auction will remove it from the schedule and create a new auction with the same details.
                This feature is in beta. Use with caution and verify the new auction details before rescheduling.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                <Link to={`/preview/${listing.Id}`}>Continue</Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    },
  },
];

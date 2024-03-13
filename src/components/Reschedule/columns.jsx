import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { CaretSortIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import moment from 'moment';
import { Alert } from './Alert';

const expiredColor = 'text-yellow-100';

export const columns = [
  {
    accessorKey: 'street',
    header: 'Street',
    cell: ({ row }) => (
      <div className={row.original.expired.value && expiredColor}>{row.original.street.replace(/\.$/, ' ')}</div>
    ),
  },
  {
    accessorKey: 'city',
    header: 'City',
    cell: ({ row }) => <div className={row.original.expired.value && expiredColor}>{row.original.city}</div>,
  },
  {
    accessorKey: 'state',
    header: 'State',
    cell: ({ row }) => <div className={row.original.expired.value && expiredColor}>{row.original.state}</div>,
  },
  {
    accessorKey: 'zipcode',
    header: 'Zip',
    cell: ({ row }) => <div className={row.original.expired.value && expiredColor}>{row.original.zipcode}</div>,
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
      <div className={row.original.expired.value && expiredColor}>{row.original.previousAuctions.totalCount}</div>
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

      const textColor = daysRemaining > 30 ? '' : `rgb(255, ${255 - colorIntensity + 150}, ${255 - colorIntensity})`; // Dynamic color for days, no color for anything past 60 days, and maintain red for "Expired"

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
      return <div className={expired && expiredColor}>{status}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0 dark'>
              <span className='sr-only'>Open menu</span>
              <DotsVerticalIcon className='h-4 w-4 text-secondary-accent' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='dark bg-primary'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>{Alert()}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Seller Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

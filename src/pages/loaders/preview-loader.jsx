import Preview from '../Preview';
import { spectrumClient } from '../../providers/AuthProvider';
import { queries } from '../../queries';

export const Component = () => {
  return <Preview />;
};

export const loader = async ({ params }) => {
  const { data, loading, error } = await spectrumClient.query({
    query: queries.GET_AUCTION_LOT,
    variables: {
      auction_lot_id: params.id,
      is_view: true,
    },
  });

  return data;
  // const { data, loading, error } = useQuery(queries.GET_AUCTION_LOT, {
  //   variables: {
  //     auction_lot_id: '12224',
  //     is_view: true,
  //   },
  //   client: spectrumClient,
  // });
  // console.log(data, loading, error);
  // const data = await fetch('https://65f52089f54db27bc022a764.mockapi.io/auctions');
  // return data.json();
};

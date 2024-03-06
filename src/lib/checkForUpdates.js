import { useUpdateStore } from '../components/store/updateStore';
export const checkForUpdates = async () => {
  const checked = useUpdateStore.getState().checkedForUpdate;
  console.log('checked value = ', checked);
  if (checked) return;
  const response = await fetch(
    'https://api.github.com/repos/Libaration/Email-Assistant/releases/latest',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const responseJSON = await response.json();
  useUpdateStore.setState({ checkedForUpdate: true });
  console.log('set checkedForUpdates to true.')
  return await responseJSON;
};

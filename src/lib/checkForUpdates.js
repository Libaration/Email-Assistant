export const checkForUpdates = async () => {
  const response = await fetch(
    "https://api.github.com/repos/Libaration/Email-Assistant/releases/latest",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseJSON = await response.json();
  return await responseJSON;
};

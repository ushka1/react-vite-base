import { Box, Button, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const retreiveCats = async () => {
  const response = await fetch('/cats');
  const data = await response.json();
  return data;
};

export default function CatList() {
  const {
    data: catsData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['cats'],
    queryFn: retreiveCats,
    enabled: false,
  });

  const refetchCats = () => {
    refetch();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      }}
    >
      {isLoading && <Typography variant='h6'>Loading...</Typography>}
      {isError && <Typography variant='h6'>Error: {error?.message}</Typography>}
      {!catsData && !isLoading && !isError && (
        <Typography variant='h6'>No cats fetched</Typography>
      )}
      {catsData && (
        <Box>
          <Typography variant='h6'>Cats from the server:</Typography>
          <ul>
            {catsData.data.map((cat: { id: number; name: string }) => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </ul>
        </Box>
      )}
      <Button onClick={refetchCats} sx={{ mt: 2 }} variant='contained'>
        Fetch cats
      </Button>
    </Box>
  );
}

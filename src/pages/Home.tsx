import { useCatStore } from '@/stores/useCatStore';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Button, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const retreiveCats = async () => {
  const response = await fetch('/cats');
  const data = await response.json();
  return data;
};

export default function Home() {
  const { cats, increase } = useCatStore();

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

  const increaseCats = () => {
    increase(1);
  };

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
      <Typography variant='h3' sx={{ mt: 4 }}>
        Hello, world! <PublicIcon sx={{ fontSize: 32 }} />
      </Typography>
      <Typography sx={{ mt: 8 }} variant='h6'>
        Local cats count: {cats}
      </Typography>
      <Button onClick={increaseCats} sx={{ mt: 2 }} variant='contained'>
        More cats
      </Button>
      {isLoading && <Typography>Loading...</Typography>}
      {isError && <Typography>Error: {error?.message}</Typography>}
      {catsData && (
        <Box sx={{ mt: 4 }}>
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

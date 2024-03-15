import { useCatStore } from '@/stores/useCatStore';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Button, Typography } from '@mui/material';

export default function Home() {
  const { cats, increase } = useCatStore();

  const increaseCats = () => {
    increase(1);
  };

  const makeRequest = async () => {
    const response = await fetch('/cats');
    const data = await response.json();
    console.log(data);
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
        Cats: {cats}
      </Typography>
      <Button onClick={increaseCats} sx={{ mt: 2 }} variant='contained'>
        More cats
      </Button>
      <Button onClick={makeRequest} sx={{ mt: 2 }} variant='contained'>
        Make request
      </Button>
    </Box>
  );
}

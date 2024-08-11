import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retreiveCats = async () => {
  const { data } = await axios.get("/cats");
  if (!Array.isArray(data)) {
    throw new Error("Could not fetch cats");
  }

  return data;
};

export default function CatList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["cats"],
    queryFn: retreiveCats,
    enabled: false,
  });

  const refetchCats = () => {
    refetch();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      {!data && !isLoading && !isError && (
        <Typography variant="h6">No cats fetched</Typography>
      )}
      {isLoading && <Typography variant="h6">Loading...</Typography>}
      {isError && <Typography variant="h6">Error: {error?.message}</Typography>}
      {data && (
        <Box>
          <Typography variant="h6">Cats from the server:</Typography>
          <ul>
            {data.map((cat: { id: number; name: string }) => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </ul>
        </Box>
      )}
      <Button onClick={refetchCats} sx={{ mt: 2 }} variant="contained">
        Fetch cats
      </Button>
    </Box>
  );
}

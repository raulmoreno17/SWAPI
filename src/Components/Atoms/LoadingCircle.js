import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", padding: "25px" }}
    >
      <CircularProgress />
    </Box>
  );
}

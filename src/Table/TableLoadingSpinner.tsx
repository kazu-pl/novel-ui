import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const TableLoadingPaper = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        background: `linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 100%)`,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default TableLoadingPaper;

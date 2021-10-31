import Box from "@mui/material/Box";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ColoredIconWrapper from "../../ColoredIconWrapper";

export type ExtendedFile = {
  file: File;
  id: string;
};

export interface SingleFileProps {
  file: ExtendedFile;
  onDeleteIconClick: (fileId: string) => void;
}

const SingleFile = ({ file, onDeleteIconClick }: SingleFileProps) => {
  return (
    <Box
      mt={1}
      mb={1}
      borderBottom={2}
      sx={{
        borderColor: (theme) => theme.palette.text.disabled,
      }}
      display="flex"
      width="auto"
      justifyContent="flex-start"
      alignItems="center"
    >
      <ColoredIconWrapper color="grey">
        <InsertDriveFileIcon />
      </ColoredIconWrapper>
      <Box
        marginLeft={2}
        display="flex"
        flexGrow={1}
        justifyContent="flex-start"
        alignItems="center"
        textAlign="left"
      >
        <Typography>{file.file.name}</Typography>
      </Box>

      <IconButton onClick={() => onDeleteIconClick(file.id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default SingleFile;

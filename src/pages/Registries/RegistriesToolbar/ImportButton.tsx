import { Button } from "@mui/material";

export default function ImportButton() {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => alert("Import Function")}
        size="small"
      >
        Import
      </Button>
    </>
  );
}

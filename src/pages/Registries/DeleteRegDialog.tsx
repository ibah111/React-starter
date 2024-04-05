import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
} from "@mui/material";
import DestroyRegistries from "../../api/Cessions/Registries/Delete/DestroyRegistries";

interface DeleteRegControl {
  open: boolean;
  regId: number;
  onClose: VoidFunction;
}
export default function DeleteRegDialog({
  onClose,
  open,
  regId,
}: DeleteRegControl) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle align="center">Удалить реестр {regId}?</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid xs container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={() =>
                DestroyRegistries({
                  id: regId,
                }).then(() => onClose())
              }
              color="warning"
            >
              Удалить
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={() => onClose()}
              color="error"
              fullWidth
            >
              Отмена
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

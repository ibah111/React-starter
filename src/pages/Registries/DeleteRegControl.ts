import React from "react";
import { RegEvent, RegistriesEvents } from "./Registries";

interface DeleteRegControlParams {
  DialogTarget: EventTarget;
  refresh: VoidFunction;
}

export default function DeleteRegControl(params: DeleteRegControlParams) {
  const [open, setOpen] = React.useState(false);
  const [regId, setRegId] = React.useState(0);
  React.useEffect(() => {
    const callback = ((e: RegEvent) => {
      setRegId(e.value as number);
      setOpen(true);
    }) as EventListener;
    params.DialogTarget.addEventListener(RegistriesEvents.delete, callback);
    return () =>
      params.DialogTarget.removeEventListener(
        RegistriesEvents.delete,
        callback
      );
  }, [params.DialogTarget]);
  const closeDeleteRegDialog = React.useCallback(() => {
    setRegId(0);
    setOpen(false);
    params.refresh();
  }, [params]);
  return {
    closeDeleteRegDialog,
    open,
    regId,
  };
}

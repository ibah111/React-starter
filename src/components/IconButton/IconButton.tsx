import { IconButton, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IconButtonProps {
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  func: VoidFunction;
}

export default function CustomIconButton({
  name,
  Icon,
  func,
}: IconButtonProps) {
  return (
    <IconButton onClick={() => func()}>
      <Icon />
      {name ? name : ""}
    </IconButton>
  );
}

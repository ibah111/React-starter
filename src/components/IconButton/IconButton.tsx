import { IconButton, SvgIconTypeMap, Tooltip } from "@mui/material";
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
    <Tooltip title={name}>
      <IconButton onClick={() => func()} size="small">
        <Icon />
      </IconButton>
    </Tooltip>
  );
}

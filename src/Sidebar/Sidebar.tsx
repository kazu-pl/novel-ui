import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SidebarMenuItem, { SidebarMenuItemProps } from "./SidebarMenuItem";

export interface SidebarProps {
  width?: number;
  bgColor?: string;
  logo?: React.ReactNode;
  sidebarItems: SidebarMenuItemProps[];
}

const Sidebar = ({
  width = 280,
  logo,
  bgColor,
  sidebarItems,
}: SidebarProps) => {
  return (
    <Box
      sx={{
        width: width,
        backgroundColor: (theme) => bgColor || theme.palette.primary.main,
        minHeight: "100%",
        p: 1,
      }}
    >
      <Box display="flex" justifyContent="center" pb={8}>
        {logo}
      </Box>
      <List sx={{ width: "100%" }} component="nav">
        {sidebarItems.map((item, index) => (
          <SidebarMenuItem key={index} {...item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

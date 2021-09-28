import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SidebarMenuItem, { SidebarMenuItemProps } from "./SidebarMenuItem";

export interface SidebarProps {
  width?: number;
  sidebarItems: SidebarMenuItemProps[];
}

const Sidebar = ({ width = 280, sidebarItems }: SidebarProps) => {
  return (
    <Box
      sx={{
        width: width,
        backgroundColor: `white`,
        borderRight: (theme) => `1px solid ${theme.palette.grey[300]}`,
        minHeight: "100%",
        p: 1,
      }}
    >
      <List sx={{ width: "100%" }} component="nav">
        {sidebarItems.map((item, index) => (
          <SidebarMenuItem key={index} {...item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

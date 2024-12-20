import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import OrderIcon from "@/app/icons/OrderIcon";
import HomeIcon from "@/app/icons/HomeIcon";
import { HistoryIcon } from "lucide-react";

export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Order List",
      url: "/order",
      icon: <OrderIcon />,
    },
    {
      title: "History",
      url: "#",
      icon: <HistoryIcon />,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

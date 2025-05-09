"use client";

import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Subscription",
    url: "/",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Trending",
    url: "/",
    icon: FlameIcon,
  },
];
export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, i) => (
            <SidebarMenuItem key={i}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // TODO: channge to look at current pathname
                onClick={() => {}}
              >
                <Link href={item.url}>
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

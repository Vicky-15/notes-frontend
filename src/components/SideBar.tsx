import { List, ListItem } from "@chakra-ui/react";

import { SlNotebook } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";
import { BsFillTagFill } from "react-icons/bs";

import SideBarItem from "./SideBarItem";
import { useState } from "react";
import { IconType } from "react-icons";
const SideBar = () => {
  const [activeSidebar, setSideBar] = useState("All Notes");

  const sidebarItems: { text: string; icon: IconType }[] = [
    { text: "All Notes", icon: SlNotebook },
    { text: "Categories", icon: BiCategory },
    { text: "Tag Name", icon: BsFillTagFill },
  ];

  return (
    <List>
      {sidebarItems.map((item) => (
        <ListItem key={item.text} marginBottom={1}>
          <SideBarItem
            {...item}
            setActiveSideBar={(text) => setSideBar(text)}
            isActive={activeSidebar === item.text}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;

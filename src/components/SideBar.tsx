import { List, ListItem } from "@chakra-ui/react";
import { BiCategory } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";

import {
  useLocation,
  useParams,
  type Location,
  type Params,
} from "react-router-dom";

import { SideBarItemType } from "../entities";
import tagToSideBarItem from "../utilities/tagToSideBarItem";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const { pathname }: Location = useLocation();
  const { tagId }: Params = useParams();

  // const { data } = useTags();

  const data = [
    { id: 23, name: "Important" },
    { id: 24, name: "Rough" },
    { id: 25, name: "Fun" },
  ];
  const sideBarTags: SideBarItemType[] = data.map((tag) =>
    tagToSideBarItem(tag, tagId as string, pathname, "tag")
  );
  const sidebarItems: SideBarItemType[] = [
    {
      name: "All Notes",
      icon: SlNotebook,

      isActive: pathname === "/" ? true : false,
      gotoLink: "/",
    },
    {
      name: "Categories",
      icon: BiCategory,

      isActive: pathname.includes("/categories") ? true : false,
      gotoLink: "/categories",
    },
    ...sideBarTags,
  ];

  return (
    <List>
      {sidebarItems.map((item) => (
        <ListItem key={item.name} marginBottom={1}>
          <SideBarItem {...item} />
        </ListItem>
      ))}
      {/* Tags */}
    </List>
  );
};

export default SideBar;

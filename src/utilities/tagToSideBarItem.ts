import { BsFillTagFill } from "react-icons/bs";
import { Tag } from "../entities";

const tagToSideBarItem = (
  { id, name }: Tag,
  tagId: string,
  pathname: string,
  path: string
) => ({
  id,
  name,
  icon: BsFillTagFill,

  isActive: pathname.includes(path) && id === parseInt(tagId),
  gotoLink: `${path}/${id ?? ""}?tagName=${name}`,
});
export default tagToSideBarItem;

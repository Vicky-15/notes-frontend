import { Tag } from "../entities";
import useData from "./useData";

const useTags = () => useData<Tag>("/tags");

export default useTags;

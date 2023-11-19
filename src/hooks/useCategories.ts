import { Category } from "../entities";
import useData from "./useData";

const useCategories = () => useData<Category>("/notes");

export default useCategories;

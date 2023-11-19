import { Note } from "../entities";
import useData from "./useData";

const useNotes = () => useData<Note>("/notes");

export default useNotes;

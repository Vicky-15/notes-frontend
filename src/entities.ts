import { IconType } from "react-icons";

export interface Tag {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  notesCount: number;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  tags: Tag[];
  category: Category;
}

export interface SideBarItemType {
  id?: number;
  name: string;
  icon: IconType;
  isActive: boolean;
  gotoLink: string;
}

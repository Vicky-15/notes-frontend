import {
  Badge,
  Divider,
  Heading,
  List,
  ListItem,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import NotesGrid from "../components/NotesGrid";
import { Category } from "../entities";
import PageHeading from "../components/PageHeading";

const Categories = () => {
  const categories: Category[] = [
    { id: 1, name: "Catgeory 1", notesCount: 23 },
    { id: 2, name: "Catgeory 2", notesCount: 23 },
    { id: 3, name: "Catgeory 3", notesCount: 23 },
    { id: 4, name: "Catgeory 4", notesCount: 23 },
    { id: 5, name: "Catgeory 5", notesCount: 23 },
    { id: 6, name: "Catgeory 6", notesCount: 23 },
    { id: 7, name: "Catgeory 7", notesCount: 23 },
  ];
  return (
    <Stack divider={<Divider />} spacing={3}>
      <PageHeading>Categories</PageHeading>

      <List as={Wrap}>
        {categories.map((category) => (
          <ListItem as={Stack} key={category.id}>
            <Heading fontSize="xl">{category.name}</Heading>
            <Badge colorScheme="green" size="lg">
              {category.notesCount}
            </Badge>
          </ListItem>
        ))}
      </List>

      <NotesGrid />
    </Stack>
  );
};

export default Categories;

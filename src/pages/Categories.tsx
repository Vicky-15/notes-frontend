import { Divider, SimpleGrid, Stack } from "@chakra-ui/react";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import NotesGrid from "../components/NotesGrid";
import PageHeading from "../components/PageHeading";
import { Category } from "../entities";

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

  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const paramValue = URLSearchParams.get("categoryId");

  useEffect(() => {
    if (!paramValue) SetURLSearchParams({ categoryId: categories[0].id + "" });

    console.log(paramValue);
  }, [paramValue]);

  return (
    <Stack divider={<Divider />} spacing={3}>
      <PageHeading>Categories</PageHeading>

      <SimpleGrid spacing={5} columns={{ base: 2, sm: 3, md: 4, xl: 5 }}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            isActive={(id) => paramValue === id}
            setSelectedCategory={(id) => SetURLSearchParams({ categoryId: id })}
            {...category}
          />
        ))}
      </SimpleGrid>

      <NotesGrid />
    </Stack>
  );
};

export default Categories;

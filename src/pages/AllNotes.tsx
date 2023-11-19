import { Divider, Stack } from "@chakra-ui/react";
import NotesGrid from "../components/NotesGrid";
import PageHeading from "../components/PageHeading";

const AllNotes = () => {
  return (
    <>
      <Stack divider={<Divider />} spacing={3}>
        <PageHeading>
          All Notes <br />
          <br />
          <span style={{ color: "RED" }}>
            {" "}
            INFORMATION &nbsp;&nbsp; &nbsp;{" "}
            <strong style={{ color: "coral" }}>
              IN SHORT TIME I COULDNOT ABLE TO FINISH THIS PROJECT(BACKEND)
              ANYWAY, I NOW KNOW MY POTENTIAL OF BUILDING THINGS IN TIME, I WILL
              CONTINUE THIS PROJECT. IM ABLE TO LEARN BACKEND QUICKLY IF HAVE
              GIVEN A CHANCE
            </strong>
            <br />
            TO WHOEVER SEEING THIS, I BUILT THIS FROM SCRACTH WITH REFERING
            GOOGLE KEEP, IT TAKES TWO DAYS FOR ME, I HAVE EXPERIENCE IN BACKEND
            TO BE ABLE TO UNDERSTAND AND BUILD ENDPOINT WITH SECURITY MEASURES,
            I STARTED LEARNING BACKED IN THREE WEEKS AGO ONLY,
            <br />
            to see what i am capable of in backed please REFER, in my github
            page, (guvi-backend)
          </span>
        </PageHeading>
        <NotesGrid />
      </Stack>
    </>
  );
};

export default AllNotes;

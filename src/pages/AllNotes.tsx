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
            INFORMATION &nbsp;&nbsp; &nbsp;{" "}
            <strong style={{ color: "coral" }}>
              [i did this front end from scratch] IN SHORT 48HR'S TIME I
              COULDNOT ABLE TO finish THIS PROJECT'S(BACKEND)
            </strong>
            <br />
            <strong style={{ color: "coral" }}>
              To Know my knowledge level in backend, refer this github
              repository, {"-->"}
              <a
                style={{ color: "blue" }}
                target="_blank"
                href="https://github.com/Vicky-15/guvi-auth-back-end"
              >
                guvi-auth-backend
              </a>
            </strong>
            <br />
          </span>
        </PageHeading>
        <NotesGrid />
      </Stack>
    </>
  );
};

export default AllNotes;

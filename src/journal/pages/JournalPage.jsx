import { IconButton, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Amet magna officia culpa nostrud exercitation et ex aliqua incididunt
        pariatur officia id id incididunt. Sint elit laboris veniam
        exercitation. Esse quis et ipsum anim in enim commodo ad nulla eiusmod.
        Sunt qui commodo magna aliqua do ex ullamco laboris. Amet fugiat nulla
        culpa amet non culpa. Incididunt dolor ipsum ex aute culpa anim mollit
        do et sit qui commodo nisi.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};

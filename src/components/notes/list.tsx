"use client";
import useNotesStore from "@/state/store";

const NoteList = () => {
  const { notes } = useNotesStore();
  console.log(notes);

  return (
    <ul>
      {Object.entries(notes).map(([id, note]) => (
        <li key={id} className="truncate">
          {note.text}
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

"use client";
import useNotesStore from "@/state/store";
import Link from "next/link";
import { TrashIcon } from "@radix-ui/react-icons";

const NoteList = () => {
  const { notes, deleteNote } = useNotesStore();

  return (
    <ul className="p-2 h-full overflow-y-auto">
      {Object.entries(notes).map(([id, note]) => (
        <li key={id} className="border-b-2 py-2 grid grid-cols-[1fr_auto] ">
          <Link href={`/${note.id}`} className="truncate text-black min-w-0">
            {note.text}
          </Link>
          <button type="button" onClick={() => deleteNote(id)}>
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

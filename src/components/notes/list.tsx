"use client";
import useNotesStore from "@/state/store";
import Link from "next/link";

const NoteList = () => {
  const { notes } = useNotesStore();

  return (
    <ul className="p-2 h-full overflow-y-auto">
      {Object.entries(notes).map(([id, note]) => (
        <li key={id} className="truncate text-black border-b-2 py-2">
          <Link href={`/${note.id}`}>{note.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

"use client";
import { ChangeEvent, useEffect } from "react";
import style from "./pad.module.css";
import useNotesStore from "@/state/store";
import { useParams } from "next/navigation";

const Pad = () => {
  const params = useParams();
  const { noteId } = params as { noteId: string };

  const { addNote, updateNote, notes } = useNotesStore();

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNote(noteId, e.target.value);
  };

  useEffect(() => {
    if (notes[noteId]) return;
    addNote(noteId, "");
  }, []);
  return (
    <textarea
      defaultValue={notes[noteId]?.text}
      onChange={handleInput}
      name="notes"
      id="notes"
      className={style["editor__textinput"]}
    ></textarea>
  );
};

export default Pad;

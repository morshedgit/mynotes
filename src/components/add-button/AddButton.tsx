"use client";
import useNotesStore from "@/state/store";
import { useParams, useRouter } from "next/navigation";

const AddButton = () => {
  const params = useParams();
  const router = useRouter();

  const { notes } = useNotesStore();
  const { noteId: id } = params as { noteId: string };

  const handleAddClick = () => {
    if (id && id in notes && notes[id].text === "") return;
    const noteId = Math.random().toString().slice(2);
    router.push(`/${noteId}`);
  };

  return (
    <button
      onClick={handleAddClick}
      className="bg-primary text-white rounded-full px-2"
    >
      Add
    </button>
  );
};

export default AddButton;

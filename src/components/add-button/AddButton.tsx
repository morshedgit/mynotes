"use client";
import { useRouter } from "next/navigation";

const AddButton = () => {
  const router = useRouter();

  const handleAddClick = () => {
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

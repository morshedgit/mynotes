import create from "zustand";
import { persist } from "zustand/middleware";

// Define the type for a note
interface Note {
  id: string;
  text: string;
}

// Define the type for the store's state
interface NotesState {
  notes: Record<string, Note>;
  addNote: (id: string, text: string) => void;
  updateNote: (id: string, text: string) => void;
  deleteNote: (id: string) => void;
}

// Create the Zustand store with persistence
const useNotesStore = create<NotesState>()(
  persist(
    (set) => ({
      notes: {},
      addNote: (id, text) =>
        set((state) => ({
          notes: { ...state.notes, [id]: { id, text } },
        })),
      updateNote: (id, text) => {
        set((state) => ({
          notes: {
            ...state.notes,
            [id]: {
              id,
              text,
            },
          },
        }));
      },
      deleteNote: (id) =>
        set((state) => {
          const { [id]: _, ...newNotes } = state.notes;
          return { notes: newNotes };
        }),
    }),
    {
      name: "notes-storage", // name of the item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);

export default useNotesStore;

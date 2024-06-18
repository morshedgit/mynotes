import create from "zustand";

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

// Create the Zustand store
const useNotesStore = create<NotesState>((set) => ({
  notes: {},
  addNote: (id, text) =>
    set((state) => ({
      notes: { ...state.notes, [id]: { id, text } },
    })),
  updateNote: (id, text) =>
    set((state) => ({
      ...state.notes,
      [id]: {
        id,
        text,
      },
    })),
  deleteNote: (id) =>
    set((state) => {
      const { [id]: _, ...newNotes } = state.notes;
      return { notes: newNotes };
    }),
}));

export default useNotesStore;

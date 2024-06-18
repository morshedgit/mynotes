import { redirect } from "next/navigation";
export default function Home() {
  const noteId = Math.random().toString().slice(2);
  return redirect(`/${noteId}`);
}

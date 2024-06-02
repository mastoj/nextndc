import TodoContainer from "@/components/todo/todo-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-lg m-auto">
      <TodoContainer />
    </main>
  );
}

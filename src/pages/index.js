
import Head from "next/head";

//Global
import { useReducer } from "react";
import { MainContext } from "@/state";
import { mainReducer } from "@/state/reducer";

//Mocks
import { todoMocks } from "@/mocks/todoData";

//Componets
import TodoList from "@/components/todoList";

export default function Home() {
  const [state, dispatch] = useReducer(mainReducer, todoMocks);

  return (
    <>
      <Head>
        <title>TODO - Global State App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContext.Provider value={{ state, dispatch }}>
        <main>
          <TodoList />
        </main>
      </MainContext.Provider>
    </>
  );
}

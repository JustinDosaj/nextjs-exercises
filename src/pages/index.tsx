import { Layout } from "@/components/Layout";
import { useState } from "react";
import { ToggleSwitch } from "@/excercises/ToggleSwitch";
import { Typewriter } from "@/excercises/TypewriterEffect";
import { CheckBoxSolution } from "@/excercises/CheckBoxSolution";
import { InsertTextDoc } from "@/excercises/InsertTextDoc";
import { ChildrenTest } from "@/excercises/ChildrenTest";
import { SimpleCounter } from "@/excercises/SimpleCounter";
import LoadingBar from "@/excercises/LoadingBar";
// import { ErrorExcercise } from "@/excercises/ErrorExcercise";
import { ListGenerationAndFilter } from "@/excercises/ListGenerationAndFilter";
import { AlbumSuspense } from "@/excercises/AlbumSuspense";


export default function Home() {

  const [checked, setChecked] = useState<boolean>(false);
  
  return (
      <Layout>
        <AlbumSuspense/>
        <ListGenerationAndFilter/>
        {/* <ErrorExcercise/> */}
        <LoadingBar/>
        <ToggleSwitch enable={checked} setEnable={setChecked}/>
        <Typewriter text="Hello World" speed={100}/>
        <CheckBoxSolution/>
        <InsertTextDoc/>
        <ChildrenTest/>
        <SimpleCounter/>
      </Layout>
  );
}

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


/**
 * Uncomment which solution you would like to see
 */

export default function Home() {

  const [checked, setChecked] = useState<boolean>(false);

  // Random Obj + Map Stuff //
  const test = new Map<string, number>();
  test.set("apple", 5)
  test.set("banana", 10)

  console.log("Test: ", test.values())

  for (const [key, value] of test) {
      console.log(`${key}: ${value}`)
  }

  const obj: Record<string, number> = {}

  obj.name = 5

  console.log("Object: ", obj)
  console.log("Object Keys: ", Object.keys(obj))
  console.log("Object Values: ", Object.values(obj))

  Object.keys(obj).forEach((key) => console.log("For Each Key: ", key))

  // End Random Obj + Map Stuff //
  
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

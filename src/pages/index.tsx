import { Layout } from "@/components/Layout";
import { useState } from "react";
import { ToggleSwitch } from "@/excercises/ToggleSwitch";
import { Typewriter } from "@/excercises/TypewriterEffect";
import { CheckBoxSolution } from "@/excercises/CheckBoxSolution";
import { InsertTextDoc } from "@/excercises/InsertTextDoc";


/**
 * Uncomment which solution you would like to see
 */

export default function Home() {

  const [checked, setChecked] = useState<boolean>(false);
  
  return (
      <Layout>
        <ToggleSwitch enable={checked} setEnable={setChecked}/>
        <Typewriter text="Hello World" speed={100}/>
        <CheckBoxSolution/>
        <InsertTextDoc/>
      </Layout>
  );
}

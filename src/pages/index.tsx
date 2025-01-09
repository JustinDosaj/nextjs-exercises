import { Layout } from "@/components/Layout";
import { Typewriter } from "@/excercises/TypewriterEffect";
// import { CheckBoxSolution } from "@/excercises/CheckBoxSolution";
// import { InsertTextDoc } from "@/excercises/InsertTextDoc";
// import { Form } from "@/excercises/Form";


/**
 * Uncomment which solution you would like to see
 */

export default function Home() {
  return (
      <Layout>
        <Typewriter text="Hello World" speed={100}/>
        {/*<CheckBoxSolution/>*/}
        {/*<InsertTextDoc/>*/}
        {/* <Form/> */}
        <div></div>
      </Layout>
  );
}

import { Layout } from "@/components/Layout";
import { CheckBoxSolution } from "@/excercises/CheckBoxSolution";
import { InsertTextDoc } from "@/excercises/InsertTextDoc";


/**
 * Uncomment which solution you would like to see
 */

export default function Home() {
  return (
      <Layout>
        {/*<CheckBoxSolution/>*/}
        {<InsertTextDoc/>}
      </Layout>
  );
}

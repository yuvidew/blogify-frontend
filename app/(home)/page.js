import { Header } from "@/components/ui/Header";
import { Section } from "./_HomeComp/Section";

export default function Home() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className=" container">
        <Section/>
      </div>
    </div>
  )
}

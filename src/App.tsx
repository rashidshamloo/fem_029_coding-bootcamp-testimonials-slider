import { useState } from "react";
// components
import Carousel from "./components/Carousel";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";
import Footer from "./components/Footer";
// data
import data from "./data/data.json";

function App() {
  const [transition, setTransition] = useState("fade");
  function changeTransition(transition: string) {
    setTransition(transition);
  }
  return (
    <>
      <Header changeTransition={changeTransition} />
      <main className="w-full md:aspect-[1.8] md:w-[960px] lg:w-[1160px] xl:w-[1440px]">
        <Carousel changeTransition={changeTransition} transition={transition}>
          {data.map((item: any, i: number) => {
            return <Testimonial data={item} key={i} variants={transition} />;
          })}
        </Carousel>
      </main>
      <Footer />
    </>
  );
}

export default App;

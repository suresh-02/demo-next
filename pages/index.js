import { Header } from "./Components/header";
import { Navbar } from "./Components/navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" max-w-[100%] my-[200px] ">
        <Navbar />

        <div className="  h-[300px]">
          <h1 className="text-center p-8 text-[60px] font-bold ">
            Welcome come to the News App...!
          </h1>
          <p className="text-center text-2xl font-bold">
            Your One Stop for the latest News...
          </p>
        </div>
      </div>
    </div>
  );
}

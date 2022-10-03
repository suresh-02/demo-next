import { useRouter } from "next/router";

export const Navbar = () => {
  const route = useRouter();

  return (
    <div className="flex max-w-max mx-auto gap-20 text-2xl  font-semibold mt-[30px]">
      <div
        className="hover:scale-150 transition ease-out duration-100 bg-green-600 h-max p-2 rounded-lg w-max"
        onClick={() => route.push("/")}
      >
        Home{" "}
      </div>
      <div
        className="hover:scale-150 transition ease-out duration-100  bg-green-600 h-max p-2 rounded-lg w-max"
        onClick={() => route.push("/Feed/1")}
      >
        Feed
      </div>
      <div
        className="hover:scale-150 transition ease-out duration-100  bg-green-600 h-max p-2 rounded-lg w-max"
        onClick={() =>
          (window.location.href = "https://portfolio-eight-liard.vercel.app/")
        }
      >
        Dev's Portfolio
      </div>
    </div>
  );
};

import Header from "@/src/components/header";
import MenuBar from "@/src/components/menuBar";

export default function Perfil() {
  return (
    <>
      <div
        className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"
      ></div>

      <div id="app">
        <Header />

        <hr className="border-branco/60" />

        <div className="form m-4 flex flex-col items-center justify-center"></div>
        
      </div>
              
      <div className="flex flex-1 items-center justify-center text-2xl text-gray-400">
        To be implemented...
      </div>
  
      <MenuBar />
  </>
  );
}

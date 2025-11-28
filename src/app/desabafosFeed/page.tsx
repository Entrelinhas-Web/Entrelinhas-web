import SearchBar from "./components/searchBar";
import MenuBar from "@/src/components/menuBar";
import Filter from "./components/filter";
import Header from "@/src/components/header";
import Form from "./components/form";
import DesabafoCard from "./components/desabafoCard";

export default function DesabafosFeed() {
    return (
        <>
            <div className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"></div>

            <div id="app">
                <Header />

                <hr className="border-branco/60" />

                <div className="search py-4 hidden">
                    <SearchBar />
                </div>

                <div className="form m-4 flex flex-col items-center justify-center py-4">
                    <Form />
                </div>

                <div className="content flex flex-wrap items-center justify-center">
                    <DesabafoCard objeto={{id: 1,
      titulo: "string",
      emocao: "Felicidade",
      nivel: "string",
      descricao: "string",
      data: "string",}}/>
                </div>

                <MenuBar />
                <Filter />
            </div>
        </>
    );
}
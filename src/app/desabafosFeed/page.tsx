"use client"

import SearchBar from "./components/searchBar";
import MenuBar from "@/src/components/menuBar";
import FilterBar from "./components/filterBar";
import Header from "@/src/components/header";
import Form from "./components/form";
import DesabafoCard, { desabafoObject } from "./components/desabafoCard";
import { useEffect, useState } from "react";
import PopUp from "./components/popUp";

export default function DesabafosFeed() {
    const [registros, setRegistros] = useState<desabafoObject[]>([]);
    const [popUpData, setPopUpData] = useState<desabafoObject | null>(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("desabafos") || "[]");

        setRegistros(data);
    }, []);

    function onDelete(id: number) {
        setRegistros(registros.filter((registro) => registro.id != id));

        localStorage.setItem("desabafos", JSON.stringify(registros));

        setPopUpData(null);
    }

    return (
        <>
            <div className="bg pointer-events-none fixed top-0 left-0 -z-10 h-full w-full"></div>

            <div id="app">
                <Header />

                <hr className="border-branco/60" />

                <div className={`search py-4 ${registros.length === 0 ? "hidden" : ""}`}>
                    <SearchBar />
                </div>

                <div className="form m-4 flex flex-col items-center justify-center py-4">
                    <Form />
                </div>

                <div className="content flex flex-wrap items-center justify-center">
                    {registros.map((registro) => (
                        <DesabafoCard 
                            key={registro.id}
                            objeto={registro}
                            onClick={() => setPopUpData(registro)} 
                        />
                    ))}
                </div>

                {popUpData && (
                    <PopUp 
                        objeto={popUpData}
                        onClose={() => setPopUpData(null)}
                        onDelete={onDelete}
                        onEdit={(registro) => console.log("Edição: ", registro)}
                    />
                )}

                <MenuBar />
                <FilterBar />
            </div>
        </>
    );
}
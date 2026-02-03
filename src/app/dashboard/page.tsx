'use client'

import Header from "@/src/components/header";
import MenuBar from "@/src/components/menuBar";
import { useDesabafos } from "@/src/contexts/desabafosContext";
import DashboardCard from "./components/cardDashboard";

export default function Dashboard() {

    const { registros } = useDesabafos();
    const quant  = registros.length;
    const diferentes = new Set(registros.map((registro) => registro.emocao)).size;

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
                    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p id="desabafos-registrados" className="text-3xl font-bold text-lilas mt-2 inline">{quant}</p>
                        <h1 className="text-preto text-sm font-semibold uppercase inline">{quant==1 ? "Desabafo Registrado" : "Desabafos Registrados"}</h1>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p id="emocoes-registradas" className="text-3xl font-bold text-lilas mt-2 inline"><span>{diferentes}</span></p>
                        <p className="text-preto text-sm font-semibold uppercase inline">{diferentes==1 ?"Emoção Diferente" : "Emoções Diferentes"}</p>
                    </div>
                </div>

            <div className="w-full pb-[4%] h-[500px] flex justify-center items-center">
                <canvas id="graficoDashboard"></canvas>
            </div>

            <div className="content flex flex-wrap items-center justify-center"></div>
        
            <MenuBar />
        </>
    )
}
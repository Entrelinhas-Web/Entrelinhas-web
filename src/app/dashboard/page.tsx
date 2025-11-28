import Header from "@/src/components/header";
import MenuBar from "@/src/components/menuBar";

export default function Dashboard() {
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
                        <p id="desabafos-registrados" className="text-3xl font-bold text-lilas mt-2 inline">0</p>
                        <h1 className="text-preto text-sm font-semibold uppercase inline">{"Desabafo(s) Registrado(s)"}</h1>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p id="emocoes-registradas" className="text-3xl font-bold text-lilas mt-2 inline"><span>0</span></p>
                        <p className="text-preto text-sm font-semibold uppercase inline">{"Emoç(ões) Diferente(s)"}</p>
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
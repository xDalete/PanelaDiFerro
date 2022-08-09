import Receita from "../Components/Receita";
import styles from "../styles/pages/Home.module.scss"
import { useEffect, useState } from "react"

function Home() {
    var [receitas, setReceitas] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/home')
            .then(response => response.json())
            .then(data => setReceitas(data))
    }, [])
    return <section className="container">
        <h1>Destaques</h1>
        <div className={"d-flex justify-content-center mb-3"}>
            <div className={"row"} style={{ width: "70rem" }}>
                <div className={"col-md-8 p-0"}>
                    <img className={"w-100"} src={`#`} alt="Thumb receita destaque 1" />
                </div>
                <div className={"col-md-4 d-flex flex-column p-0"}>
                    <img className={"w-100"} src={`#`} alt="Thumb receita destaque 2" />
                    <img className={"w-100"} src={`#`} alt="Thumb receita destaque 3" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row row-cols-mg-4">
                {
                    receitas.map(receita => {
                        console.log(receita);
                        return <div className="col">
                            {receita.id ?
                                <Receita key={receita.id}
                                    capa={receita.capa}
                                    titulo={receita.titulo}
                                    descricao={receita.modo_preparo}
                                    id={receita.id}
                                /> : <></>
                            }


                        </div>
                    })
                }
            </div>
        </div>
    </section>
}
export default Home
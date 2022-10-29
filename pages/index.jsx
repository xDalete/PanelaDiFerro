import Receita from "../Components/Receita";
import styles from "../styles/pages/Home.module.scss"
import { useEffect, useState } from "react"

function Home() {
    var [receitas, setReceitas] = useState([])
    useEffect(() => {
      console.log("rodei")
        fetch('/api/home')
            .then(response => response.json())
            .then(data => setReceitas(data))
    }, [])
    return <section className="container pt-5">
        <h1 className={`${styles.title} text-center`}>Receitas</h1>
    <div className="container">
            <div className="row row-cols-mg-4">
                {
                    receitas.map(receita => {
                        return <div className="col" key={`div-${receita.id}`}>
                            {receita.id ?
                                <Receita 
                                    image={receita.image}
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
import Receita from "../Components/BannerReceitaSearch";
import { Input } from "reactstrap"
import { useEffect, useState } from "react"

function Home() {
  var [search, setSearch] = useState('')
    var [receitas, setReceitas] = useState([])
    useEffect(() => {
      console.log("rodei")
        fetch(`/api/search/${search}`)
            .then(response => response.json())
            .then(data => setReceitas(data))
    }, [search])
    return <section className="container mt-5 pt-5">
    <div className="container">
            <div className="row">
        <Input placeholder="Buscar..." className='col-12 mx-1' onChange={event => setSearch(event.target.value)} />
                {
                    receitas.map(receita => {
                        return <div className="col-6" key={`div-${receita.id}`}>
                            {receita.id ?
                                <Receita 
                                    image={receita.image}
                                    titulo={receita.titulo}
                                    tempo_preparo={receita.tempo_preparo}
                                    porcoes={receita.porcoes}
                                    id={receita.id}
                                >
                                </Receita> : <></>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    </section>
}
export default Home
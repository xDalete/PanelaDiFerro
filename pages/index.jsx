import Receita from "../Components/Receita";
import styles from "../styles/pages/Home.module.scss"

function Home() {
    var receitas = [{ capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 1 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 2 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 3 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 4 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 5 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 6 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 7 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 8 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 9 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 10 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 11 }, { capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200", titulo: "Receita", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?", id: 12 }]
    return <section className="container">
        <h1>Destaques</h1>
        <div className={"d-flex justify-content-center"}>
            <div className={"row"} style={{ width: "70rem" }}>
                <div className={"col-md-8 p-0"}>
                    <img className={"w-100"} src={`${receitas[0].capa}`} alt="Thumb receita destaque 1" />
                </div>
                <div className={"col-md-4 d-flex flex-column p-0"}>
                    <img className={"w-100"} src={`${receitas[1].capa}`} alt="Thumb receita destaque 2" />
                    <img className={"w-100"} src={`${receitas[2].capa}`} alt="Thumb receita destaque 3" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row row-cols-mg-4">
                {
                    receitas.map(receita => {
                        return <div className="col">
                            <Receita key={receita.id}
                                capa={receita.capa}
                                titulo={receita.titulo}
                                descricao={receita.descricao}
                                id={receita.id}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    </section>
}
export default Home
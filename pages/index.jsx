import Receita from "../Components/Receita";

function Home() {
  var receitas = [
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 1
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 2
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 3
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 4
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 5
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 6
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 7
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 8
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 9
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 10
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 11
    },
    {
      capa: "https://img.itdg.com.br/tdg/images/recipes/000/311/025/351270/351270_original.jpg?mode=crop&width=360&height=200",
      titulo: "Receita",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo atque corporis molestiae. Architecto, saepe aspernatur unde dolores sed consequuntur qui rerum laborum expedita atque, quisquam provident, eaque dolore quaerat?",
      id: 12
    },

  ]
  return <section className="container">
    <h1>Destaques</h1>
    <p>Por enquanto isso é só uma area de testes</p>
    <p>idgdgfdfgddgdgsiudnssd</p>

    <div className="container">
      <div className="row row-cols-mg-4">
        {
          receitas.map(teste => {
            return <div className="col">
              <Receita key={teste.id}
                capa={teste.capa}
                titulo={teste.titulo}
                descricao={teste.descricao}
                id={teste.id}
              />
            </div>
          })
        }
      </div>
    </div>
  </section>
}


export default Home

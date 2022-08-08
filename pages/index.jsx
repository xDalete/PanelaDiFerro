import Receita from "../Components/Receita";
import styles from "../styles/pages/Home.module.scss"

function Home() {
    var receitas = [{
    "titulo": "Bolo de cenoura",
    "ingredientes":["1/2 xícara (chá) de óleo","3 cenouras médias raladas","4 ovos","2 xícaras (chá) de açúcar","2 e 1/2 xícaras (chá) de farinha de trigo","1 colher (sopa) de fermento em pó"],
    "modo_preparo":"Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture. Acrescente o açúcar e bata novamente por 5 minutos. Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente. Acrescente o fermento e misture lentamente com uma colher. Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.",
    "observacoes":"Para fazer seu bolo de cenoura de liquidificador de uma vez só é preciso um liquidificador potente, mas se achar a massa pesada para o seu aparelho, corte a cenoura em pedaços bem pequenos e só bata no aparelho os ingredientes úmidos. Depois que estiver tudo homogêneo, incorpore a mistura líquida aos ingredientes secos, mexendo bem e delicadamente. Além de poupar o seu liquidificador, misturar os ingredientes secos delicadamente com a mão também é o segredo para o seu bolo de cenoura não solar.\n\nA receita de bolo de cenoura pode ser complicada porque exige alguns pequenos detalhes que garantem o resultado perfeito. Uma delas é a proporção de cenoura, que precisa ser correta para a receita que você está fazendo. Por isso, para ter certeza de que o bolo não vai solar, você pode utilizar a mesma medida da nossa receita de ovo recheado com bolo de cenoura, cerca de 250 g de cenoura para 2 copos de farinha de trigo.\n\nPara garantir o seu bolo de cenoura fofinho, lembre-se de testar o fermento antes de adicioná-lo à massa e peneire a farinha de trigo! Isso vai garantir que um bolo de cenoura fofo, leve e ainda mais delicioso!\n\nSe você prefere um bolo de cenoura cremoso, faça uma calda para umedecer seu bolo! Basta adicionar 1 xícara de açúcar e 1 xícara de água em uma leiteira e, assim que levantar fervura, desligue o fogo. Quando esfriar completamente, você pode regar seu bolo. Se quiser incrementar essa mistura para deixar ainda mais gostoso e dar um perfume ao seu bolo de cenoura, você pode adicionar raspas de laranja, essência de baunilha ou um pouco de canela. Dessa forma, você vai ter um bolo de cenoura molhadinho e delicioso!",
    "tempo_preparo":"40min",
    "porcoes":8,
    "img": "1.jpg",
    "id": 1
}]
  fetch('https://paneladiferro.xdalete.repl.co/api/home')
    .then(T => {
      console.log(T)
    })
    .then(console.log)
    return <section className="container">
        <h1>Destaques</h1>
        <div className={"d-flex justify-content-center mb-3"}>
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
                                descricao={receita.modo_preparo}
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
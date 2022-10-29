import { readdirSync, writeFileSync, existsSync, readFileSync } from "fs";
import { Client } from "pg"


async function getReceita(id) {
  return await client.query(`SELECT * FROM "if-receitas"."Receitas" WHERE id = ${id}`)
    .then(res => {
      console.log(res.rows[0])
      return res.rows[0]
    })
    .catch(e => { 
      console.log(e)
      return { id: null }
    })
}

function addReceita(receita) {
  receita.id = readdirSync(`./receitas`).length + 1;
  receita.img = `${receita.id}.${receita.img}`
  receita.ingredientes = receita.ingredientes.split("\n")
  writeFileSync(`./receitas/${receita.id}.json`, JSON.stringify(receita, null, 2))
  return receita.id
}

function getLast12() {
  const all = readdirSync(`./receitas`)
  for (var i = 0; i < all.length; i++) {
    all[i] = `${all[i]}`.replace(".json", "")
  }
  all.sort(function (b, a) {
    return a - b;
  });
  var receitas = [].reverse()
  for (var i = 0; i < 12; i++) {
    var id = all[i]
    receitas.push(getReceita(id))
  }
  return receitas;
  /*[
    {
      "titulo": "Risoto de carne seca",
      "ingredientes": [
        "500 g arroz de risoto",
        "100 g queijo ralado",
        "200 g carne seca",
        "2 colheres de margarina",
        "temperos a gosto",
        "1 pacotinho pequeno de caldo de galinha"
      ],
      "modo_preparo": "Ferva 1 litro de água, use uma panela grande e acrescente a água fervida, o arroz, os temperos, o caldo de galinha, 1 colher de margarina e tampe.\nDeixe cozinhar por 15 minutos em fogo alto.\nDepois dos 15 minutos, acrescente a carne seca e misture.\nDeixe secar um pouco mais o arroz (mais uns 5 minutos) e desligue o fogo.\nEm seguida, acrescente 2 colheres de margarina e o queijo ralado e mexa até que todos os ingredientes fiquem muito bem distribuídos.",
      "observacoes": "Caso não encontre o arroz de risoto, pode fazer com o normal também.",
      "tempo_preparo": "20 min",
      "porcoes": "5",
      "img": "15.jpg",
      "id": 15
    },
    {
      "titulo": "Pão de batata doce",
      "ingredientes": [
        "3 xícaras (chá) de farinha de trigo",
        "1 e 1/2 xícara (chá) de batata doce cozida e amassada",
        "1 envelope de fermento biológico (10 g)",
        "4 colheres (sopa) de manteiga em temperatura ambiente",
        "1/2 xícara (chá) de açúcar",
        "1 xícara (chá) de leite",
        "1 gema",
        "1 ovo"
      ],
      "modo_preparo": "Misture todos os ingredientes e sove bem.\nQuanto mais sovar, melhor fica.\nDivida a massa em 2 e modele os pães.\nEu coloco em formas próprias (untadas e enfarinhadas).\nDeixe crescer até dobrar de volume.\nAsse em forno 180º C, por aproximadamente 35 minutos.",
      "tempo_preparo": "180 min",
      "porcoes": "2",
      "img": "14.jpg",
      "observacoes": "",
      "id": 14
    },
    {
      "titulo": "Café Cremoso",
      "ingredientes": [
        "50 g de café solúvel",
        "100 g de açúcar (pode utilizar o pacotinho do café como medidor)",
        "200 ml de água quente"
      ],
      "modo_preparo": "Colocar na batedeira todos os ingredientes e bater por 5 a 10 minutos até formar um creme pastoso.\nPara beber é só utilizar uma ou duas colheres do creme em uma xícara e acrescentar leite quente. Fica uma delícia e muito cremoso.\nOutra opção é acrescentar uma pitada de canela e uma colher de chocolate em pó. Fica muito parecido com um cappuccino.\nSe preferir, pode beber gelado!",
      "observacoes": "Guarde o creme que sobrou no congelador, ele não vai endurecer. Quando quiser beber é só retirar as colheres desejadas.",
      "tempo_preparo": "20 min",
      "porcoes": "30",
      "img": "13.jpg",
      "id": 13
    },
    {
      "titulo": "Pizza caseira",
      "ingredientes": [
        "2 copos duplos de farinha de trigo",
        "2 colheres de sopa de óleo",
        "1 colher de café de sal",
        "1 colher de café de açúcar",
        "Água morna",
        "2 tabletes de fermento de pão"
      ],
      "modo_preparo": "Coloque a farinha de trigo em uma tigela e acrescente o óleo a água morna, os dois tabletes de pão dissolvido no açúcar e no sal. Mexa com uma colher de pau e depois sove bem a massa com as mãos até que ela desgrude das mãos.\nDeixe descansar por aproximadamente 30 minutos. Untar a forma com manteiga e depois espalhar a massa sobre ela. Deixe dourar em forno pré-aquecido de 25 a 35 minutos.",
      "observacoes": " ",
      "tempo_preparo": "17 min",
      "porcoes": "2",
      "img": "12.jpg",
      "id": 12
    },
    {
      "titulo": "Chocolate Quente",
      "ingredientes": [
        "2 xícaras (chá) de leite",
        "1 colher (sopa) de amido de milho",
        "3 colheres (sopa) de chocolate em pó",
        "4 colheres (sopa) de açúcar",
        "1 canela em pau",
        "1 caixinha de creme de leite"
      ],
      "modo_preparo": "Em um liquidificador, bata o leite, o amido de milho, o chocolate em pó e o açúcar.\nDespeje a mistura em uma panela com a canela e leve ao fogo baixo, mexendo sempre até ferver.\nDesligue, adicione o creme de leite e mexa bem até obter uma mistura homogênea.\nRetire a canela e sirva quente.",
      "observacoes": "",
      "tempo_preparo": "10 min",
      "porcoes": "4 ",
      "img": "11.jpg",
      "id": 11
    },
    {
      "titulo": "Torta De Frango ",
      "ingredientes": [
        "Recheio",
        "500 g de  peito de frango sem pele,1/2 litro de caldo de galinha,4 colheres (sopa) de óleo,1 dente de alho amassado,1 cebola picada,3 tomates sem pele e sem sementes,1 xícara (chá) de ervilhas,sal e pimenta-do-reino a gosto",
        "Massa",
        "250 ml de leite,3/4 de xícara (chá) de óleo,2 ovos,1 e 1/2 xícara (chá) de farinha de trigo,sal a gosto,1 colher (sopa) de fermento em pó,queijo ralado a gosto",
        ""
      ],
      "modo_preparo": "Recheio \nCozinhe o peito de frango no caldo até ficar macio. Separe 1 xícara (chá) de caldo do cozimento e reserve. Refogue os demais ingredientes e acrescente as ervilhas por último. Desfie o frango, misture ao caldo e deixe cozinhar até secar.\nMassa\nBata o leite, o óleo e os ovos no liquidificador em velocidade baixa. Acrescente aos poucos a farinha, o sal e o fermento. Despeje metade da massa em uma forma untada e adicione o recheio sobre ela. Cubra com o restante de massa e o queijo ralado. Leve ao forno preaquecido (180° C) até dourar.\n",
      "observacoes": "Apesar de ser uma torta de frango de liquidificador, tenha atenção se a massa fica muito pesada para o seu aparelho. Se sim, bata apenas os ingredientes líquidos da massa e depois junte aos secos, batendo bem com um fuê.\nSe você quer uma torta de frango cremosa, você pode adicionar 1 caixinha de creme de leite ou 1 copo de requeijão ao seu recheio, misturando bem com os demais ingredientes. Fica uma delícia!\n \n",
      "tempo_preparo": "40 min",
      "porcoes": "15",
      "img": "10.jpg",
      "id": 10
    },
    {
      "titulo": "Rocambole de doce de leite",
      "ingredientes": [
        "4 ovos",
        "8 colheres (sopa) de água",
        "2 xícaras (chá) de açúcar",
        "2 xícaras (chá de farinha de trigo",
        "1 colher (sobremesa) de fermento em pó",
        "1 lata de doce de leite",
        "Coco ralado para polvilhar",
        ""
      ],
      "modo_preparo": "Bata as gemas com a água, junte o açúcar e continue batendo. Coloque a farinha de trigo, o fermento em pó e por último, as claras em neve. Leve para assar em uma assadeira retangular, rasa e comprida, untada com margarina e polvilhada com farinha de trigo. Depois de assada, vire ainda quente num pano de prato úmido. Espalhe o doce de leite sobre esta massa e, com ajuda do pano de prato, enrole o rocambole. Depois de enrolado, a borda deve ficar para baixo. Cubra com doce de leite e polvilhe coco ralado.",
      "observacoes": "",
      "tempo_preparo": "60 min",
      "porcoes": "10",
      "img": "9.jpg",
      "id": 9
    },
    {
      "titulo": "Pudim de leite condensado",
      "ingredientes": [
        "1 lata de leite condensado",
        "1 lata de leite",
        "3 ovos inteiros",
        "Calda:",
        "1 xícara (chá) de açúcar",
        "1/2 xícara de água"
      ],
      "modo_preparo": "Pudim:\nPrimeiro, bata bem os ovos no liquidificador. Acrescente o leite condensado e o leite, e bata novamente.\nCalda:\nDerreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar. Coloque em uma forma redonda e despeje a massa do pudim por cima. Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água. Espete um garfo para ver se está bem assado. Deixe esfriar e desenforme.",
      "observacoes": "Dica: para a calda do seu pudim de leite condensado dar certo, fique sempre com a proporção de meia medida de água para uma medida de açúcar.\nPor exemplo, se você utilizar 1 xícara de chá de açúcar, a medida de água será de apenas 1/2 xícara (chá). Se você fizer um pudim maior, pode usar 2 xícaras (chá) de açúcar para 1 xícara de água. Seguindo essa dica, não tem erro!\nGosta de pudim de leite condensado sem furinhos? Confira duas dicas para garantir que ele fique bem lisinho:\n\nQuando for colocar a massa do pudim na forma, use uma peneira;\nNunca asse o pudim de leite condensado em forno alto e tampe-o com papel-alumínio.\n",
      "tempo_preparo": "60 min",
      "porcoes": "8",
      "img": "8.jpg",
      "id": 8
    },
    {
      "titulo": "Pastel de Bélem ",
      "ingredientes": [
        "50 g de farinha de trigo",
        "Água com uma pitada de sal",
        "150 g de manteiga ou margarina",
        "1 gema",
        "80 g de maizena",
        "1 litro de creme de leite",
        "12 gemas",
        "300 g de açúcar",
        "Baunilha líquida",
        "Casca de limão (raspas)\n\n"
      ],
      "modo_preparo": "Massa \nSobre o mármore, faça um monte de farinha. Faça um buraco no meio e coloque uma gema e água o suficiente para obter uma massa maleável. Abra a massa e cubra com com 50 g de manteiga ou margarina. Dobre de tal maneira a obter três camadas de massa (dobre uma parte sobre o meio e a outra por cima). Repita essa operação duas vezes, sempre espalhando 50 gramas de margarina ou manteiga. Abra novamente, espalhe a manteiga e enrole como se fosse um rocambole. Corte o rocambole em fatias de 2 centímetros de grossura. Estenda cada rodela no fundo de uma forminha pequena, forrando também as laterais.\nRecheio \nNuma panela junte a maizena, o creme de leite, as gemas e metade do açúcar. Leve ao fogo até ferver. Adicione o resto do açúcar, a baunilha líquida (algumas gotas) e as raspas de limão. mexa bem e leve à fervura novamente. Desligue e coloque sobre as rodelas de massa. Leve as forminhas ao forno médio preaquecido até que estejam bem sequinhas.\n",
      "observacoes": "Dicas: Sirva os pasteizinhos quentes com açúcar em pó e canela. Mesmo frio são incrivelmente deliciosos.\n",
      "tempo_preparo": "60 min ",
      "porcoes": "20",
      "img": "7.jpg",
      "id": 7
    },
    {
      "titulo": "Lasanha de Frango",
      "ingredientes": [
        "1 peito de frango",
        "500 g de queijo muçarela fatiado",
        "400 g de presunto fatiado",
        "1 pacote médio de massa para lasanha (direto ao forno",
        " sem cozimento prévio)",
        "1 pote de requeijão cremoso",
        "2 caldos de galinha (ou tempero completo sabor galinha)",
        "2 copos de leite",
        "1 caixa de creme de leite",
        "2 colheres de farinha",
        "3 colheres de manteiga",
        "1 cebola média"
      ],
      "modo_preparo": "Molho:\nEm uma panela, faça um creme homogêneo com as 2 colheres de farinha e 2 colheres de manteiga (reserve 1 colher de manteiga). Acrescente o leite, 1 caldo de galinha e mexa constantemente. Retire do fogo e acrescente o creme de leite, reserve.\n\nFrango:\nCozinhe o peito de frango em água (sem óleo), após cozido, desfie-o. Pique a cebola em pedaços pequenos, coloque em uma panela e doure com a manteiga. Acrescente o frango e o caldo de galinha, mexa sempre até o frango ficar totalmente dourado\n\nMontagem:\nEm um refratário, coloque 2 conchas de molho. Faça a base com massa de lasanha, cubra com 1 camada de presunto, 1 de queijo e 1 de frango (nessa ordem). Sobre o frango, coloque 1 camada de requeijão e 2 conchas de molho. Cubra o requeijão com 1 camada de presunto, 1 camada de queijo e 1 camada de massa, coloque molho. Repita esse processo até faltar cerca de 2,5 cm para chegar na borda do refratário. Para finalizar, cubra a lasanha com muito queijo, requeijão e molho. Asse por, aproximadamente, 20 minutos em fogo baixo.",
      "observacoes": "Essa receita de lasanha de frango garante um prato supercremoso e delicioso. O segredo está no molho branco e no queijo, por isso, para que seu prato fique perfeito, adicione o frango desfiado bem sequinho para não soltar água. Dessa maneira, sua lasanha de frango com molho branco vai ficar perfeita!\nSe quiser fazer uma lasanha de frango simples, invista em um recheio de frango bem temperado e molhadinho. Você pode usar molho de tomate e manjericão como ingredientes para sua lasanha de frango, por exemplo!",
      "tempo_preparo": "45 min",
      "porcoes": "4",
      "img": "6.jpg",
      "id": 6
    },
    {
      "titulo": "Feijoada",
      "ingredientes": [
        "1 Kg de feijão preto",
        "100 g de carne seca",
        "70 g de orelha de porco 70 g de rabo de porco",
        "70 g de pé de porco",
        "100 g de costelinha de porco",
        "50 g de lombo de porco",
        "100 g de paio",
        "150 g de linguiça portuguesa",
        "2 cebolas grandes picadinhas",
        "1 maço de cebolinha verde picadinha",
        "3 folhas de louro",
        "6 dentes de alho",
        "Pimenta do reino a gosto",
        "1 ou 2 laranjas",
        "40 ml de de pinga",
        "Sal se precisar"
      ],
      "modo_preparo": "Coloque as carnes de molho por 36 horas ou mais, vá trocando a água várias vezes, se for ambiente quente ou verão, coloque gelo por cima ou em camadas frias. Coloque para cozinhar passo a passo: as carnes duras, em seguida as carnes moles. Quando estiver mole coloque o feijão, e retire as carnes. Finalmente tempere o feijão.",
      "observacoes": "A feijoada é um prato típico do Rio de Janeiro e é muito consumido em todo Brasil. Apesar de ser um prato com muitas variações, a típica feijoada completa é aquela que leva todas as carnes salgadas (costela, linguiças variadas, carne seca, pé, orelha, rabo, lombo, bacon) e é servira com rodelas de laranja, couve refogada no alho, arroz e farofa.  Por ser um prato considerado pesado, há quem prefira fazer a feijoada simples: para isso, você pode apostar em usar apenas linguiça paio, bacon e carne seca, deixando seu prato de feijoada mais leve sem perder sabor.",
      "tempo_preparo": "130 min",
      "porcoes": "20",
      "img": "5.jpg",
      "id": 5
    },
    {
      "titulo": "Carne de panela",
      "ingredientes": [
        "00 g de coxão mole cortado em bifes",
        "1 cebola ralada",
        "1 dente de alho amassado",
        "1/2 xícara de óleo",
        "sal e pimenta-do-reino a gosto",
        "1 colher de sopa de salsinha picada",
        "500 ml de água quente",
        "1/2 lata de massa de tomate",
        "1 pimentão verde picado",
        "1 tomate sem sementes picado",
        "1 cenoura pequena picada",
        "orégano a gosto"
      ],
      "modo_preparo": "Em uma panela de pressão, coloque o óleo junte a cebola, alho e refogue bem. Acrescente a carne frite por 5 minutos mexendo bem, tomate, pimentão, massa de tomate, cenoura e a seguir acrescente a água orégano. Deixe cozinhar por 30 minutos contando o início da fervura, assim que a carne estiver cozida retire do fogo, misture a salsinha e sirva em seguida com arroz branco",
      "observacoes": " ",
      "tempo_preparo": "50 min",
      "porcoes": "5",
      "img": "4.jpg",
      "id": 4
    }
  ]*/
}
const client = new Client({
  user: 'qrszxpxr',
  host: 'babar.db.elephantsql.com',
  database: 'ifreceitas',
  password: 'cVRLlu5UOfsVSPEvp38HQtzPY',
  port: 5432,
})
client.connect()

export { getReceita, addReceita, getLast12 }
import { useRef, useState } from "react"
import { Button, Input, Textarea } from "reactstrap"
const axios = require('axios').default;

function MyApp() {
  var [tem_imagem, setTem_imagem] = useState(false);
  var [img, setImg] = useState("");
  var [file, setFile] = useState({name: ""});
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState("");
  const [titulo, setTitulo] = useState();
  const [ingredientes, setIngredientes] = useState();
  const [modo_preparo, setModo_preparo] = useState();
  const [observacoes, setObservacoes] = useState();
  const [tempo_preparo, setTempo_preparo] = useState();
  const [porcoes, setPorcoes] = useState();
  async function clico() {
    if (tem_imagem == true) {
      await axios.post('/api/teste2', { titulo, ingredientes: ingredientes.split("\n"), modo_preparo, observacoes, tempo_preparo, porcoes, img }).then(res => {
        const config = {
          headers: { 'content-type': 'multipart/form-data' },
          onUploadProgress: (event) => {
            setProgress(Math.round((event.loaded * 100) / event.total))
            setState(`${Math.round((event.loaded * 100) / event.total)}%`);
          },
        };
        const formData = new FormData();
        formData.append("thumb", file, `${res.data.id}.${file.name.split(".")[file.name.split(".").length - 1]}`)
        axios.post('/api/teste', formData, config).then(response => {
          console.log('response', response.data);
          setState(`${res.data.id} salvo : )`)
        })
      })
        .catch(err => {
          setState(`${err}`)
        })
    } else {
      setState(`Adicione uma imagem!`)
    }
  }
  function onAddImage(event) {
    if (event.target.files[0]) {
      setTem_imagem(true)
      setFile(event.target.files[0])
      setImg(`${event.target.files[0].name.split(".")[event.target.files[0].name.split(".").length - 1]}`)
    } else {
      setTem_imagem(false)
    }
  }//geomorfologia codigo florestal hierarquia urbana mercado de trabalho
  return <section className="container">
    <Input className="mb-2" placeholder="Titulo" onChange={event => setTitulo(event.target.value)}></Input>
    <Input className="mb-2" type="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Ingredientes (Separados por linha)" onChange={event => setIngredientes(event.target.value)}></Input>
    <Input className="mb-2" type="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Modo de preparo" onChange={event => setModo_preparo(event.target.value)}></Input>
    <Input className="mb-2" type="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Observações" onChange={event => setObservacoes(event.target.value)}></Input>
    <Input className="mb-2" placeholder="Tempo de preparo" onChange={event => setTempo_preparo(event.target.value)}></Input>
    <Input className="mb-2" placeholder="Porções" onChange={event => setPorcoes(event.target.value)}></Input>
    <Input
      className="mb-2"
      accept="image/png, image/jpeg"
      multiple={false}
      onChange={onAddImage}
      type="file"
    />
    <br />
    <Button className="mb-2" onClick={clico}>Salvar</Button>
    <p>{state}</p>
    <div className="border border-dark rounded" style={{width:"300px", height:"20px" }}>
      <div style={{ transitionDuration: ".1s", height:"100%",width:`${progress}%`, backgroundColor: "green"}}></div>
    </div>
  </section>
}

export default MyApp
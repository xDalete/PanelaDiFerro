import { useRef, useState } from "react"
import { Button, Input } from "reactstrap"
const axios = require('axios').default;

function MyApp() {
  var tem_imagem = false;
  var img = ""
  var file = { name: "" }
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
            setState(`Current progress: ${Math.round((event.loaded * 100) / event.total)}`);
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
      tem_imagem = true
      file = event.target.files[0]
      img = `${file.name.split(".")[file.name.split(".").length - 1]}`
      console.log(img)
    } else {
      tem_imagem = false
    }
  }
  return <section className="container">
    <Input placeholder="Titulo" onChange={event => setTitulo(event.target.value)}></Input>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingredientes (Separados por linha)" onChange={event => setIngredientes(event.target.value)}></textarea>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Modo de preparo" onChange={event => setModo_preparo(event.target.value)}></textarea>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Observações" onChange={event => setObservacoes(event.target.value)}></textarea>
    <Input placeholder="Tempo de preparo" onChange={event => setTempo_preparo(event.target.value)}></Input>
    <Input placeholder="Porções" onChange={event => setPorcoes(event.target.value)}></Input>
    <input
      accept="image/png, image/jpeg"
      multiple={false}
      onChange={onAddImage}
      type="file"
    />
    <br />
    <Button onClick={clico}>Salvar</Button>
    <p>{state}</p>
  </section>
}

export default MyApp
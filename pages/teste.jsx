import { useRef, useState } from "react"
import { Button, Input, Textarea } from "reactstrap"
const axios = require('axios').default;

function MyApp() {
  console.log("sim")
  var [disabled, setDisabled] = useState(false);
  var [tem_imagem, setTem_imagem] = useState(false);
  var [img, setImg] = useState("");
  var [file, setFile] = useState({ name: "" });
  const [progress, setProgress] = useState(0);
  const [id, setId] = useState(0);
  const [erro, setErro] = useState("");
  const [titulo, setTitulo] = useState();
  const [ingredientes, setIngredientes] = useState("");
  const [modo_preparo, setModo_preparo] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [tempo_preparo, setTempo_preparo] = useState("");
  const [porcoes, setPorcoes] = useState("");
  async function clico() {
    if (tem_imagem == true) {
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (event) => {
          setProgress(Math.round((event.loaded * 100) / event.total))
        },
      };
      const formData = new FormData();
      formData.append("thumb", file)
      formData.append("titulo", titulo)
      formData.append("ingredientes", ingredientes)
      formData.append("modo_preparo", modo_preparo)
      formData.append("observacoes", observacoes)
      formData.append("tempo_preparo", tempo_preparo)
      formData.append("porcoes", porcoes)
      formData.append("img", img)

      axios.post('/api/teste', formData, config).then(response => {
        console.log(response.data)
        setDisabled(true)
        setId(response.data.id)
        setErro(``)
      })
        .catch(err => {
          (err == "AxiosError: Request failed with status code 400") ? setErro(`Alguma informação não foi preenchida.`) : null
        })
    } else {
      setErro(`Adicione uma imagem!`)
    }
  }
  function onAddImage(event) {
    if (event.target.files[0]) {
      setTem_imagem(true)
      setFile(event.target.files[0])
      setImg(`${event.target.files[0].name.split(".")[event.target.files[0].name.split(".").length - 1]}`)
      setErro(``)
    } else {
      setTem_imagem(false)
    }
  }
  return <section className="container">
    <Input disabled={disabled} className="mb-2" placeholder="Titulo" onChange={event => setTitulo(event.target.value)}></Input>
    <Input disabled={disabled} className="mb-2" type="textarea" rows="5" placeholder="Ingredientes (Separados por linha)" onChange={event => setIngredientes(event.target.value)}></Input>
    <Input disabled={disabled} className="mb-2" type="textarea" rows="5" placeholder="Modo de preparo" onChange={event => setModo_preparo(event.target.value)}></Input>
    <Input disabled={disabled} className="mb-2" type="textarea" rows="5" placeholder="Observações" onChange={event => setObservacoes(event.target.value)}></Input>
    <Input disabled={disabled} className="mb-2" placeholder="Tempo de preparo" onChange={event => setTempo_preparo(event.target.value)}></Input>
    <Input disabled={disabled} className="mb-2" placeholder="Porções" onChange={event => setPorcoes(event.target.value)}></Input>
    <Input
      disabled={disabled}
      className="mb-2"
      accept="image/png, image/jpeg"
      multiple={false}
      onChange={onAddImage}
      type="file"
    />
    <br />
    <Button disabled={disabled} className="mb-2" onClick={clico}>Salvar</Button>
    <br />
    <p style={{ display: `${erro.length > 0 ? 'inline' : 'none'}`, color: 'red' }}>{erro}</p>
    <a href={`/receita/${id}`} style={{ display: `${id > 0 ? 'inline' : 'none'}`, transitionDuration: ".1s" }}>
      <p>{titulo}</p>
    </a>
    <div className="border border-dark rounded" style={{ width: "300px", height: "20px" }}>
      <div style={{ transitionDuration: ".1s", height: "100%", width: `${progress}%`, backgroundColor: "green" }}></div>
    </div>
  </section>
}

export default MyApp
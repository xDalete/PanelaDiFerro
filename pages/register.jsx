import { useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../styles/pages/Register.module.scss';
const axios = require('axios').default;

export default function MyApp() {
    // let [disabled, setDisabled] = useState(false)
    // let title = useRef("");
    // let preparingTime = useRef(0);
    // let portions = useRef(0);
    // let ingredients = useRef("");
    // let preparationMode = useRef("");
    // let observations = useRef("");
    // let images = useRef(null);
    var [disabled, setDisabled] = useState(false);
    var [tem_imagem, setTem_imagem] = useState(false);
    var [img, setImg] = useState("");
    var [file, setFile] = useState({ name: "" });
    const [progress, setProgress] = useState(0);
    const [id, setId] = useState(0);
    const [erro, setErro] = useState("");
    const [titulo, setTitulo] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [modo_preparo, setModo_preparo] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [tempo_preparo, setTempo_preparo] = useState("");
    const [porcoes, setPorcoes] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (titulo.length < 4) return
        if (ingredientes.split("\n").length <= 2) {
            return
        }
        if (modo_preparo.length < 50) return
        if (img === null) {
            return
        } else {
            const config = {
                headers: { 'content-type': 'multipart/form-data' },
                onUploadProgress: (event) => {
                  setProgress(Math.round((event.loaded * 100) / event.total))
                },
              };
              const formData = new FormData();
              formData.append("thumb", img)
              formData.append("titulo", titulo)
              formData.append("ingredientes", ingredientes.trim().split("\n"))
              formData.append("modo_preparo", modo_preparo)
              formData.append("observacoes", observacoes)
              formData.append("tempo_preparo", tempo_preparo)
              formData.append("porcoes", porcoes)
        
              axios.post('/api/register', formData, config).then(response => {
                setDisabled(true)
                setId(response.data.id)
                setErro(``)
              })
                .catch(err => {
                  (err == "AxiosError: Request failed with status code 400") ? setErro(`Alguma informação não foi preenchida.`) : null
                })
        }
    }

    return (
        <section className='container'>
            <Card className="p-4 shadow">
                <CardHeader className="py-2">
                    <CardTitle style={{ color: "rgb(255, 136, 0)", marginBottom: "0" }}>Cadastrar Receita</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <div className='row'>
                            <div className='col-md-5'>
                                <FormGroup>
                                    <div className='my-0 d-flex justify-content-start'>
                                        <Label className={`me-2 ${styles.titlesColor}`}>Título</Label>
                                        <i className={`medium material-icons ${styles.themeColor}`}>title</i>
                                    </div>
                                    <Input disabled={disabled} type="text" name="titulo" placeholder="Ex.: Café com Creme de Avelã" onChange={event => setTitulo(event.target.value)} required></Input>
                                </FormGroup>
                                <div className='row'>
                                    <FormGroup style={{ width: "50%" }}>
                                        <div className='my-0 d-flex justify-content-start'>
                                            <Label className={`me-2 ${styles.titlesColor}`}>Tempo de Preparo</Label>
                                            <i className={`medium material-icons ${styles.themeColor}`}>access_alarm</i>
                                        </div>
                                        <Input  disabled={disabled} type="number" name="tempo_preparo" placeholder="Tempo em minutos" onChange={event => setTempo_preparo(event.target.value)} required></Input>
                                    </FormGroup>
                                    <FormGroup style={{ width: "50%" }}>
                                        <div className='my-0 d-flex justify-content-start'>
                                            <Label className={`me-2 ${styles.titlesColor}`}>Porções</Label>
                                            <i className={`medium material-icons ${styles.themeColor}`}>free_breakfast</i>
                                        </div>
                                        <Input  disabled={disabled} type="number" name="porcoes" placeholder="Número de porções" onChange={event => setPorcoes(event.target.value)} required></Input>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <FormGroup>
                                    <div className='my-0 d-flex justify-content-start'>
                                        <Label className={`me-2 ${styles.titlesColor}`}>Ingredientes</Label>
                                        <i className={`medium material-icons ${styles.themeColor}`}>format_list_bulleted</i>
                                    </div>
                                    <Input disabled={disabled} type="textarea" name="ingredientes" rows="5" placeholder={`Insira os ingredientes separados por linhas. Ex.:\n2 colheres de sal\n4 colheres de sopa de pó royal\n1 lata de milho`} onChange={event => setIngredientes(event.target.value)} required></Input>
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormGroup>
                                    <div className='my-0 d-flex justify-content-start'>
                                        <Label className={`me-2 ${styles.titlesColor}`}>Modo de Preparo</Label>
                                        <i className={`medium material-icons ${styles.themeColor}`}>cake</i>
                                    </div>
                                    <Input  disabled={disabled} type="textarea" name="modo_preparo" rows="5" placeholder="Descrição da receita" onChange={event => setModo_preparo(event.target.value)} required></Input>
                                </FormGroup>
                            </div>
                            <div className='col-md-6'>
                                <FormGroup>
                                    <div className='my-0 d-flex justify-content-start'>
                                        <Label className={`me-2 ${styles.titlesColor}`}>Observações</Label>
                                        <i className={`medium material-icons ${styles.themeColor}`}>description</i>
                                    </div>
                                    <Input  disabled={disabled} type="textarea" name="observacoes" rows="5" placeholder="Informações adicionais *(opcional)" onChange={event => setObservacoes(event.target.value)}></Input>
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='my-0 d-flex justify-content-start'>
                                    <Label className={`me-2 ${styles.titlesColor}`}>Imagem</Label>
                                    <i className={`medium material-icons ${styles.themeColor}`}>image</i>
                                </div>
                                <Input  disabled={disabled} type="file" name="imagem" onChange={event => setImg(event.target.value)} required></Input>
                            </div>
                            <div className='col-md-2' style={{ marginTop: "2em" }}>
                                <button type="submit" className='btn btn-success w-100' onSubmit={handleSubmit()}>Salvar</button>
                            </div>
                            <div className='col-md-4' style={{ marginTop: "2.5em" }}>
                                <div className="border border-dark rounded" style={{ width: "300px", height: "25px" }}>
                                    <div style={{ transitionDuration: ".1s", height: "100%", width: `#%`, backgroundColor: "none" }}></div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </section>
    );
}
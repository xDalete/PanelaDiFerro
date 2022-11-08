import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../styles/pages/Register.module.scss';

export default function MyApp() {
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
                                    <Input type="text" placeholder="Ex.: Café com Creme de Avelã"></Input>
                                </FormGroup>
                                <div className='row'>
                                    <FormGroup style={{ width: "50%" }}>
                                        <div className='my-0 d-flex justify-content-start'>
                                            <Label className={`me-2 ${styles.titlesColor}`}>Tempo de Preparo</Label>
                                            <i className={`medium material-icons ${styles.themeColor}`}>access_alarm</i>
                                        </div>
                                        <Input type="number" placeholder="Tempo em minutos"></Input>
                                    </FormGroup>
                                    <FormGroup style={{ width: "50%" }}>
                                        <div className='my-0 d-flex justify-content-start'>
                                            <Label className={`me-2 ${styles.titlesColor}`}>Porções</Label>
                                            <i className={`medium material-icons ${styles.themeColor}`}>free_breakfast</i>
                                        </div>
                                        <Input type="number" placeholder="Número de porções"></Input>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <FormGroup>
                                    <div className='my-0 d-flex justify-content-start'>
                                        <Label className={`me-2 ${styles.titlesColor}`}>Ingredientes</Label>
                                        <i className={`medium material-icons ${styles.themeColor}`}>format_list_bulleted</i>
                                    </div>
                                    <Input type="textarea" rows="5" placeholder={`Insira os ingredientes separados por linhas. Ex.:\n2 colheres de sal\n4 colheres de sopa de pó royal\n1 lata de milho`}></Input>
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
                                    <Input type="textarea" rows="5" placeholder="Descrição da receita"></Input>
                                </FormGroup>
                            </div>
                            <div className='col-md-6'>
                                <FormGroup>
                                    <div className='my-0 d-flex justify-content-start'>
                                        <Label className={`me-2 ${styles.titlesColor}`}>Observações</Label>
                                        <i className={`medium material-icons ${styles.themeColor}`}>description</i>
                                    </div>
                                    <Input type="textarea" rows="5" placeholder="Informações adicionais *(opcional)"></Input>
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='my-0 d-flex justify-content-start'>
                                    <Label className={`me-2 ${styles.titlesColor}`}>Imagem</Label>
                                    <i className={`medium material-icons ${styles.themeColor}`}>image</i>
                                </div>
                                <Input type="file"></Input>
                            </div>
                            <div className='col-md-2' style={{ marginTop: "2em" }}>
                                <button className='btn btn-success w-100'>Salvar</button>
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
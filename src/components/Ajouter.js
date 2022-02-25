import { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import {useFormik} from "formik"
import { show } from "react-modal/lib/helpers/ariaAppHider";
import axios from "axios";

export const Ajouter =(props)=>{
   
   const formik = useFormik({
        initialValues: {
        //   id: "",
            nom: '',
            prenom: '',
            numero: '',
            },
        onSubmit:(values)  => {
           var  student=values
           axios.post("http://localhost:3333/students",student)
          
          
            show=false
            formik.resetForm()
            props.hideModala()
            },
        
    })
        return(
            <>
                  <Modal show={props.showa} >
                    <Modal.Header>
                        <Modal.Title>Ajouter contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="col-lg-12 justify-content-center" onSubmit={formik.handleSubmit}>
{/*                             
                                <Form.Group className="mb-6"  >
                                    <Form.Label>id</Form.Label>
                                    <Form.Control type="number" placeholder="id de l'etudiant" id="id" nom="id" onChange={formik.handleChange} value={formik.values.id}/>

                                </Form.Group> */}
                                <Form.Group className="mb-6" >
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" id="nom"  nom="nom" onChange={formik.handleChange} value={formik.values.nom} />

                                </Form.Group>
                                <Form.Group className="mb-6" >
                                    <Form.Label>Prenom</Form.Label>
                                    <Form.Control type="text" placeholder="Enter prenom" id="prenom" nom="prenom" onChange={formik.handleChange} value={formik.values.prenom}/>

                                </Form.Group>
                                <Form.Group className="mb-6" >
                                    <Form.Label>Numero de telephone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Numero" id="numero" nom="numero" onChange={formik.handleChange} value={formik.values.numero}/>

                                </Form.Group>
                                <br/>
                                <Button type="submit" className="mt-6 " >Submit</Button>
                            
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.hideModala}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={props.hideModal}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
import { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import axios from "axios";

 export const Modale =(props)=> {

   
    const formik = useFormik({
                initialValues: {
                    id: props.studentgoto[0].id,
                    nom: props.studentgoto[0].nom,
                    prenom: props.studentgoto[0].prenom,
                    numero: props.studentgoto[0].numero,
                    },
       
        onSubmit:(values)  => {
           var  student=values
       axios.put("http://localhost:3333/students/"+values.id,student)
        props.Rerender()
         props.hideModal()
         formik.resetForm()
            
        }
        
    })
// console.log(formik)
  
        return (

            <>
          
                <Modal show={props.show} >
                    <Modal.Header>
                        <Modal.Title>editer contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="col-lg-12 justify-content-center" onSubmit={formik.handleSubmit}>
                         
                                    <Form.Control type="hidden" id="id" onChange={formik.handleChange} value={formik.values.id} />

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
                                <br></br>
                                <Button type="submit" className="mt-6 ">Submit</Button>
                            
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.hideModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

export default Modale
import axios from "axios";
import { Component } from "react";
import { Ajouter } from "./Ajouter";
import { Modale } from "./Modale";



export class ListEtudant extends Component {
  constructor() {
    super()

    this.state = {
      students: [],
      searchst: "",
      show: false,
      showa: false,
      onestd:[{ id: 0, prenom: "nean ", nom: "nean", numero: "nean" }] ,
      change:false
    }

    
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.wahlouValues=this.wahlouValues.bind(this)
    this.onestudent=this.onestudent.bind(this)
  }
  componentDidMount() {
    axios.get("http://localhost:3333/students").then(res => {
      
      this.setState({
        students: res.data
      })
    })
  }
  // componentDidUpdate() {  

  //   axios.get("http://localhost:3333/students").then(res => {
  //     this.setState({
  //       students: res.data
  //     })
  //   })
  
  // }
  Rerender = () => {
    this.forceUpdate()
 }

  onestudent(id){
  this.state.onestd= this.state.students.filter(
      student =>
        student.id == id
    )

  }

  showModal = () => {
    this.setState({ show: true , change:true});
    
  };

  hideModal = () => {
    this.setState({ show: false });
    this.getstudent()
  };

  showModala = () => {
    this.setState({ showa: true });
    
  };

  hideModala = () => {
    this.setState({ showa: false });
    this.getstudent()
  };
getstudent(){
  axios.get("http://localhost:3333/students").then(res => {
    this.setState({
      students: res.data
    })
  })
}
sigou(id){
  axios.delete("http://localhost:3333/students/"+id)
 this.getstudent()
}

handlchange(e){
  this.setState({searchst:e.target.value})
  axios.get("http://localhost:3333/students?q="+e.target.value).then(res => {
    this.setState({
      students: res.data
    })
  })
}
// diekh(){
//   console.log(this.state.searchst)
// }
render(){
  
  const student = this.state.students.map((student) =>
    <tr key={student.id}><td>{student.id}</td><td>{student.nom}</td><td>{student.prenom}</td><td>{student.numero}</td><td>

      <div className="justify-content-center d-flex">
        <a className="text-primary m-2 " onClick= {() => { this.showModal(student.id) ;this.onestudent(student.id);}} data-toggle="modal" data-target="#modelId" style={{ cursor:"pointer" }}><i className="fa fa-pencil mr-1"></i> Edit</a>

        <a className="m-2 text-danger " href="#" onClick={this.sigou.bind(this, student.id)} ><i className="fa fa-trash mr-1"></i> Delete</a>
      </div>
    </td></tr>
  )
  return (
    <>
     
             

    <div className='row'>

            <form className="form-inline my-2 my-lg-0 w-25 p-3 d-flex text-center">
                <input className="form-control mr-sm-2" type="search" name="searchst" value={this.state.searchst} onChange={this.handlchange.bind(this)}  id="searchst" placeholder="Search" aria-label="Search"/> &nbsp;
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
            </form>

      <table className="table mt-20 col-md-9 table table-hove">
        <thead className="">
          <tr> {/*   alpap */}
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>numero tel</th>
            <th>action 	&nbsp;	&nbsp; <button type="button" className="btn btn-success" onClick={this.showModala.bind(this)}><i className="fa fa-add mr-1"></i> Ajouter</button></th>
          </tr>
        </thead>
        <tbody>

          {student}


        </tbody>
      </table>
      {this.state.show && <Modale show={this.state.show} hideModal={this.hideModal} studentgoto={this.state.onestd} students={this.state.students} Rerender={this.getstudent}/>}
      <Ajouter showa={this.state.showa} hideModala={this.hideModala} students={this.state.students}/>
      {/*            
               <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                 <div className="modal-dialog" role="document">
                   <div classNam e="modal-content">
                       <div className="modal-header">
                           <h5 className="modal-title">edit etudiants</h5>
                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                             </button>
                         </div>
                     <div className="modal-body">
                       <div className="container-fluid">
                       <div className="form-row">
                          <div className="form-group col-md-6">
                                <label htmlFor="id">id</label>
                                <input type="text" className="form-control" id="id" placeholder="id"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="nom">nom</label>
                                <input type="text" className="form-control" id="nom" placeholder="nom"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="prenom">prenom</label>
                                <input type="text" className="form-control" id="prenom" placeholder="prenom"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Numero">numero telephone</label>
                                <input type="text" className="form-control" id="Numero" placeholder="numero"/>
                            </div>
                        </div>
                       </div>
                     </div>
                     <div className="modal-footer">
                       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                       <button type="button" className="btn btn-primary">Enregistrer</button>
                     </div>
                   </div>
                 </div>
               </div>
                */}

    </div>
    </>
  )
}
}
export default ListEtudant
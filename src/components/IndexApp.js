import {Component} from 'react'
import { BrowserRouter as Router,Link} from 'react-router-dom';

export class IndexApp extends Component{
    
    render(){
			
        return(
          <>
          <style>
          </style>
           <header>
				<nav className="navbar navbar-expand-lg">
					<div className="container">
						<Link className="navbar-brand " to="/"><i className="fa fa-graduation-cap fa-lg mr-2"></i>Ganndo</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-center" id="nvbCollapse">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item pl-1">
									<Link className="nav-link" to="/"><i className="fa fa-home fa-fw mr-1"></i>index</Link>
								</li>
								<li className="nav-item active pl-1">
									<Link className="nav-link" to="/listeEtudiants"><i className="fa fa-th-list fa-fw mr-1"></i>Liste des etudiants</Link>
								</li>
							
								<li className="nav-item pl-1">
									<Link className="nav-link" to="/connect"><i className="fa fa-user-plus fa-fw mr-1"></i>Connexion </Link>
								</li>
								<li className="nav-item pl-1">
									<Link className="nav-link" to="/deconnection"><i className="fa fa-sign-in fa-fw mr-1"></i>Deconnection</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			
	
         </>
		
        )
    }
}
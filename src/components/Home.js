import React, { Component } from "react";
import image from '../image/bg01.jpg'

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = { n: 0 }
        this.diaguou = null

    }
    // componentDidMount(){
    // 	this.diaguou=window.setInterval(
    // 		this.dilou.bind(this)

    // 	, 1000);
    // }
    // componentWillUnmount(){
    // 	window.clearInterval(this.diaguou);

    // }

    bayedou() {
        this.setState({ n: this.state.n + 1 })
    }
    Oustou() {
        this.setState({ n: this.state.n - 1 })
    }
    render() {
        return (
            <>
                <img src={image} className="img-fluid" alt="" />
                <div className="row">
                    <div className="col-lg-3">
                        {this.state.n}<button type="button" onClick={this.bayedou.bind(this)} className="btn btn-primary"> clicker pour ajouter</button>
                    </div>
                    <div className="col-lg-3">
                    {this.state.n} <button type="button" onClick={this.Oustou.bind(this)} className="btn btn-danger"> clicker pour diminuer</button>
                    </div>
                </div>
            </>

        )
    }
}
export default Home
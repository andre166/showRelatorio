import React, { Component } from 'react';
import Tabela from './tabela';

class ShowRelatorio extends Component{

    constructor( props ){
        
        super( props );
    
        this.state = {
            relatorio: '',
        }
        
    }
    
    componentDidMount(){
    
        this.setState({
          relatorio: this.props.relatorio
        })

    }
    

    render(){
        return(
            <div>
                {this.state.relatorio.length === 0 ? "" :
                    <Tabela relatorio={this.state.relatorio}/>
                }
            </div>
        )
    }
}

export default ShowRelatorio;

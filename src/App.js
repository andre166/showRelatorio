import React, {Component} from 'react';
import ShowRelatorio from './showRelatorio';
import axios from 'axios';
import arrayTabela from './showRelatorio/array';

const chamarApi = async () => {
  const response = await axios.get('https://api.mockaroo.com/api/343cabd0?count=40&key=609f0780')
  return response.data;
}

class App extends Component {

  constructor( props ){
        
    super( props );

    this.state = {
        relatorio: '',
    }
    
}

componentDidMount(){

  const pegarResp = async() => {
    
    let resp = await chamarApi()

    this.setState({
      relatorio: resp
    })

  }

  // pegarResp()

}


  render(){
    return (
      <>
      {/* {this.state.relatorio.length === 0 ? "" : */}
        <ShowRelatorio relatorio={arrayTabela}/>
      {/* } */}
      </>
    );
  }
}

export default App;

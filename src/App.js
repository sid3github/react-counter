import React ,{Component} from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemClick: 0
        };
        }

        addItem = () => {
            this.setState({
                itemClick: this.state.itemClick + 1
            });
        };
        delItem = () => {
            this.setState({
                itemClick: this.state.itemClick - 1

            });
        };


    render(){
        return(
          <div className='counter'>
              <h1>Increment/Decrement counter!</h1>
              <button  className='up' onClick={this.addItem}>Up</button>
              <button className='down' onClick={this.delItem}>Down</button>
              <h2>Counter increment/decrement by: <strong>{this.state.itemClick}</strong></h2>
          </div>
        );
    };

}

export default App;
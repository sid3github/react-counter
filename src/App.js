import React ,{Component} from 'react';
import PropTypes from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemClick: 0
        };

        this.state.propTypes = {
            itemClick: PropTypes.number
        };

        };

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
        resItem = () => {
           this.setState({
               itemClick: this.state.itemClick = 0
           })
        };


    render(){
        return(
          <div className='counter'>
              <h1>COUNTER!</h1>
              <button  className='up' onClick={this.addItem}>Up</button>
              <button className='down' onClick={this.delItem}>Down</button>
              <button className='res' onClick={this.resItem}>Reset</button>
              <h2>Count by: <strong>{this.state.itemClick}</strong></h2>
          </div>
        );
    };

}

export default App;
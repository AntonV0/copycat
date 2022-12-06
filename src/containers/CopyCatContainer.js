import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat';

export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  handleChange(e) {
    this.setState({input: e.target.value})
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.input;
    const handleChange = this.handleChange;

    return (
      <CopyCat
        copying={copying}
        toggleTape={toggleTape}
        value={value}
        handleChange={handleChange}
        name={'Bob'}
      />
    )
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
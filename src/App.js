import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardTrunfo: false,
  };

  onInputChange = (event) => {
    this.setState({ cardName: event.target.value }, () => {
      this.setState({
        cardTrunfo: 'Super Trunfo',
      });
    });
  };

  render() {
    const { cardName, cardTrunfo } = this.state;
    console.log(cardTrunfo);
    return (
      <div>
        <h1>ADICIONE NOVA CARTA</h1>
        <main>
          <Form
            cardName={ cardName }
            onInputChange={ this.onInputChange }
          />
          <Card />
        </main>
      </div>
    );
  }
}

export default App;

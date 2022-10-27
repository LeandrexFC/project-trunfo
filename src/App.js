import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { cardName, cardDescription, cardRare, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const cardsName = cardName.length && cardDescription.length
    && cardRare.length && cardImage.length > 0;
    const maxValue = 210;
    const totalSum = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10) <= maxValue;
    const maxAttr = 90;
    const minAttr = -1;
    const maxAttr01 = parseInt(cardAttr1, 10) <= maxAttr;
    const maxAttr02 = parseInt(cardAttr2, 10) <= maxAttr;
    const maxAttr03 = parseInt(cardAttr3, 10) <= maxAttr;
    const minAttr01 = parseInt(cardAttr1, 10) > minAttr;
    const minAttr02 = parseInt(cardAttr2, 10) > minAttr;
    const minAttr03 = parseInt(cardAttr3, 10) > minAttr;

    return totalSum && cardsName && maxAttr01
    && maxAttr02 && maxAttr03 && minAttr01 && minAttr02 && minAttr03;
  };

  render() {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    return (
      <div>
        <h1>ADICIONE NOVA CARTA</h1>
        <main>
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ this.validateForm() }
          />
          <Card
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
      </div>
    );
  }
}

export default App;

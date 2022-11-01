import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              name="cardName"
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <textarea
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            />
          </label>

          <label htmlFor="attr1">
            attr01
            <input
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>

          <label htmlFor="attr2">
            attr02
            <input
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>

          <label htmlFor="attr3">
            attr03
            <input
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
            />
          </label>

          <label htmlFor="img">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>

          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option value="normal"> normal</option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro</option>
            </select>
          </label>

          { !hasTrunfo ? (
            <label htmlFor="trunfo">
              Super Trybe Trunfo
              <input
                data-testid="trunfo-input"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="cardTrunfo"
              />
            </label>
          ) : <p>Você já tem um Super Trunfo em seu baralho</p> }
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

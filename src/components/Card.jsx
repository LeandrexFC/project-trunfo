import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription } = this.props;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { cardRare, cardTrunfo } = this.props;
    return (
      <>
        <p data-testid="name-card">
          { cardName }
        </p>

        <img data-testid="image-card" src={ cardImage } alt={ cardName } />

        <p data-testid="description-card">
          { cardDescription }
        </p>

        <p data-testid="attr1-card">
          { cardAttr1 }
        </p>

        <p data-testid="attr2-card">
          { cardAttr2 }
        </p>

        <p data-testid="attr3-card">
          { cardAttr3 }
        </p>

        <p data-testid="rare-card">
          { cardRare }
        </p>

        { cardTrunfo && (
          <p data-testid="trunfo-card">
            Super Trunfo
          </p>
        )}
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

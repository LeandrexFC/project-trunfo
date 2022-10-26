import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="name">
            Nome
            <input data-testid="name-input" type="text" name="name" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <textarea data-testid="description-input" name="" id="" />
          </label>

          <label htmlFor="attr1">
            attr01
            <input data-testid="attr1-input" type="number" />
          </label>

          <label htmlFor="attr2">
            attr02
            <input data-testid="attr2-input" type="number" />
          </label>

          <label htmlFor="attr3">
            attr03
            <input data-testid="attr3-input" type="number" />
          </label>
          <label htmlFor="img">
            Imagem
            <input data-testid="image-input" type="text" />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select data-testid="rare-input">
              <option value="normal"> normal</option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input data-testid="trunfo-input" type="checkbox" />
          </label>
          <button type="button" data-testid="save-button"> Salvar </button>

        </form>
      </section>
    );
  }
}

export default Form;

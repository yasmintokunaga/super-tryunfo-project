import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>

        <label htmlFor="cardName">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            className="input-text"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            className="input-text"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <section className="attr">
          <p>Atributos:</p>
          <label htmlFor="cardAttr1">
            1º:
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            2º:
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            3º:
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <label htmlFor="cardImage">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            className="input-text"
            name="cardImage"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="URL da imagem"
          />
        </label>

        <label htmlFor="cardRare">
          <span className="space-right">Raridade:</span>
          <select
            data-testid="rare-input"
            name="cardRare"
            className="input-text"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        { hasTrunfo === false
          ? (
            <label htmlFor="cardTrunfo">
              <span className="space-right">Super Tryunfo:</span>
              <input
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                id="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )
          : <p>Você já tem um Super Trunfo em seu baralho</p> }

        <button
          data-testid="save-button"
          type="button"
          className="button-save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
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

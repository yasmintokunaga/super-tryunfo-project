import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
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
      isCardList,
      onDeleteButtonClick,
    } = this.props;
    return (
      <div className="previewcard">
        <div>  
          <span><strong>Nome: </strong></span>
          <span data-testid="name-card">
            { cardName }
          </span>
        </div>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          <span><strong>Descrição: </strong></span>{ cardDescription }
        </p>
          <p><strong>Atributos:</strong></p>
        <div className="attr-card">
          <span data-testid="attr1-card"><strong>1º:</strong> { cardAttr1 }</span>
          <span data-testid="attr2-card"><strong>2º:</strong> { cardAttr2 }</span>
          <span data-testid="attr3-card"><strong>3º:</strong> { cardAttr3 }</span>
          <span data-testid="rare-card">{ cardRare }</span>
        </div>
        { cardTrunfo && <p data-testid="trunfo-card"><strong>Super Tryunfo</strong></p> }
        { isCardList
        && (
          <button
            data-testid="delete-button"
            onClick={ onDeleteButtonClick }
          >
            Excluir
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isCardList: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Card;

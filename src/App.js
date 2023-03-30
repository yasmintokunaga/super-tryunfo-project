import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    isCardList: false,
    saveCards: [],
    filterName: '',
    filterRare: '',
    filterTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.validateButtonDisabled();
    });
  };

  validateButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // isSaveButtonDisabled,
    } = this.state;

    const validateInputsText = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0;

    const MAX_ATTR = 90;
    const MAX_SUM_ATTR = 210;

    const validateAttr = cardAttr1 >= 0 && cardAttr1 <= MAX_ATTR
      && cardAttr2 >= 0 && cardAttr2 <= MAX_ATTR
      && cardAttr3 >= 0 && cardAttr3 <= MAX_ATTR;

    const validateSumAttr = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10)
      <= MAX_SUM_ATTR;

    if (validateInputsText && validateAttr && validateSumAttr) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onSaveButtonClick = () => {
    const { cardTrunfo } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo: cardTrunfo,
      isCardList: true,
    };

    this.setState((prevState) => ({
      saveCards: [...prevState.saveCards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  onDeleteButtonClick = (indexToRemove) => {
    const { saveCards } = this.state;
    if (saveCards[indexToRemove].cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    const newSaveCards = saveCards.filter((_card, index) => index !== indexToRemove);
    this.setState(() => ({
      saveCards: newSaveCards,
    }));
  };

  onInputChangeFilter = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

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
      isCardList,
      saveCards,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.state;
    return (
      <div>
        <h1>TRYUNFO</h1>
        <section className="newCard">
          <div className="add-card">
            <h2>Adicone uma nova carta</h2>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ hasTrunfo }
            />
          </div>
          <div className="preview-card">
            <h2>Preview da carta</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isCardList={ isCardList }
              onDeleteButtonClick={ () => this.onDeleteButtonClick() }
            />
          </div>
        </section>
        <h1>Lista de Cartas</h1>
        <Filter
          filterName={ filterName }
          filterRare={ filterRare }
          filterTrunfo={ filterTrunfo }
          onInputChangeFilter={ this.onInputChangeFilter }
        />
        <ul className="list-cards">
          { filterTrunfo && saveCards.filter((card) => card.hasTrunfo)
            .map((card, index) => (
              <li>
                <Card
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  isCardList={ card.isCardList }
                  onDeleteButtonClick={ () => this.onDeleteButtonClick(index) }
                />
              </li>
            ))}
          { !filterTrunfo && saveCards.filter((card) => card.cardName.includes(filterName))
            .filter((card) => (filterRare === '' ? card : card.cardRare === filterRare))
            .map((card, index) => (
              <li>
                <Card
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  isCardList={ card.isCardList }
                  onDeleteButtonClick={ () => this.onDeleteButtonClick(index) }
                />
              </li>
            ))}
          </ul>
      </div>
    );
  }
}

export default App;

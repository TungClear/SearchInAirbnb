import React, { Component } from 'react';
import './App.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

import InputSearch from './InputSearch/InputSearch';
import ChooseAmountGuest from './ChooseAmountGuest/ChooseAmountGuest';
import InformationSubmitted from './InformationSubmitted/InformationSubmitted';

class App extends Component {

  listCity = [
    "Phnom Penh",
    "Beijing",
    "Moscow",
    "Doha",
    "Pyongyang",
    "Singapore", "Jakarta", "Seoul", "Jerusalem", "Taipei", "Bangkok", "Tokyo", "Hanoi",
    "Kuala Lumpur", "Lisbon", "Berlin", "Athens", "Madrid", "Rome", "London"
  ];

  listCityRecent = [
    "Phnom Penh",
    "Beijing",
    "Moscow"
  ]

  windowObject = null;

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      startDateString: "",
      endDateString: "",
      focusedInput: null,
      listCity: this.listCity,
      listCityRecent: this.listCityRecent,
      tempListCity: this.listCity,
      searchText: "",
      city: "",
      clickedSearchText: false,
      clickedAmountGuest: false,
      clickedSubmitButton: false,
      adults: 1,
      children: 0,
      infants: 0
    };
  }

  renderListCity = (event) => {
    console.log(event.target.className);
    const { value } = event.target;
    const { tempListCity } = this.state;
    if (!value) {
      this.setState({
        searchText: value,
        listCity: this.listCityRecent
      })
    } else {
      const upper = value[0].toUpperCase();
      const upperValue = value.replace(value[0], upper);
      console.log(upperValue);
      this.setState({
        searchText: value,
        listCity: tempListCity.filter(city =>
          city.indexOf(upperValue) > -1 ||
          city.indexOf(value) > -1)
      })
    }

  }

  onClickSearchText = () => {
    this.setState({
      clickedSearchText: true
    })
  }

  onPointerLeaveSearchText = () => {
    this.setState({
      clickedSearchText: false
    })
  }


  onClickMinusButton = (event) => {
    const className = event.target.className;
    const { adults, children, infants } = this.state;
    switch (className) {
      case "guests-choose-item-button-minus-adults":
        if (adults > 0) {
          this.setState({
            adults: adults - 1
          });
        }
        break;
      case "guests-choose-item-button-minus-children":
        if (children > 0) {
          this.setState({
            adults: adults - 1
          });
        }
        break;
      case "guests-choose-item-button-minus-infants":
        if (adults > 0) {
          this.setState({
            infants: infants - 1
          });
        }
        break;
    }

  }

  onClickPlusButton = (event) => {
    const className = event.target.className;
    const { adults, children, infants } = this.state;
    switch (className) {
      case "guests-choose-item-button-plus-adults":
        this.setState({
          adults: adults + 1
        }); break;
      case "guests-choose-item-button-plus-children":
        this.setState({
          children: children + 1
        }); break;
      case "guests-choose-item-button-plus-infants":
        this.setState({
          infants: infants + 1
        }); break;
    }
  }

  onClickAmountGuestButton = () => {
    this.setState({
      clickedAmountGuest: true
    })
  }

  onPointerLeaveAmountGuestButton = () => {
    this.setState({
      clickedAmountGuest: false
    })
  }

  onClickSearchLi = (event) => {
    const value = event.target.innerText;
    this.setState({
      searchText: value,
      clickedSearchText: false
    })
  }


  onClickSubmitButton = () => {
    const d = document;
    const modal = d.getElementById('myModal');
    modal.style.display = "block";
  }

  componentDidMount() {
    const w = window;
    const d = document;
    const modal = d.getElementById('myModal');
    const submitButton = d.getElementById('searchBar-button');
    console.log(modal);
    // submitButton.onClick = () => {
    //   modal.style.display = "block";
    // }
    // submitButton.addEventListener("click", () => { modal.style.display = "block"; });
    w.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  hideModal = () => {
    const d = document;
    const modal = d.getElementById('myModal');
    modal.style.display = "none";
  }

  formatDate = () => {
    const { startDate, endDate } = this.state;
  }

  render() {

    return (
      <div className="App">
        <div className="titles"><h1>Plan your next trip</h1></div>
        <div className="searchBar">
          <div className="searchBar-content">
            <div className="searchBar-city" onPointerLeave={this.onPointerLeaveSearchText}>
              <div className="city-search-icon"><i className="fas fa-search"></i></div>
              <div className="city-inputCity">
                <input type="text" placeholder="Surfing in Los Angeles" className="city-searchText"
                  onChange={this.renderListCity}
                  onClick={this.onClickSearchText}
                  value={this.state.searchText}

                />
              </div>

              <InputSearch
                searchText={this.state.searchText}
                listCity={this.state.listCity}
                listCityRecent={this.state.listCityRecent}
                clickedSearchText={this.state.clickedSearchText}
                onClickSearchLi={this.onClickSearchLi}
              />
            </div>
            <div className="searchBar-dates">
              <div className="dates-title">
                Dates
              </div>
              <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
              />
            </div>
            <div className="searchBar-guests" onPointerLeave={this.onPointerLeaveAmountGuestButton}>
              <div className="guests-title">Guests</div>
              <div className="dates-button">
                <button onClick={this.onClickAmountGuestButton}>{this.state.adults + this.state.children} Guest, {this.state.infants} Infants</button>
              </div>

              <ChooseAmountGuest
                onClickMinusButton={this.onClickMinusButton} onClickPlusButton={this.onClickPlusButton}
                adults={this.state.adults}
                children={this.state.children}
                infants={this.state.infants}
                clickedAmountGuest={this.state.clickedAmountGuest}
                onPointerLeave={this.onPointerLeaveAmountGuestButton}
              />
            </div>
          </div>
          <div className="searchBar-button" id="searchBar-button" onClick={this.onClickSubmitButton}>
            <span className="searchBar-button-submit"><i className="fas fa-search fa-2x"></i></span>
          </div>
        </div>
        <InformationSubmitted
          searchText={this.state.searchText}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          guest={this.state.adults + this.state.children}
          infants={this.state.infants}
          hideModal={this.hideModal}
        // clickedSubmitButton={this.state.clickedSubmitButton}
        />
      </div>

    );
  }
}

export default App;

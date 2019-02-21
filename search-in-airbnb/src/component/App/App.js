import React, { Component } from 'react';
import './App.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
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

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      listCity: this.listCity
    };
  }

  renderListCity = () => {
    
  }

  renderListCityRecent = (event) => {
    const {value} = event.target;
   if(!value){
    //render city list recent
   }else{
    //render city list
   }
  }

  renderGuestChoose = () => {

  }

  render() {
    return (
      <div className="App">
        <div className="titles"><h1>Plan your next trip</h1></div>
        <div className="searchBar">
          <div className="searchBar-content">
            <div className="searchBar-city">
              <div className="city-search-icon"><i class="fas fa-search"></i></div>
              <div className="city-inputCity">
                <input type="text" placeholder="Surfing in Los Angeles" id="city-inputCity" onChange={this.renderListCityRecent} />
              </div>
              <div className="recent-searches">
                <ul className="">
                  <li className="recent-searches-li">Recent Searches</li>
                  <ul>
                    {/*Hiển thị danh sách địa điểm đã tìm kiếm tại đây*/}
                    <li><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>Ha Noi</li>
                    <li><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>Ho Chi Minh City</li>
                    <li><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>Singapore</li>
                    <li><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>Tokyo</li>
                    <li><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>Shanghai</li>
                    <li><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>Beijing</li>
                    <li><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>Seoul</li>
                  </ul>
                </ul>
              </div>
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
            <div className="searchBar-guests">
              <div className="guests-title">Guests</div>
              <div className="dates-button">
                <button>1 guest</button>
              </div>
              <div className="guests-choose">
                <div className="guests-choose-content">
                  <div className="guests-choose-item">
                    <div className="guests-choose-item-name">
                      Adults
                      </div>
                    <div className="guests-choose-item-button-minus"> - </div>
                    <div className="guests-choose-item-text">1</div>
                    <div className="guests-choose-item-button-plus"> + </div>
                  </div>
                  <div className="guests-choose-item">
                    <div className="guests-choose-item-name">
                      Children
                      </div>
                    <div className="guests-choose-item-button-minus"> - </div>
                    <div className="guests-choose-item-text">1</div>
                    <div className="guests-choose-item-button-plus"> + </div>
                  </div>
                  <div className="guests-choose-item">
                    <div className="guests-choose-item-name">
                      Infants
                      </div>
                    <div className="guests-choose-item-button-minus"> - </div>
                    <div className="guests-choose-item-text">1</div>
                    <div className="guests-choose-item-button-plus"> + </div>
                  </div>
                </div>
                <div className="guests-choose-apply">
                  <button className="guests-choose-apply-button">Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="searchBar-button">
          </div>
        </div>
      </div>
    );
  }
}

export default App;

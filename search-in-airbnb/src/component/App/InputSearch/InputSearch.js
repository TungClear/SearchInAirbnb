import React from 'react';

class InputSearch extends React.Component {

    render() {
        if (!this.props.clickedSearchText) {
            return(
                <React.Fragment></React.Fragment>
            )
        } else {
            if (!this.props.searchText) {
                return (
                    <div className="recent-searches">
                        <ul className="">
                            <li className="recent-searches-li">Recent Searches</li>
                            <ul>
                                {this.props.listCityRecent.map((item, index) => (
                                    <li key={index} onClick={this.props.onClickSearchLi}><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>{item}</li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                )
            } else {
                return (
                    <div className="recent-searches">
                        <ul className="">
                            <ul>
                                {this.props.listCity.map((item, index) => (
                                    <li key={index} onClick={this.props.onClickSearchLi}><span className="recent-searches-li-icon"><i class="fas fa-map-marker-alt"></i></span>{item}</li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                )
            }
        }
    }
}

export default InputSearch;
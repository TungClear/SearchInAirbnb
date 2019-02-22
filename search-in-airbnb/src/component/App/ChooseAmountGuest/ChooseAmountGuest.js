import React from 'react';

class ChooseAmountGuest extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         adults: 1,
    //         children: 0,
    //         infants: 0
    //     }
    // }

    render() {
        if (!this.props.clickedAmountGuest) {
            return (
                <React.Fragment></React.Fragment>
            )
        } else {
            return (
                <div className="guests-choose">
                    <div className="guests-choose-content">
                        <div className="guests-choose-item">
                            <div className="guests-choose-item-name">
                                Adults
                      </div>
                            <div className="guests-choose-item-button-minus-adults" onClick={this.props.onClickMinusButton}> - </div>
                            <div className="guests-choose-item-text">{this.props.adults}</div>
                            <div className="guests-choose-item-button-plus-adults" onClick={this.props.onClickPlusButton}> + </div>
                        </div>
                        <div className="guests-choose-item">
                            <div className="guests-choose-item-name">
                                Children
                      </div>
                            <div className="guests-choose-item-button-minus-children" onClick={this.props.onClickMinusButton}> - </div>
                            <div className="guests-choose-item-text">{this.props.children}</div>
                            <div className="guests-choose-item-button-plus-children" onClick={this.props.onClickPlusButton}> + </div>
                        </div>
                        <div className="guests-choose-item">
                            <div className="guests-choose-item-name">
                                Infants
                      </div>
                            <div className="guests-choose-item-button-minus-infants" onClick={this.props.onClickMinusButton}> - </div>
                            <div className="guests-choose-item-text">{this.props.infants}</div>
                            <div className="guests-choose-item-button-plus-infants" onClick={this.props.onClickPlusButton}> + </div>
                        </div>
                    </div>
                    {/* <div className="guests-choose-apply">
                        <button className="guests-choose-apply-button" onClick={this.props.onPointerLeaveAmountGuestButton}>Apply</button>
                    </div> */}
                </div>
            )
        }
    }
}

export default ChooseAmountGuest;
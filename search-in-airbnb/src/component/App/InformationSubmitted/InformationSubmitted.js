import React from 'react';

class InformationSubmitted extends React.Component {

    render() {
        // console.log(this.props.startDate);
        var startDate = "";
        var endDate = "";
        if (this.props.startDate === null) {
            startDate = "";
        } else {
            startDate = this.props.startDate.format("MM/DD/YYYY");
        }
        if (this.props.endDate === null) {
            endDate = "";
        } else {
            endDate = this.props.endDate.format("MM/DD/YYYY");
        }

        return (
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Information</h2>
                        <div className="close" onClick={this.props.hideModal}>&times;</div>
                    </div>
                    <div className="modal-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td>City</td>
                                    <td>{this.props.searchText}</td>
                                </tr>
                                <tr>
                                    <td>Time Range</td>
                                    <td>{startDate} -> {endDate}</td>
                                </tr>
                                <tr>
                                    <td>Amount Person</td>
                                    <td>{this.props.guest} Guest, {this.props.infants} Infants</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        )

    }
}

export default InformationSubmitted;
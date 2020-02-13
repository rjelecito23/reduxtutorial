import React, { Component } from 'react';
import { connect } from 'react-redux';
import './firstsample.css'
import * as actionCreator from '../../store/actions/actions'

class FirstSample extends Component {
	render() {
		return (
			<div className="App">
				<div className='Age-label'>
					Your Age:<span>{this.props.age}</span>
				</div>
				<button onClick={this.props.onAgeUp}>Age Up</button>
				<button onClick={this.props.onAgeDown}>Age Down</button>
				{this.props.loading && <p>Loading...</p>}
				<hr />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		age: state.age,
		history: state.history,
		loading: state.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAgeUp: () => dispatch(actionCreator.ageUp(1)),
		onAgeDown: () => dispatch(actionCreator.ageDown(1)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstSample);

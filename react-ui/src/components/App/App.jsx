import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { Responsive } from 'semantic-ui-react';

// Actions

// Presentational Components
import Header from './presentational/Header';
import Footer from './presentational/Footer';

// Assets
import logo from '../../assets/images/logo.svg';

// CSS
import './App.css';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
	render() {
		// eslint-disable-next-line react/prop-types
		const { history, children } = this.props;
		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Header logo={logo} />
				{children}
				<Footer />
			</Responsive>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Reveal, Image, Container, Segment, Header } from 'semantic-ui-react';

// Redux
import { selectors } from '../../../store/reducers/eventsReducer';

const colors = [
	'rgba(212, 212, 213, 0.8)',
	'rgba(242, 113, 28, 0.8)',
	'rgba(100, 53, 201, 0.8)',
	'rgba(226, 57, 151, 0.8)',
	'rgba(33, 133, 208, 0.8)'
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

class EventCategoriesList extends Component {
	renderCategories = categories =>
		categories.map(category => (
			<Card key={category}>
				<Reveal animated="move down">
					<Reveal.Content visible style={{ height: 200, width: '100%' }}>
						<div
							className="category"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '100%',
								width: '100%',
								backgroundColor: getRandomColor(),
								alignSelf: 'stretch'
							}}
						>
							<Header style={{ color: '#FCFCFC' }} as="h2">
								{category}
							</Header>
						</div>
					</Reveal.Content>
					<Reveal.Content hidden style={{ height: 200, width: '100%' }}>
						<Image
							src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
							width="100%"
						/>
					</Reveal.Content>
				</Reveal>
			</Card>
		));

	render() {
		const { categories } = this.props;
		return (
			<Segment basic padded>
				<Container>
					<Header as="h2">Game Categories</Header>
					<Card.Group doubling itemsPerRow={5} stackable>
						{this.renderCategories(categories)}
					</Card.Group>
				</Container>
			</Segment>
		);
	}
}

const mapStateToProps = state => ({
	categories: selectors.getCategories(state.events)
});

export default connect(mapStateToProps)(EventCategoriesList);

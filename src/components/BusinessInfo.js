import Card from '../UI/Card';

const BusinessInfo = (props) => {
	return (
		<li>
			<Card>
				{props.bus.name}
				{props.bus.type}
				{props.bus.address}
				{props.bus.contact}
			</Card>
		</li> 
		);
}

export default BusinessInfo;
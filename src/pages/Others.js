import useHttp from '../hooks/useHttp';
import BusinessInfo from '../components/BusinessInfo';

const Others = (props) => {
	const businessData = useHttp('Others');

	return (
		<>
			<ul>
				{businessData.map(bus => 
					<BusinessInfo key={bus.address} bus={bus} />
				)}						
			</ul>
		</>
	);
};

export default Others;
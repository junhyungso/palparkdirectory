import useHttp from '../hooks/useHttp';
import BusinessInfo from '../components/BusinessInfo';

const Entertainment = () => {

	const businessData = useHttp('Entertainment');

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

export default Entertainment;
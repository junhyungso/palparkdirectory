import useHttp from '../hooks/useHttp';
import BusinessInfo from '../components/BusinessInfo';

const Doctors = () => {

	const businessData = useHttp("Doctor's Office");

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

export default Doctors;
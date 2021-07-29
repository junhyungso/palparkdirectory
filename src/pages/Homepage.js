import useHttp from '../hooks/useHttp';
import BusinessInfo from '../components/BusinessInfo';

const Homepage = () => {

	const businessData = useHttp();
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

export default Homepage;
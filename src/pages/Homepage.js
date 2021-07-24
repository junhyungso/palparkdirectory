import useHttp from '../hooks/useHttp';
import BusinessInfo from '../components/BusinessInfo';

const Homepage = () => {

	const businessData = useHttp();
    return (
        <>
            <p>Homepage</p>
						<ul>
							{businessData.map(bus => 
								<BusinessInfo key={bus.address} bus={bus} />
							)}						
						</ul>
        </>
        
    );
};

export default Homepage;
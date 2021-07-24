import { useRef } from 'react';
import { useHistory } from 'react-router';
import axios from '../axios';

const AddBusiness = () => {

	const nameRef = useRef();
	const typeRef = useRef();
	const addressRef = useRef();
	const contactRef = useRef();
	const history = useHistory();

	const submitHandler = (event) => {
		const submitData = {
			name: nameRef.current.value,
			type: typeRef.current.value,
			address: addressRef.current.value,
			contact: contactRef.current.value
		}

		event.preventDefault();

		console.log(submitData);
		axios.post('/business', submitData)
			.then( res => {
				console.log(res)
				history.push('/')
			}).catch( err =>
				console.log(err)
			);
	}
	return (
		<>
			<form onSubmit={submitHandler}>
				<label>Business name: </label>
				<input ref={nameRef} />
				<label>Business type: </label>
				<select ref={typeRef}>
					<option>Restaurant</option>
					<option>Doctor's Office</option>
					<option>Entertainment</option>
					<option>Others</option>
				</select>
				<label>Address: </label>
				<input ref={addressRef} />
				<label>Contact Information: </label>
				<input ref={contactRef} />
				<button>Submit</button>
			</form>
		</>

	);
};

export default AddBusiness;
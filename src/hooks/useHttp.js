import { useState, useEffect } from 'react';
import axios from '../axios';

const useHttp = (type = null) => {
	const [businessData, setBusinessData] = useState([]);

	useEffect(()=> {
		axios.get('/business.json')
		.then(res => {
			for (let key in res.data) {
				setBusinessData(state => [...state, res.data[key]])
			}
		})
	}, [setBusinessData])

	let filteredBusinessData = businessData;
	if (type) {
		filteredBusinessData = businessData.filter(data => data.type === type)
	}
	return filteredBusinessData;
}

export default useHttp;
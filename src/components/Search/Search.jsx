import React from 'react';
import { Input, FormGroup } from 'reactstrap';

const Search = () => {
	return (
		<form>
			<FormGroup>
				<Input type='search' name='search' placeholder='Search...' />
			</FormGroup>
		</form>
	);
};

export default Search;

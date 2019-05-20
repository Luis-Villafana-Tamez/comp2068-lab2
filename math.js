const validOptions = {
	'add' : '+', 
	'subtract' : '-', 
	'divide' : '/', 
	'multiply' : '*'};
const validOptionKeys = Object.keys(validOptions);
const validQueryKeys = ['method', 'x', 'y'];
/*
handleCalculation handles the calculation on 'x' and 'y' specified by 'method'
*/
const handleCalculation = (method, x, y) => {
	switch(method){
		case 'add':
			return x + y;
		case 'subtract':
			return x - y;
		case 'multiply':
			return x * y;
		case 'divide':
			return x / y;
		default:
			return 'Invalid option';
	}
};

/*
handleHttpCalculation handles a request of the  form 
method=string&x=number&y=number
*/
const handleHttpCalculation = (request, response) => {

	//Get the query
	const query = request.query;
	
	queryKeys = Object.keys(query); 
	
	//Check if the query structure is valid
	queryKeysCheck = 
	queryKeys.length == 3 
	&& queryKeys[0].toLowerCase() == validQueryKeys[0] 
	&& queryKeys[1].toLowerCase() == validQueryKeys[1] 
	&& queryKeys[2].toLowerCase() == validQueryKeys[2];
	
	if (!queryKeysCheck){
		return response.send(
		`The query keys should be [${validQueryKeys.join(', ')}].`);
	}
	
	//Get the query parameters:
	const [method, x, y] = [
	query.method.toLowerCase(),
	Number(query.x),
	Number(query.y)];
	
	//Check if the method is valid:
	if (!validOptionKeys.includes(method)){
		return response.send(
		`The valid methods are [${validOptionKeys.join(', ')}].`
		);
	}
	
	//Check if the numbers are valid:
	if (isNaN(x) || isNaN(y)){
		return response.send('x and y should be numbers.');
	}
	
	//Check for division by 0:
	if (method === 'divide' && y == 0){
		return response.send('Division is not defined for zero denominators.');
	}
	
	//Handle and send the calculation:
	const result = handleCalculation(method, x, y);
	
	response.send(`${x} ${validOptions[method]} ${y} = ${result}`);
};

module.exports = handleHttpCalculation;
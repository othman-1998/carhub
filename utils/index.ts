export async function fetchCars() {

    const headers = {
		'X-RapidAPI-Key': '85d2813c98mshea0557223226a10p11604bjsn6e1ba0ca869a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`, {
     headers: headers
    });

    const result = await response.json();

    return result;
}
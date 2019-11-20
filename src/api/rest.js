const API_URI = 'https://swapi.co';

/**
 * REST API call Wrapper
 * @param method
 * @param url
 * @param token
 * @returns {Promise<{error, result}>}
 */
const restWrapper = async (method, url = '', token, params) => {
    const requestUrl = `${API_URI}${url}`;
    try {
        const response = await fetch(requestUrl, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: params ? JSON.stringify(params) : undefined,
        });
        if (response.status === 200) {
            return { ...await response.json() };
        } else {
            return { results: [] };
        }
    } catch (e) {
        console.log('Error from restWrapper call ', e);
        return { results: [], errors: e.reason };
    }
};

const REST = {
    getDataFromTelliaApi: restWrapper.bind(this, 'GET', '/api/people/'),
};

export default REST;

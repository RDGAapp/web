const getApiUrl = (url: string) => `${process.env.REACT_APP_API_URL}${url}`;

export default getApiUrl;

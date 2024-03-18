const getApiUrl = (url: string) => `${import.meta.env.VITE_APP_API_URL}${url}`;

export default getApiUrl;

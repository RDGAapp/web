const getFileUrl = (url: string) =>
  `${import.meta.env.VITE_APP_FILE_URL}${url}`;

export default getFileUrl;

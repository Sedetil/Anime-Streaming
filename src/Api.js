import axios from 'axios';

const CLIENT_ID = 'f60e1429c1265ca54ca3364ddb6e7139';
const CLIENT_SECRET = '338d896dc9e459dcd5a55d65cf7087081b35c1074e0fe75f3a39baa3b7021552';

const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);

  try {
    const response = await axios.post('https://myanimelist.net/v1/oauth2/token', params);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};

export default getAccessToken;

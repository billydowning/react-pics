import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID tpkCXmW3HYqezrzBLww7kiKCjw196ebNx3qQMwHG8sY'
  }
});

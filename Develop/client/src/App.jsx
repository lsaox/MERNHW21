import './App.css';
import { Outlet } from 'react-router-dom';
//Added from apollo client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Navbar from './components/Navbar';
//Make graphql endpoint
const httpLink = createHttpLink({ uri: '/graphql' });


//Construct request middleware thatll connect the JWT token
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.localStorage.getItem('token');
  // return the headers to the context 
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

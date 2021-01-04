import {ApolloProvider} from '@apollo/client'
import { useApollo } from 'src/lib/ApolloClient';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      
    </ApolloProvider>)
}

export default MyApp

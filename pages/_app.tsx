import type {AppProps} from 'next/app'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {wrapper} from "@/lib/redux";
import React from "react";
import {Provider} from "react-redux";
import NavbarDrawer from "@/components/Navigation/Drawer";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

function App({Component, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  const {pageProps} = props;
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavbarDrawer>
          <Component {...pageProps} />
        </NavbarDrawer>
      </Provider>
    </ApolloProvider>
  );
}


export default App;
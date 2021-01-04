import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  // const { HttpLink } = require("@apollo/client/link/http");

  return new ApolloClient({
    uri: "https://waldosfriends.org/graphql/",
    cache: new InMemoryCache(),
  });
}
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
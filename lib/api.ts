const API_URL = process.env.WP_API_URL;

export async function fetchAPI(query, { variables }:any = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json','User-Agent':'*' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  let res = await fetch('https://waldosfriends.org/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({"query": query, "variables": variables })
  });

  // error handling work
  let json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}
export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query allPages {
      pages {
        edges {
          node {
            date
          }
        }
      }
    }
    `
  );

  return data?.pages;
}
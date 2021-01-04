import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/lib/ApolloClient";
import { useRouter } from 'next/router'
import {getAllPosts} from "../lib/api";
// const MyQuery = gql`
//   query MyQuery {
//     pages {
//       edges {
//         node {
//           date
//         }
//       }
//     }
//   }
// `;

export default async function Home({launches}) {
  // const { data, loading } = useQuery(MyQuery);
  const router = useRouter()

  // }

  // console.log('data', [data.data]);
  
  return (
    <div className={styles.container}>
      <span>loading...</span>
    </div>
  );
}
export async function getStaticProps() {
  // const apolloClient = initializeApollo();

  // let x = await apolloClient.query({
  //   query: MyQuery,
  // });
  const posts = await getAllPosts();

  posts.map((node) => {
    console.log('none', node);
    
  });
  console.log('getStaticProps')
  return {
    props: {
      launches: posts,
    },
  };
}

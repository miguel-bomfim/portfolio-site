import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const graphqlAPI = process.env.REACT_APP_PUBLIC_GRAPHCMS_ENDPOINT ?? "";

type HomeProps = {
  homeImage: {
    url: string;
  };
  name: string;
};

export const useHome = () => {
  return useQuery<HomeProps>("get-home", async () => {
    const { home } = await request(
      graphqlAPI,
      gql`
        query Home {
          home(where: { id: "cl83ae8um24js0dlwj9u1aoy8" }) {
            name
            homeImage {
              url
            }
          }
        }
      `
    );
    return home;
  });
};

export const usePortfolios = () => {
  return useQuery("get-posts", async () => {
    const { photographs } = await request(
      graphqlAPI,
      gql`
        query GetPosts {
          photographs {
            title
            thumbnail {
              url
            }
            photos(first: 20) {
              id
              url
            }
            slug
          }
        }
      `
    );
    return photographs;
  });
};

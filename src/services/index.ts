import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const graphqlAPI = process.env.REACT_APP_PUBLIC_GRAPHCMS_ENDPOINT ?? "";

type HomeProps = {
  homeImage: {
    url: string;
  };
  name: string;
};

type AboutProps = {
  photo: {
    url: string;
    width: string;
    height: string;
  };
  summary: string;
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

export const usePortfolio = () => {
  return useQuery("get-portfolio", async () => {
    const { photographs } = await request(
      graphqlAPI,
      gql`
        query GetPosts {
          photographs {
            title
            thumbnail {
              url
              height
              width
            }
            photos(first: 40) {
              id
              url
              width
              height
            }
            slug
          }
        }
      `
    );
    return photographs;
  });
};

export const useAboutMe = () => {
  return useQuery<AboutProps>("get-about-me", async () => {
    const { aboutMe } = await request(
      graphqlAPI,
      gql`
        query GetAboutMeInfo {
          aboutMe(where: { id: "cl70x5kqr1k0a0cki6nebuzoy" }) {
            photo {
              url
              width
              height
            }
            summary
          }
        }
      `
    );
    return aboutMe;
  });
};

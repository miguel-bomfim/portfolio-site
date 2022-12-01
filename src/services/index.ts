import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const graphqlAPI = process.env.REACT_APP_PUBLIC_GRAPHCMS_ENDPOINT ?? "";

type HomeProps = {
  introduction: {
    html: string;
  };
  homeImage: {
    url: string;
  };
  developmentText: string;
  images: [
    {
      url: string;
      id: string;
    }
  ];
  conclusion: string;
};

export const useHome = () => {
  return useQuery<HomeProps>("get-home", async () => {
    const { home } = await request(
      graphqlAPI,
      gql`
        query Home {
          home(where: { id: "cl83ae8um24js0dlwj9u1aoy8" }) {
            introduction {
              html
            }
            homeImage {
              url
            }
            developmentText
            images {
              url
              id
            }
            conclusion
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
        query GetPortfolio {
          photographs {
            title
            thumbnail {
              url
              height
              width
            }
            slug
          }
        }
      `
    );
    return photographs;
  });
};

export const useEssay = (slug: string) => {
  return useQuery(
    "get-essay",
    async () => {
      const { photograph: essay } = await request(
        graphqlAPI,
        gql`
          query GetEssay($slug: String!) {
            photograph(where: { slug: $slug }) {
              photos(first: 50) {
                url
                id
                height
                width
              }
            }
          }
        `,
        {
          slug: slug,
        }
      );
      return essay.photos;
    },
    { enabled: !!slug }
  );
};

export const useAboutMe = () => {
  return useQuery("get-about-me", async () => {
    const { aboutMe } = await request(
      graphqlAPI,
      gql`
        query GetAboutMeInfo {
          aboutMe(where: { id: "cl70x5kqr1k0a0cki6nebuzoy" }) {
            name
            photo {
              url
              width
              height
            }
            summary {
              html
            }
            portfolioExamples {
              url
              id
            }
          }
        }
      `
    );
    return aboutMe;
  });
};

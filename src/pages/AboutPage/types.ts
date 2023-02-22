export interface AboutProps {
  image:
    | {
        url: string;
        width: string;
        height: string;
      }
    | undefined;
  description: string;
  imgText: {
    url: string;
  };
  portfolioExamples:
    | [
        {
          url: string;
          id: string;
        }
      ]
    | undefined;
}

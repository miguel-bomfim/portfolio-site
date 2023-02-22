export interface HomeProps {
  introduction: string | undefined;
  homeImage: string | undefined;
  developmentText: string | undefined;
  images: ImagesProps[] | undefined;
  conclusion: string | undefined;
}

export interface ImagesProps {
  url: string;
  id: string;
  height: number;
  width: number;
}

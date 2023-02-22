interface CardPreviewProps {
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  slug: string;
}

export interface Posts {
  portfolioData: CardPreviewProps[];
  isLoading: boolean;
}

export interface EssayProps {
  url: string;
  id: string;
  width: number;
  height: number;
}

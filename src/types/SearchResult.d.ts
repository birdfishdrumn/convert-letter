export type SEARCH_RESULT = {
  name: string;
  webSearchUrl: string;
  thumbnailUrl: string;
  datePublished: string;
  contentUrl: string;
  hostPageUrl: string;
  contentSize: string;
  encodingFormat: string;
  hostPageDisplayUrl: string;
  width: number;
  height: number;
  thumbnail: {
    width: number;
    height: number;
  };
  imageInsightsToken: string;
  insightsSourcesSummary: {
    shoppingSourcesCount: number;
    recipeSourcesCount: number;
  };
  imageId: string;
  accentColor: string;
};

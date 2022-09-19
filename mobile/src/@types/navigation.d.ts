export interface RouteParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            game: RouteParams;
        }
    }
}
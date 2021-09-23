export interface ILogedin {
  pic?: string;
  name: string;
}

export interface IMainBanner {
  name?: string;
  about?: string;
  BannerImage?: string;
  padding?: any;
  bannerHeight?: any;
  padHadTop?: any;
  padHadLeft?: any;
  mobMenu?: boolean;
}

export interface IMainNav {
  postCount?: number;
  articleCount?: number;
  evCount?: number;
  edCount?: number;
  jobCount?: number;
}
export interface IMobileNav extends IMainNav {}

export interface IBlogcard {
  img?: string;
  logo: String;
  name: String;
  title: string;
  details?: string;
  profile: String;
}

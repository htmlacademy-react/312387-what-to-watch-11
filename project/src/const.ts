export enum AppRoute {
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  MyList = '/mylist',
  Login = '/login',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum Nav {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum TimeValue {
  PreviewStartTimeout = 1000,
  DefaultSecondsCount = 60,
  Hundred = 100
}

export enum ErrorMessage {
  VideoSupport = 'The video tag is not supported by your browser.',
  InvalidEmail = 'Please enter a valid email address',
  InvalidPassword = 'Please enter a valid password'
}

export enum FilmValue {
  MaxCount = 8,
  MaxGenreCount = 9,
  MaxReletedCount = 4,
  MaxStarringCount = 2,
  DefaultStateGenre = 'All genres'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite'
}

export enum Rating {
  Bad = 0,
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum ReviewValue {
  MinValue = 50,
  MaxValue = 400
}

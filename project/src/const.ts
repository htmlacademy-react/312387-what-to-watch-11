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
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews'
}

export enum TimeValue {
  PreviewStartTimeout = 1000,
  DefaultSecondsCount = 60,
  Hundred = 100
}

export enum ErrorMessage {
  VideoSupport = 'The video tag is not supported by your browser.'
}

export enum FilmValue {
  MaxCount = 8,
  MaxReletedCount = 4,
  DefaultStateGenre = 'All genre'
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

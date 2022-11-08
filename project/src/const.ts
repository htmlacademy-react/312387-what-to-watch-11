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

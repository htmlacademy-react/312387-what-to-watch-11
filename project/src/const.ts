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

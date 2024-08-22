export interface Subscriber {
  nick: string;
  time: number;
  avatar: string;
  description?: string;
}

export type SubscribersResponseFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description?: string;
}>;

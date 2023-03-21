export interface SendOptions {
  message: Message;
  to: string;
}

export interface Message {
  notification?: Notification;
  data?: MessageData;
  token?: string;
  channel?: string;
  android?: AndroidOptions;
}

export interface Notification {
  title?: string;
  body?: string;
}

export interface AndroidOptions {
  notification?: {
    channel_id?: string;
  };
}

export type MessageData = Record<string, any>;

export interface RegistrationData {
  username: string;
  token: string;
}

export interface RequestPairData {
  requestingUsername: string;
  pairUsername: string;
}

export interface PairResponseData extends PairingMessagingData {
  pairingResponse: string;
}

export interface PairRequestData extends PairingMessagingData {
  pairingCode: string;
}

export interface PairingMessagingData {
  requestingUsername: string;
  respondingUsername: string;
}

export interface User {
  username: string;
  token: string;
  pair?: string;
  pairingCode?: string;
}

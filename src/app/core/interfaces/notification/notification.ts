export interface INotification {
  status: 'ERROR' | 'SUCCESS';
  msn: string;
  value?: string;
  time?: number;
}

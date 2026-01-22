export enum Screen {
  Dashboard,
  SelfieVerification,
  Logs,
}

export interface AttendanceRecord {
  id: number;
  name: string;
  time: string;
  location: string;
  locationType: 'HQ OFFICE' | 'NORTH HUB' | 'REMOTE';
  status: 'CLOCK IN' | 'CLOCK OUT';
  avatarUrl: string;
}

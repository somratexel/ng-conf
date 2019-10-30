import { AuthService } from './auth/auth.service';
import { StorageService } from './storage/storage.service';
import { SessionService } from './session/session.service';

export const services: any[] = [
  AuthService,
  StorageService,
  SessionService
];

export * from './auth/auth.service';
export * from './storage/storage.service';
export * from './session/session.service';

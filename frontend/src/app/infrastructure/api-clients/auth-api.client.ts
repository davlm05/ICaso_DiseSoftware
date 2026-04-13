import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsService } from '../../core/settings/settings.service';

@Injectable({ providedIn: 'root' })
export class AuthApiClient {
  constructor(private http: HttpClient, private settings: SettingsService) {}

  refreshToken(token: string): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(`${this.settings.apiBaseUrl}/auth/refresh`, { token });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsService } from '../../core/settings/settings.service';
import { SourceFile } from '../../core/models/source-file.model';

@Injectable({ providedIn: 'root' })
export class FileApiClient {
  constructor(private http: HttpClient, private settings: SettingsService) {}

  validateFolder(path: string): Observable<SourceFile[]> {
    return this.http.post<SourceFile[]>(`${this.settings.apiBaseUrl}/files/validate`, { path });
  }
}

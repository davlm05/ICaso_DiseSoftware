import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SettingsService } from '../../core/settings/settings.service';
import { DuaDocument } from '../../core/models/dua-document.model';
import { adaptDuaDocument } from '../adapters/dua-document.adapter';

@Injectable({ providedIn: 'root' })
export class DuaApiClient {
  constructor(private http: HttpClient, private settings: SettingsService) {}

  getResult(jobId: string): Observable<DuaDocument> {
    return this.http
      .get(`${this.settings.apiBaseUrl}/dua/${jobId}`)
      .pipe(map(adaptDuaDocument));
  }
}

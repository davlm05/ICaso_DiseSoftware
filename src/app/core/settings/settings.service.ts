import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

/** Provides environment variables and configuration consumed from Azure Key Vault at runtime. */
@Injectable({ providedIn: 'root' })
export class SettingsService {
  get apiBaseUrl(): string { return environment.apiBaseUrl; }
  get azureTenantId(): string { return environment.azureTenantId; }
  get azureClientId(): string { return environment.azureClientId; }
}

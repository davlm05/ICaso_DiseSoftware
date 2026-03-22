import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DuaGenerationFacade } from '../../../application/facades/dua-generation.facade';

/** Smart — orchestrates generator configuration; calls DuaGenerationFacade. */
@Component({
  selector: 'app-configure-generator',
  standalone: true,
  imports: [],
  template: `
    <div style="min-height:100vh;background:#f1f5f9;padding:2rem">
      <div style="max-width:640px;margin:0 auto">
        <h1 style="font-size:1.25rem;font-weight:700;margin-bottom:1.5rem">Configure the Generator</h1>

        <div style="background:white;padding:1.5rem;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:1rem">
          <label style="display:block;margin-bottom:1rem">
            <span style="font-size:.875rem;font-weight:500">Folder path</span>
            <input type="text" placeholder="C:\\documents\\case-001"
              style="display:block;width:100%;margin-top:.25rem;padding:.5rem;border:1px solid #cbd5e1;border-radius:4px;box-sizing:border-box" />
          </label>
          <label style="display:block">
            <span style="font-size:.875rem;font-weight:500">DUA Template</span>
            <select style="display:block;width:100%;margin-top:.25rem;padding:.5rem;border:1px solid #cbd5e1;border-radius:4px;box-sizing:border-box">
              <option>DUA v3 — Ministerio de Hacienda (2025)</option>
            </select>
          </label>
        </div>

        <div style="background:white;padding:1rem;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:1.5rem">
          <p style="font-size:.875rem;font-weight:500;margin-bottom:.5rem">Detected files</p>
          <p style="font-size:.8rem;color:#64748b">invoice_2025.pdf · packing_list.xlsx · cert_origin.docx</p>
        </div>

        <button (click)="next()"
          style="padding:.625rem 1.5rem;background:#1e40af;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:600">
          Start generation →
        </button>
      </div>
    </div>
  `,
})
export class ConfigureGeneratorComponent {
  constructor(private facade: DuaGenerationFacade, private router: Router) {}
  next(): void { this.router.navigate(['/progress']); }
}

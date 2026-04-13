import { Component } from '@angular/core';
import { DuaGenerationFacade } from '../../../application/facades/dua-generation.facade';

/** Smart — manages result review and export flow. */
@Component({
  selector: 'app-result-export',
  standalone: true,
  imports: [],
  template: `
    <div style="min-height:100vh;background:#f1f5f9;padding:2rem">
      <div style="max-width:720px;margin:0 auto">
        <h1 style="font-size:1.25rem;font-weight:700;margin-bottom:1.5rem">Result — DUA Preview</h1>

        <div style="background:white;padding:1.5rem;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:1rem">
          <p style="font-size:.8rem;font-weight:600;margin-bottom:1rem;color:#475569">CONFIDENCE: <span style="color:#16a34a">■ High</span> &nbsp; <span style="color:#ca8a04">■ Medium</span> &nbsp; <span style="color:#dc2626">■ Low</span></p>
          @for (f of fields; track f.label) {
            <div style="display:flex;gap:1rem;align-items:center;padding:.5rem 0;border-bottom:1px solid #f1f5f9">
              <span style="width:220px;font-size:.8rem;color:#64748b">{{ f.label }}</span>
              <span [style.color]="f.color" style="font-size:.8rem;font-weight:600;width:12px">■</span>
              <input [value]="f.value" style="flex:1;padding:.375rem;border:1px solid #e2e8f0;border-radius:4px;font-size:.8rem" />
            </div>
          }
        </div>

        <button style="padding:.625rem 1.5rem;background:#16a34a;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:600">
          Export to .docx ↓
        </button>
      </div>
    </div>
  `,
})
export class ResultExportComponent {
  fields = [
    { label: 'Importer name',       value: 'Empresa XYZ S.A.',     color: '#16a34a' },
    { label: 'Invoice number',      value: 'INV-2025-00412',        color: '#16a34a' },
    { label: 'FOB value',           value: 'USD 14,320.00',         color: '#ca8a04' },
    { label: 'Country of origin',   value: 'CN',                    color: '#16a34a' },
    { label: 'Customs regime',      value: '',                      color: '#dc2626' },
    { label: 'Incoterm',            value: 'CIF',                   color: '#16a34a' },
    { label: 'Gross weight (kg)',   value: '842',                   color: '#ca8a04' },
  ];
  constructor(private facade: DuaGenerationFacade) {}
}

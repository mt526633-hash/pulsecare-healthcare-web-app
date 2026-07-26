import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const appSource = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
const modalSource = await readFile(new URL('../src/components/RegisterModal.jsx', import.meta.url), 'utf8');

test('all documented views are represented in the application shell', () => {
  for (const view of ['locations', 'billing', 'medical-records', 'why-us', 'events', 'reviews']) {
    assert.match(appSource, new RegExp(`case ['"]${view}['"]`));
  }
});

test('registration remains explicitly simulated and accessible', () => {
  assert.match(modalSource, /aria-label=["']Close registration dialog["']/);
  assert.match(modalSource, /<form onSubmit=/);
  assert.doesNotMatch(modalSource, /fetch\(|axios|XMLHttpRequest/);
});

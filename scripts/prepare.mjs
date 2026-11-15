import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

// Source archives can be installed before a Git repository is initialized.
if (existsSync('.git')) {
  const result = spawnSync('husky', [], { stdio: 'inherit', shell: true });
  process.exitCode = result.status ?? 1;
}

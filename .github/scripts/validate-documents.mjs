import {readFileSync,existsSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
const record=existsSync('DEVSECOPS.md')?'DEVSECOPS.md':'docs/devsecops/REPOSITORY_DEVSECOPS_RECORD_2026-11-21.md';
for(const f of [record,existsSync('README.md')?'README.md':'README.txt']){
 if(!existsSync(f))throw Error(`Missing ${f}`);
 const s=readFileSync(f,'utf8');
 if(f===record&&!s.includes('Cristian Bogdan'))throw Error('Accountable owner missing');
 for(const m of s.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)){
  const raw=m[1].replace(/^<|>$/g,'').split('#')[0];
  if(!raw||/^[a-z]+:/i.test(raw)||raw.startsWith('/'))continue;
  if(!existsSync(resolve(dirname(f),decodeURIComponent(raw))))throw Error(`${f}: missing link ${raw}`);
 }
}
if(existsSync('package.json'))JSON.parse(readFileSync('package.json','utf8'));
console.log('Validated adoption ownership, current README links and package metadata.');

import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {execFileSync,spawnSync} from 'node:child_process';
const guard=resolve('.github/scripts/verify-action-runtimes.mjs');
for(const [label,input,expected] of [
 ['mutable tag','uses: actions/checkout@v7','not immutable'],
 ['deprecated Node','node-version: 20','unsupported Node'],
 ['mutable Docker action','uses: docker://alpine:latest','not immutable']
])test(label,()=>{
 const dir=mkdtempSync(join(tmpdir(),'action-policy-'));
 try{
  execFileSync('git',['init','--quiet',dir]);mkdirSync(join(dir,'.github/workflows'),{recursive:true});
  writeFileSync(join(dir,'.github/workflows/bad.yml'),input+'\n');
  const r=spawnSync(process.execPath,[guard],{cwd:dir,encoding:'utf8'});
  assert.notEqual(r.status,0);assert.match(r.stderr,new RegExp(expected));
 }finally{rmSync(dir,{recursive:true,force:true});}
});

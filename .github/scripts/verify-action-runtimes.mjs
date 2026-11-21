import {execFileSync} from 'node:child_process';
import {readFileSync,existsSync} from 'node:fs';
const files=execFileSync('git',['ls-files','--cached','--others','--exclude-standard','.github'],{encoding:'utf8'}).trim().split(/\r?\n/).filter(f=>/\.ya?ml$/.test(f));
const refs=new Set();
for(const f of files){
  if(!existsSync(f))continue;
  const s=readFileSync(f,'utf8');
  for(const m of s.matchAll(/^\s*node-version:\s*["']?(\d+)/gm))if(!['22','24'].includes(m[1]))throw Error(`${f}: unsupported Node ${m[1]}`);
  for(const m of s.matchAll(/^\s*(?:-\s*)?uses:\s*([^\s#]+)/gm)){
    const r=m[1].replace(/^["']|["']$/g,'');
    if(r.startsWith('./'))continue;
    if(r.startsWith('docker://')&&/@sha256:[a-f0-9]{64}$/.test(r))continue;
    if(!/^[\w.-]+\/[\w.-]+(?:\/[\w./-]+)?@[a-f0-9]{40}$/.test(r))throw Error(`${f}: external executable input is not immutable: ${r}`);
    refs.add(r);
  }
}
for(const ref of [...refs].sort()){
  const [loc,sha]=ref.split('@');const [owner,repo,...dir]=loc.split('/');
  if(/\.ya?ml$/.test(loc))continue; // Immutable reusable workflow; its own gate owns nested inputs.
  let metadata;
  for(const name of ['action.yml','action.yaml']){
    const response=await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${sha}/${[...dir,name].join('/')}`,{signal:AbortSignal.timeout(30000)});
    if(response.status===404&&name==='action.yml')continue;
    if(!response.ok)throw Error(`${ref}: metadata HTTP ${response.status}`);
    metadata=await response.text();if(metadata.length>1024*1024)throw Error(`${ref}: oversized metadata`);break;
  }
  const runtime=metadata.match(/^\s*using:\s*["']?([\w]+)/m)?.[1];
  if(!['node24','composite','docker'].includes(runtime))throw Error(`${ref}: deprecated action runtime ${runtime}`);
  console.log(`${ref}: ${runtime}`);
}
console.log(`Verified ${refs.size} immutable actions; JavaScript actions use Node 24.`);

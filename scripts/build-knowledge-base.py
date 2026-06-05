"""
build-knowledge-base.py
Reads all .md/.mdx files from docs/ folder,
strips JSX/frontmatter, and outputs knowledge-base.json
with real page URLs for each chunk.

Run: python scripts/build-knowledge-base.py
"""

import os, re, json

SITE_URL = 'https://mykkp-pemohon-docs-stg.pages.dev'
DOCS_DIR = 'docs'
OUTPUT = 'worker/knowledge-base.json'

def clean(content):
    content = re.sub(r'^---\n.*?---\n', '', content, flags=re.DOTALL)
    content = re.sub(r'^import .*\n', '', content, flags=re.MULTILINE)
    content = re.sub(r'<[^>]+>', '', content)
    content = re.sub(r'\n{3,}', '\n\n', content)
    return content.strip()

def get_title(content, filepath):
    m = re.search(r'^---\n.*?title:\s*["\']?([^"\'\n]+)["\']?.*?---', content, re.DOTALL)
    if m:
        return m.group(1).strip()
    m = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    if m:
        return m.group(1).strip()
    return os.path.basename(filepath).replace('.md', '').replace('-', ' ').title()

def file_to_url(filepath):
    rel = filepath.replace(DOCS_DIR, '').lstrip('/')
    rel = re.sub(r'\.mdx?$', '', rel)
    return f'{SITE_URL}/docs/{rel}'

chunks = []

for root, dirs, files in os.walk(DOCS_DIR):
    # Skip hidden folders
    dirs[:] = [d for d in dirs if not d.startswith('.')]
    for fname in sorted(files):
        if not (fname.endswith('.md') or fname.endswith('.mdx')):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            raw = f.read()
        title = get_title(raw, fpath)
        url = file_to_url(fpath)
        text = clean(raw)
        if len(text) < 50:
            continue
        chunks.append({'title': title, 'url': url, 'content': text})

os.makedirs('worker', exist_ok=True)
with open(OUTPUT, 'w', encoding='utf-8') as f:
    json.dump(chunks, f, ensure_ascii=False, indent=2)

print(f'✅ Built {len(chunks)} chunks → {OUTPUT}')

#!/usr/bin/env python3
import json, sys

files = {}
for name in ['index.html', 'chapter11.html']:
    with open(name, encoding='utf-8') as f:
        files[name] = f.read()

print(json.dumps(files))

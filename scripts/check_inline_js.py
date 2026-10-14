#!/usr/bin/env python3
"""Syntax-check inline JavaScript in the site HTML without executing it."""
from pathlib import Path
import re
import subprocess
import tempfile
import sys

FILES = ["index.html", "notices.html"]
SCRIPT_RE = re.compile(r"<script\b([^>]*)>(.*?)</script\s*>", re.IGNORECASE | re.DOTALL)

def main():
    errors = []
    with tempfile.TemporaryDirectory() as tmp:
        for filename in FILES:
            path = Path(filename)
            if not path.exists():
                errors.append(f"{filename}: file missing")
                continue
            html = path.read_text(encoding="utf-8")
            found = 0
            for number, match in enumerate(SCRIPT_RE.finditer(html), 1):
                attrs, body = match.group(1), match.group(2)
                if re.search(r"\bsrc\s*=", attrs, re.IGNORECASE) or not body.strip():
                    continue
                found += 1
                is_module = 'type="module"' in attrs.lower() or "type='module'" in attrs.lower()
                suffix = ".mjs" if is_module else ".js"
                check_path = Path(tmp) / f"{path.stem}_{number}{suffix}"
                check_path.write_text(body, encoding="utf-8")
                result = subprocess.run(
                    ["node", "--check", str(check_path)],
                    text=True, capture_output=True
                )
                if result.returncode:
                    errors.append(f"{filename} inline script {number}:\n{result.stderr}")
            if not found:
                errors.append(f"{filename}: no inline scripts found")
    if errors:
        print("\n".join(errors))
        return 1
    print("Inline JavaScript syntax checks passed.")
    return 0

if __name__ == "__main__":
    sys.exit(main())

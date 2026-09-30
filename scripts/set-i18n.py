#!/usr/bin/env python3
"""
Réécrit des clés de lib/i18n.ts, dans les trois langues, sans toucher au reste.

Le fichier mélange deux formes pour la même chose : l'entrée sur une ligne
(`'k': { en: '…', fr: '…', hu: '…' },`) et l'entrée sur plusieurs lignes quand le
texte est long. Un sed ne sait pas faire la différence, d'où ce script : il
repère la clé, avance jusqu'à l'accolade fermante en comptant les niveaux, et
remplace le bloc entier par une entrée multi-lignes normalisée.

Usage :
    python3 scripts/set-i18n.py chemin/vers/remplacements.json

Le JSON : { "clé": {"fr": "…", "en": "…", "hu": "…"}, … }
Une clé absente du fichier i18n fait échouer le script plutôt que d'être
ignorée en silence : une faute de frappe dans une clé ne doit pas passer.
"""
import json
import re
import sys
from pathlib import Path

I18N = Path(__file__).resolve().parent.parent / 'lib' / 'i18n.ts'


def js_quote(value: str) -> str:
    """Guillemet simple à la façon du fichier : échappe \\ puis ' puis les sauts de ligne."""
    return value.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')


def block_end(text: str, open_brace: int) -> int:
    """Index juste après l'accolade fermante qui correspond à celle d'ouverture."""
    depth = 0
    i = open_brace
    while i < len(text):
        c = text[i]
        if c == "'":                       # saute la chaîne, accolades comprises
            i += 1
            while i < len(text) and text[i] != "'":
                i += 2 if text[i] == '\\' else 1
        elif c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    raise ValueError('accolade fermante introuvable')


def main() -> int:
    replacements = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
    source = I18N.read_text(encoding='utf-8')
    done, missing = 0, []

    for key, langs in replacements.items():
        for lang in ('fr', 'en', 'hu'):
            if lang not in langs:
                raise SystemExit(f"{key} : il manque la langue « {lang} »")

        pattern = re.compile(r"^(\s*)'" + re.escape(key) + r"':\s*\{", re.M)
        match = pattern.search(source)
        if not match:
            missing.append(key)
            continue

        end = block_end(source, match.end() - 1)
        indent = match.group(1)
        entry = (
            f"{indent}'{key}': {{\n"
            f"{indent}  en: '{js_quote(langs['en'])}',\n"
            f"{indent}  fr: '{js_quote(langs['fr'])}',\n"
            f"{indent}  hu: '{js_quote(langs['hu'])}',\n"
            f"{indent}}}"
        )
        source = source[:match.start()] + entry + source[end:]
        done += 1

    if missing:
        raise SystemExit('clés introuvables : ' + ', '.join(missing))

    I18N.write_text(source, encoding='utf-8')
    print(f'{done} clés réécrites dans les trois langues')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())

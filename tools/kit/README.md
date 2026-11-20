# Family Protection Kit PDFs

`gen.py` writes one HTML file per sheet to /tmp/kit. `pdf.mjs` turns them into Letter and A4 PDFs in `public/downloads/` (needs `puppeteer-core` and Chrome).

When the domain is bought: add the website address to the `FOOT` line in `gen.py`, re-run both scripts, and commit the new PDFs.

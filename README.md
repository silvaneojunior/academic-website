# silvaneojunior.com — redesigned R Markdown site

This package is intended to replace the current source files in the
`academic-website` repository.

## What changed

- Homepage is now only the profile/summary experience, plus a decorative
  nature photograph band.
- Research, Publications, Software, and Talks remain separate pages.
- Wider editorial layout with a centered 1180px desktop grid.
- New navy / teal / terracotta / cream visual identity.
- New `SV` favicon and navbar mark.
- Your waterfall portrait is used on the homepage.
- Your own ocean and nature photographs are used throughout the design.
- Subtle reveal-on-scroll animation, hover motion, and active-nav underline.
- Animations automatically disable when the visitor requests reduced motion.
- LinkedIn remains in the navbar/footer.
- No CV link is included.

## Important cleanup when replacing your repository

Delete the old `assets/cv.pdf` file if it is still present. It is not used by
the new site.

You may also delete the old `assets/profile.jpg` and
`assets/profile-fallback.svg` if you want; the new homepage uses
`assets/hero-waterfall.jpg`.

Do not commit `docs/`; the GitHub Actions workflow renders it automatically.

## Render locally

```r
rmarkdown::render_site()
```

or:

```r
source("render.R")
```

## OnlineSurr logo

The GitHub Actions workflow downloads the current OnlineSurr hex logo before
rendering. This preserves the package's official/current icon without storing
an outdated duplicate in the site repository.

## Main files to edit later

- `index.Rmd` — homepage summary
- `research.Rmd` — research themes
- `publications.Rmd` — papers and thesis
- `software.Rmd` — packages
- `talks.Rmd` — talks
- `styles.css` — colors/layout
- `site.js` — small interactions/animations
- `includes/nav.html` — navigation

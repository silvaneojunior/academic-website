Prepared as an additive follow-up to the earlier homepage background update.

Purpose
-------
Keep the interior-page banners, but replace the otherwise blank cream background
with subtle botanical/bird decoration near the outer margins, similar to the
homepage. The new interior banners use the other beach image (ocean-banner-alt.jpg).

Files to add
------------
background.css                (replace your current background.css with this updated one)
assets/interior-decor.svg
assets/ocean-banner-alt.jpg

Files to replace
----------------
research.Rmd
publications.Rmd
software.Rmd
talks.Rmd

Notes
-----
- This package assumes your current repository already loads background.css from
  includes/head.html (from the earlier homepage update).
- The changes are intentionally additive and should preserve your current page
  content while adding decorative edge backgrounds and swapping the interior
  banner image.
- If you made additional copy edits inside these .Rmd files, merge those edits
  back after replacing or manually copy the new outer wrapper line:

    ::: {.interior-background-page}
    ...page content...
    :::

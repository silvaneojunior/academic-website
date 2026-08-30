# Render the entire R Markdown website.
# Run from the project root:
#
#   source("render.R")
#
# or:
#
#   rmarkdown::render_site()

if (!requireNamespace("rmarkdown", quietly = TRUE)) {
  install.packages("rmarkdown")
}

rmarkdown::render_site()

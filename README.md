# Silvaneo dos Santos Jr. — R Markdown academic website

This is an academic website built with **R Markdown** and designed to be published
with **GitHub Pages**.

The source of the website is the `.Rmd` files. You should normally edit those,
not the generated HTML.

## Files

```text
.
├── _site.yml
├── index.Rmd
├── research.Rmd
├── publications.Rmd
├── software.Rmd
├── talks.Rmd
├── styles.css
├── header.html
├── render.R
├── assets/
│   └── cv.pdf
└── .github/
    └── workflows/
        └── deploy.yml
```

## Editing the website

Edit the corresponding `.Rmd` file:

- `index.Rmd` — homepage, education, interests, skills
- `research.Rmd` — research projects
- `publications.Rmd` — papers and preprints
- `software.Rmd` — R packages/software
- `talks.Rmd` — talks and presentations
- `_site.yml` — navigation menu
- `styles.css` — visual style

Because this is R Markdown, you can also include ordinary R code chunks in any
page.

Example:

    ```{r}
    summary(cars)
    ```

## Preview locally

Open the project in RStudio and run:

```r
rmarkdown::render_site()
```

or:

```r
source("render.R")
```

The rendered website will be written to the `docs/` directory.

To preview it from RStudio, you can also use:

```r
servr::httd("docs")
```

if you have the `servr` package installed.

## Publish automatically with GitHub Pages

The project includes `.github/workflows/deploy.yml`.

### 1. Create the repository

For the standard GitHub address, create:

```text
silvaneojunior.github.io
```

Then push this project to the `main` branch.

### 2. Configure GitHub Pages

In the repository:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

After that, every push to `main` will:

1. install R and Pandoc,
2. render the `.Rmd` files,
3. build the website into `docs/`,
4. deploy the result to GitHub Pages.

You do not need to commit the generated `docs/` directory because the workflow
builds it automatically.

## Custom domain

The same GitHub Pages site can later use a domain such as:

```text
silvaneojunior.com
```

Once you own the domain:

1. Open **Settings → Pages** in the GitHub repository.
2. Enter `silvaneojunior.com` under **Custom domain**.
3. Configure the domain's DNS records to point to GitHub Pages.
4. Enable **Enforce HTTPS** after GitHub finishes provisioning the certificate.

The R Markdown source does not need to change when you switch from the
`github.io` address to a custom domain.

## Add LinkedIn, ResearchGate, or Google Scholar

Edit the `navbar` section of `_site.yml`, or add links in `index.Rmd`.

For example:

```yaml
right:
  - text: "Scholar"
    href: https://scholar.google.com/...
  - icon: fa-github
    href: https://github.com/silvaneojunior
```

## RStudio project

You can optionally create an RStudio Project in this directory. No special
package structure is required.

dir.create("assets", showWarnings = FALSE)

onlinesurr_logo <- "assets/onlinesurr-hex.png"
onlinesurr_url <- "https://silvaneojunior.github.io/OnlineSurr/reference/figures/hex_badge.png"

if (!file.exists(onlinesurr_logo)) {
  message("Downloading the official OnlineSurr package logo...")
  tryCatch(
    utils::download.file(onlinesurr_url, onlinesurr_logo, mode = "wb", quiet = TRUE),
    error = function(e) {
      warning("Could not download OnlineSurr logo: ", conditionMessage(e))
    }
  )
}

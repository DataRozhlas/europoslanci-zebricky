library(xml2)
library(tidyverse)
library(jsonlite)

# europarl.europa.eu - úplný seznam současných europoslanců
url <- "http://www.europarl.europa.eu/meps/cs/full-list/xml"
meps_europarl <-  read_xml(url)
fullName <- xml_find_all(meps_europarl, "//fullName") %>% xml_text
country <- xml_find_all(meps_europarl, "//country") %>% xml_text
politicalGroup <- xml_find_all(meps_europarl, "//politicalGroup") %>% xml_text
id <- xml_find_all(meps_europarl, "//id") %>% xml_text
nationalPoliticalGroup <- xml_find_all(meps_europarl, "//nationalPoliticalGroup") %>% xml_text
meps_europarl <- data.frame(id, fullName, country, nationalPoliticalGroup, politicalGroup)
rm(country, fullName, id, nationalPoliticalGroup, politicalGroup, url)
meps_europarl$id <- as.numeric(as.character(meps_europarl$id))

# stáhni fotky všech europoslanců
for (i in meps_europarl$id) {
  download.file(paste0("http://www.europarl.europa.eu/mepphoto/", i, ".jpg"), paste0("../foto/", i, ".jpg"))  
}

# stáhni mepranking
c <- 1
for (i in meps_europarl$id) {
  mep <- read_lines(paste0("http://www.mepranking.eu/8/mep.php?id=", i))
  writeLines(mep, paste0("mepranking/", i, ".html"))
  c <- c + 1
  print(c)
}
rm(c)

meps <- data.frame(id=numeric, pritomen=numeric(), celkem=numeric(), omluven=numeric())

# vytáhni účast na plenárních zasedáních
for (i in meps_europarl$id) {
  mep <- read_html(paste0("mepranking/", i , ".html")) %>% html_nodes("font") %>% .[8]
  mep <- mep %>% html_nodes("b") %>% html_text()
  mep <- as.numeric(mep)
  if (length(mep)==0) {
    mep <- read_html(paste0("mepranking/", i , ".html")) %>% html_nodes("font") %>% .[9]
    mep <- mep %>% html_nodes("b") %>% html_text()
    mep <- as.numeric(mep)
  }
  if (length(mep)==2) {
    mep <- c(mep,NA)
  }
  print(mep)
  meps <- rbind(meps, c(as.numeric(i), mep))
}

names(meps) <-c("id", "pritomen", "celkem", "omluven")

meps$omluven[is.na(meps$omluven)] <- 0

meps$pct <- floor(meps$pritomen/meps$celkem*100)

meps_europarl$fullName <- as.character(meps_europarl$fullName)

absence <- left_join(meps_europarl, meps)
names(absence) <- c("i", "n", "c", "p", "g", "a", "pr", "s", "e")

absence %>%
  arrange(desc(e), desc(a), n) %>%
  toJSON()


url <- "https://www.votewatch.eu//en/term8-european-parliament-members.html?limit=100"

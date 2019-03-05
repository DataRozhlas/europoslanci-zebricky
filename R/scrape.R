library(rvest)
library(xml2)

# europarl.europa.eu

# úplný seznam současných europoslanců
url <- "http://www.europarl.europa.eu/meps/cs/full-list/xml"
meps_europarl <-  read_xml(url)
meps_europarl <- xml_find_all(meps_europarl, "//mep")

xml_text(meps_europarl)

url <- "https://www.votewatch.eu//en/term8-european-parliament-members.html?limit=100"

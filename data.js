// A data file containing a dictionary sending IDs to song titles. 
// IDs are 4 digits, where first digit corresponds to type (e.g. classical, anime, etc.)
var dict = {
  "0000": "Chopin Nocturne Op. 15 No. 2", // https://www.youtube.com/watch?v=cnnSeChY--M
  "0001": "Chopin Nocturne Op. 27 No. 2", // https://www.youtube.com/watch?v=WJ8RVjm49hE
  "0002": "Chopin Nocturne Op. 32 No. 1", // https://www.youtube.com/watch?v=BhIP4hDBp-E
  "0003": "Chopin Nocturne Op. 32 No. 2", // https://www.youtube.com/watch?v=my5OSmQZjns
  "0004": "Chopin Nocturne Op. 37 No. 2", // https://www.youtube.com/watch?v=LNhbc87JBro
  "0005": "Chopin Nocturne Op. 48 No. 1", // https://www.youtube.com/watch?v=-7mntyrW3HU
  "0006": "Chopin Nocturne Op. 48 No. 2", // https://www.youtube.com/watch?v=O5X4XDrsOlI
  "0007": "Chopin Nocturne Op. 55 No. 1", // https://www.youtube.com/watch?v=e3yrEEM5j_s
  "0008": "Chopin Nocturne Op. 55 No. 2", // https://www.youtube.com/watch?v=TbPDxbUp0_g
  "0009": "Chopin Nocturne Op. 62 No. 1", // https://www.youtube.com/watch?v=1FeogxNAJWY
  "0010": "Chopin Nocturne Op. 62 No. 2", // https://www.youtube.com/watch?v=LRZjjQxGaYQ
};

var idPair = []
for (const [key, value] of Object.entries(dict)) {
  idPair.push([key, value]);
}

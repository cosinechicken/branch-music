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
  "0020": "Chopin Grand Valse Brillante Op. 18",  // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0021": "Chopin Grand Valse Brillante Op. 34 No. 1",  // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0022": "Chopin Grand Valse Op. 42",    // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0023": "Chopin Waltz Op. 64 No. 1",    // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0024": "Chopin Waltz Op. 64 No. 2",    // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0025": "Chopin Waltz Op. 64 No. 3",    // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0026": "Chopin Waltz Op. 69 No. 2",    // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0027": "Chopin Waltz Op. 70 No. 1",    // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0028": "Chopin Waltz Op. 70 No. 3",    // https://www.youtube.com/watch?v=qs9lRO9WT8g
  "0030": "Chopin Prelude Op. 28 No. 1",  // https://www.youtube.com/watch?v=SqXYIteAfNs
  "0031": "Chopin Prelude Op. 28 No. 8",  // https://www.youtube.com/watch?v=SqXYIteAfNs
  "0032": "Chopin Prelude Op. 28 No. 11", // https://www.youtube.com/watch?v=SqXYIteAfNs
  "0033": "Chopin Prelude Op. 28 No. 17", // https://www.youtube.com/watch?v=SqXYIteAfNs
  "0034": "Chopin Prelude Op. 28 No. 19", // https://www.youtube.com/watch?v=SqXYIteAfNs
  "0035": "Chopin Prelude Op. 28 No. 24", // https://www.youtube.com/watch?v=SqXYIteAfNs
  "0040": "Chopin Etude Op. 10 No. 3",    // https://www.youtube.com/watch?v=JS7KfOyMEIY
  "0041": "Chopin Etude Op. 10 No. 5",    // https://www.youtube.com/watch?v=gqHL2nvWs2U
  "0042": "Chopin Etude Op. 10 No. 7",    // https://www.youtube.com/watch?v=RZWjOzBl0zU
  "0043": "Chopin Etude Op. 10 No. 10",   // https://www.youtube.com/watch?v=xtgywzzc5cA
  "0044": "Chopin Etude Op. 10 No. 12",   // https://www.youtube.com/watch?v=w2vLEQno9Ks
  "0050": "Chopin Etude Op. 25 No. 1",    // https://www.youtube.com/watch?v=fRqynzR_8Ts
  "0051": "Chopin Etude Op. 25 No. 2",    // https://www.youtube.com/watch?v=cm7VtX1kfbs
  "0052": "Chopin Etude Op. 25 No. 5",    // https://www.youtube.com/watch?v=NkdgFfKIWbA
  "0053": "Chopin Etude Op. 25 No. 6",    // https://www.youtube.com/watch?v=ir1LGur9LQs
  "0054": "Chopin Etude Op. 25 No. 7",    // https://www.youtube.com/watch?v=cRCA62tF1EQ
  "0055": "Chopin Etude Op. 25 No. 8",    // https://www.youtube.com/watch?v=CrvgD3UbBOs
  "0056": "Chopin Etude Op. 25 No. 9",    // https://www.youtube.com/watch?v=6hc5FKmr3FA
  "0057": "Chopin Etude Op. 25 No. 12",   // https://www.youtube.com/watch?v=5M2PO4f5Y7k
  "0060": "Chopin Ballade No. 1 Op. 23",  // https://www.youtube.com/watch?v=BSFNl4roGlI
  "0061": "Chopin Ballade No. 2 Op. 38",  // https://www.youtube.com/watch?v=Wslm1ZL9EI8
  "0062": "Chopin Ballade No. 3 Op. 47",  // https://www.youtube.com/watch?v=BkPLDoZXlHQ
  "0063": "Chopin Ballade No. 4 Op. 52",  // https://www.youtube.com/watch?v=pe-GrRQz8pk
  "0064": "Chopin Barcarolle Op. 60", // https://www.youtube.com/watch?v=pe-GrRQz8pk
  "0065": "Chopin Andante Spianato Op. 22 No. 1", // https://www.youtube.com/watch?v=jJ130s7BiSM
  "0066": "Chopin Grand Polonaise Brillante Op. 22 No. 1",  // https://www.youtube.com/watch?v=jJ130s7BiSM
  "0067": "Chopin Polonaise Op. 53",  // https://www.youtube.com/watch?v=8QT7ITv9Ecs
  "0068": "Chopin Polonaise-Fantaisie Op. 61",  // https://www.youtube.com/watch?v=177qJoCI9Zw

};

var idPair = []
for (const [key, value] of Object.entries(dict)) {
  idPair.push([key, value]);
}

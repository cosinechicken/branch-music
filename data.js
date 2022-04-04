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
  "0070": "Chopin Impromptu No. 1 Op. 29",  // https://www.youtube.com/watch?v=177qJoCI9Zw
  "0071": "Chopin Impromptu No. 3 Op. 51",  // https://www.youtube.com/watch?v=4Qw9dwmyths
  "0072": "Chopin Fantaisie Impromptu Op. 66",  // https://www.youtube.com/watch?v=H4v4Ipl_UJI
  "0073": "Chopin Scherzo No. 2 Op. 31",  // https://www.youtube.com/watch?v=z_MwPdr7WXQ
  "0074": "Chopin Scherzo No. 4 Op. 54",  // https://www.youtube.com/watch?v=Bd_9hgpo1u4
  "0075": "Chopin Berceuse Op. 57",  // https://www.youtube.com/watch?v=TGXXLaO0Ke4
  "0080": "Chopin Sonata No. 1 Op. 4 Mov. 1", // https://www.youtube.com/watch?v=vL-NDDI4BfE
  "0081": "Chopin Sonata No. 1 Op. 4 Mov. 4", // https://www.youtube.com/watch?v=vL-NDDI4BfE
  "0082": "Chopin Sonata No. 2 Op. 35 Mov. 1",  // https://www.youtube.com/watch?v=VUk3_qTTVg4
  "0083": "Chopin Sonata No. 2 Op. 35 Mov. 3",  // https://www.youtube.com/watch?v=VUk3_qTTVg4
  "0084": "Chopin Sonata No. 3 Op. 58 Mov. 1",  // https://www.youtube.com/watch?v=xGJxmCOPFVM
  "0085": "Chopin Sonata No. 3 Op. 58 Mov. 3",  // https://www.youtube.com/watch?v=xGJxmCOPFVM
  "0090": "Chopin Piano Concerto No. 1 Op. 11 Mov. 1",  // https://www.youtube.com/watch?v=dr0I8FvoIhc
  "0091": "Chopin Piano Concerto No. 1 Op. 11 Mov. 2",  // https://www.youtube.com/watch?v=dr0I8FvoIhc
  "0092": "Chopin Piano Concerto No. 1 Op. 11 Mov. 3",  // https://www.youtube.com/watch?v=dr0I8FvoIhc
  "0093": "Chopin Piano Concerto No. 2 Op. 21 Mov. 1",  // https://www.youtube.com/watch?v=Fqq2kFyXupo
  "0094": "Chopin Piano Concerto No. 2 Op. 21 Mov. 2",  // https://www.youtube.com/watch?v=Fqq2kFyXupo
  "0095": "Chopin Piano Concerto No. 2 Op. 21 Mov. 3",  // https://www.youtube.com/watch?v=Fqq2kFyXupo
  "0100": "Liszt Liebestraum No. 3",  // https://www.youtube.com/watch?v=KpOtuoHL45Y
  "0101": "Liszt Consolation No. 2",  // https://www.youtube.com/watch?v=sUDqX4AZL7w
  "0102": "Liszt Consolation No. 3",  // https://www.youtube.com/watch?v=MfDmUk7ie6s
  "0103": "Liszt La Leggierezza", // https://www.youtube.com/watch?v=yK0YCDT7pO4
  "0104": "Liszt Un Sospiro", // https://www.youtube.com/watch?v=3JXMdpGpfBU
  "0105": "Liszt Piano Concerto No. 1", // https://www.youtube.com/watch?v=xm_m4pBxxk8
  "0106": "Liszt Mephisto Waltz", // https://www.youtube.com/watch?v=KJbg9V2KnD8
  "0107": "Liszt Sonata in B Minor",  // https://www.youtube.com/watch?v=IeKMMDxrsBE
  "0108": "Liszt-Alabieff Le Rossignol", // https://www.youtube.com/watch?v=9wWHm8Cl64g
  "0200": "Schubert Impromptu Op. 90 No. 1",  // https://www.youtube.com/watch?v=149UGrLzR5w
  "0201": "Schubert Impromptu Op. 90 No. 2",  // https://www.youtube.com/watch?v=L4B1IJmjsyo
  "0202": "Schubert Impromptu Op. 90 No. 3",  // https://www.youtube.com/watch?v=FxhbAGwEYGQ
  "0203": "Schubert Serenade",  // https://www.youtube.com/watch?v=PXis0PtqdXw (+25%)
  "0204": "Schubert Symphony No. 8 Mov. 1", // https://www.youtube.com/watch?v=0mnrHf7p0jM
  "0205": "Schubert Symphony No. 8 Mov. 2", // https://www.youtube.com/watch?v=0mnrHf7p0jM
  "0300": "Beethoven Sonata No. 8 Mov. 1",  // https://www.youtube.com/watch?v=M_124D_7KoU
  "0301": "Beethoven Sonata No. 8 Mov. 2",  // https://www.youtube.com/watch?v=M_124D_7KoU
  "0302": "Beethoven Sonata No. 8 Mov. 3",  // https://www.youtube.com/watch?v=M_124D_7KoU
  "0303": "Beethoven Sonata No. 17 Mov. 1", // https://www.youtube.com/watch?v=hl_6lAvMsKE
  "0304": "Beethoven Sonata No. 17 Mov. 3", // https://www.youtube.com/watch?v=hl_6lAvMsKE
  "0305": "Beethoven Sonata No. 23 Mov. 1", // https://www.youtube.com/watch?v=txChVYmy4BI
  "0306": "Beethoven Sonata No. 23 Mov. 3", // https://www.youtube.com/watch?v=txChVYmy4BI
  "0307": "Beethoven Violin Sonata No. 5 Mov. 1", // https://www.youtube.com/watch?v=DHP9fQvTG7I
  "0308": "Beethoven Violin Sonata No. 9 Mov. 1", // https://www.youtube.com/watch?v=5YKmb7_y3E8
  "0309": "Beethoven Symphony No. 3 Mov. 1",  // https://www.youtube.com/watch?v=5YKmb7_y3E8
  "0400": "Rachmaninoff Elegie Op. 3 No. 1",  // https://www.youtube.com/watch?v=sTUxrPJfpqk
  "0401": "Rachmaninoff Symphony No. 2 Mov. 3", // https://www.youtube.com/watch?v=lW27c9yhNJ8
  "0402": "Rachmaninoff Piano Concerto No. 1 Mov. 1", // https://www.youtube.com/watch?v=F7a9K4lvVn8
  "0403": "Rachmaninoff Piano Concerto No. 1 Mov. 2", // https://www.youtube.com/watch?v=F7a9K4lvVn8
  "0404": "Rachmaninoff Piano Concerto No. 1 Mov. 3", // https://www.youtube.com/watch?v=F7a9K4lvVn8
  "0405": "Rachmaninoff Piano Concerto No. 2 Mov. 1", // https://www.youtube.com/watch?v=kS8hk0kL2sE
  "0406": "Rachmaninoff Piano Concerto No. 2 Mov. 2", // https://www.youtube.com/watch?v=kS8hk0kL2sE
  "0407": "Rachmaninoff Piano Concerto No. 2 Mov. 3", // https://www.youtube.com/watch?v=kS8hk0kL2sE
  "0500": "Tchaikovsky Waltz of the Flowers", // https://www.youtube.com/watch?v=YPw3efunBXw
  "0501": "Tchaikovsky Swan Lake Waltz",  // https://www.youtube.com/watch?v=CShopT9QUzw
  "0502": "Tchaikovsky Sleeping Beauty Waltz",  // https://www.youtube.com/watch?v=2Sb8WCPjPDs
  "0503": "Tchaikovsky Violin Concerto Mov. 1", // https://www.youtube.com/watch?v=QCKL95HAdQ8
  "0504": "Tchaikovsky Violin Concerto Mov. 3", // https://www.youtube.com/watch?v=QCKL95HAdQ8
  "0600": "Debussy Clair de Lune",  // https://www.youtube.com/watch?v=CvFH_6DNRCY
  "0601": "Debussy Arabesque No. 1",  // https://www.youtube.com/watch?v=Yh36PaE-Pf0
  "0602": "Debussy Arabesque No. 2",  // https://www.youtube.com/watch?v=KKHeEw7whUQ  
  "0603": "Debussy Reverie",  // https://www.youtube.com/watch?v=QRjllL-MP0U
  "0610": "Paganini Cantabile", // https://www.youtube.com/watch?v=2llF6u_H7Cs
  "0611": "Paganini Violin Concerto No. 1 Mov. 1",  // https://www.youtube.com/watch?v=MenIhT7umeM
  "0612": "Paganini Violin Concerto No. 2 Mov. 3",  // https://www.youtube.com/watch?v=wDr5EqztV4A
  "0620": "Brahms Violin Concerto Mov. 1",  // https://www.youtube.com/watch?v=7C_U7eUbVd8
  "0621": "Brahms Hungarian Dance No. 1", // https://www.youtube.com/watch?v=0egvi2CBrM4
  "0622": "Brahms Hungarian Dance No. 5", // https://www.youtube.com/watch?v=Nzo3atXtm54
  "0630": "Saint-Saens Introduction Rondo Capriccioso", // https://www.youtube.com/watch?v=Q0ajM7aL-Vc
  "0631": "Saint-Saens The Swan", // https://www.youtube.com/watch?v=b44-5M4e9nI
  "0640": "Mendelssohn Violin Concerto Mov. 1", // https://www.youtube.com/watch?v=Pmj7nCRYNs4
  "0641": "Mendelssohn Piano Concerto No. 1 Mov. 3",  // https://www.youtube.com/watch?v=2GGx8TRWFVA
  "0650": "Haydn Serenade Op. 3 No. 5", // https://www.youtube.com/watch?v=okHgNrqpW3E
  "0651": "Rossini Barber of Seville",  // https://www.youtube.com/watch?v=OloXRhesab0
  "0652": "Glinka The Lark",  // https://www.youtube.com/watch?v=cxlf-ZmE8JI
  "0653": "Poulenc Improvisation No. 15", // https://www.youtube.com/watch?v=mmxsoi1Xeug
  "0654": "Kreisler Liebesleid",  // https://www.youtube.com/watch?v=ofQfRMpm7Ks
  "0655": "Mozart Symphony No. 41 Mov. 4",  // https://www.youtube.com/watch?v=C6EOb86YdIs
  "0656": "Ravel Pavane for a Dead Princess", // https://www.youtube.com/watch?v=GKkeDqJBlK8
  "0657": "Gliere Harp Concerto", // https://www.youtube.com/watch?v=t7Pai-BASak
  "0658": "Moszkowski Piano Concerto Mov. 1", // https://www.youtube.com/watch?v=eh3l8I-JT4Q
  "0660": "Strauss Fledermaus Overture",  // https://www.youtube.com/watch?v=QROR4LioU-8
  "0661": "Strauss Blue Danube",  // https://www.youtube.com/watch?v=_CTYymbbEL4
  "0662": "Shostakovich Waltz No. 2", // https://www.youtube.com/watch?v=phBThlPTBEg
  "0670": "Sarasate Zigeunerweisen",  // https://www.youtube.com/watch?v=5ysiQMbe_do
  "0671": "Massenet Meditation from Thais", // https://www.youtube.com/watch?v=7QtGOWemQhY
  "1000": "Hikaru Nara - Your Lie in April",  // https://www.youtube.com/watch?v=cWtgGTCAjYY 
  "1001": "Nanairo Symphony - Your Lie in April", // https://www.youtube.com/watch?v=lqRcl2k2xS8
  "1002": "Kirameki - Your Lie in April", // https://www.youtube.com/watch?v=iI_sbL-xhgw
  "1003": "Orange - Your Lie in April", // https://www.youtube.com/watch?v=JdSpuTi9d8A
};

var categories = {
  "Chopin Nocturne Op. 15 No. 2": "Classical",
  "Chopin Nocturne Op. 27 No. 2": "Classical",
  "Chopin Nocturne Op. 32 No. 1": "Classical",
  "Chopin Nocturne Op. 32 No. 2": "Classical",
  "Chopin Nocturne Op. 37 No. 2": "Classical",
  "Chopin Nocturne Op. 48 No. 1": "Classical",
  "Chopin Nocturne Op. 48 No. 2": "Classical",
  "Chopin Nocturne Op. 55 No. 1": "Classical",
  "Chopin Nocturne Op. 55 No. 2": "Classical",
  "Chopin Nocturne Op. 62 No. 1": "Classical",
  "Chopin Nocturne Op. 62 No. 2": "Classical",
  "Chopin Grand Valse Brillante Op. 18": "Classical",
  "Chopin Grand Valse Brillante Op. 34 No. 1": "Classical",
  "Chopin Grand Valse Op. 42": "Classical",
  "Chopin Waltz Op. 64 No. 1": "Classical",
  "Chopin Waltz Op. 64 No. 2": "Classical",
  "Chopin Waltz Op. 64 No. 3": "Classical",
  "Chopin Waltz Op. 69 No. 2": "Classical",
  "Chopin Waltz Op. 70 No. 1": "Classical",
  "Chopin Waltz Op. 70 No. 3": "Classical",
  "Chopin Prelude Op. 28 No. 1": "Classical",
  "Chopin Prelude Op. 28 No. 8": "Classical",
  "Chopin Prelude Op. 28 No. 11": "Classical",
  "Chopin Prelude Op. 28 No. 17": "Classical",
  "Chopin Prelude Op. 28 No. 19": "Classical",
  "Chopin Prelude Op. 28 No. 24": "Classical",
  "Chopin Etude Op. 10 No. 3": "Classical",
  "Chopin Etude Op. 10 No. 5": "Classical",
  "Chopin Etude Op. 10 No. 7": "Classical",
  "Chopin Etude Op. 10 No. 10": "Classical",
  "Chopin Etude Op. 10 No. 12": "Classical",
  "Chopin Etude Op. 25 No. 1": "Classical",
  "Chopin Etude Op. 25 No. 2": "Classical",
  "Chopin Etude Op. 25 No. 5": "Classical",
  "Chopin Etude Op. 25 No. 6": "Classical",
  "Chopin Etude Op. 25 No. 7": "Classical",
  "Chopin Etude Op. 25 No. 8": "Classical",
  "Chopin Etude Op. 25 No. 9": "Classical",
  "Chopin Etude Op. 25 No. 12": "Classical",
  "Chopin Ballade No. 1 Op. 23": "Classical",
  "Chopin Ballade No. 2 Op. 38": "Classical",
  "Chopin Ballade No. 3 Op. 47": "Classical",
  "Chopin Ballade No. 4 Op. 52": "Classical",
  "Chopin Barcarolle Op. 60": "Classical",
  "Chopin Andante Spianato Op. 22 No. 1": "Classical",
  "Chopin Grand Polonaise Brillante Op. 22 No. 1": "Classical",
  "Chopin Polonaise Op. 53": "Classical",
  "Chopin Polonaise-Fantaisie Op. 61": "Classical",
  "Chopin Impromptu No. 1 Op. 29": "Classical",
  "Chopin Impromptu No. 3 Op. 51": "Classical",
  "Chopin Fantaisie Impromptu Op. 66": "Classical",
  "Chopin Scherzo No. 2 Op. 31": "Classical",
  "Chopin Scherzo No. 4 Op. 54": "Classical",
  "Chopin Berceuse Op. 57": "Classical",
  "Chopin Sonata No. 1 Op. 4 Mov. 1": "Classical",
  "Chopin Sonata No. 1 Op. 4 Mov. 4": "Classical",
  "Chopin Sonata No. 2 Op. 35 Mov. 1": "Classical",
  "Chopin Sonata No. 2 Op. 35 Mov. 3": "Classical",
  "Chopin Sonata No. 3 Op. 58 Mov. 1": "Classical",
  "Chopin Sonata No. 3 Op. 58 Mov. 3": "Classical",
  "Chopin Piano Concerto No. 1 Op. 11 Mov. 1": "Classical",
  "Chopin Piano Concerto No. 1 Op. 11 Mov. 2": "Classical",
  "Chopin Piano Concerto No. 1 Op. 11 Mov. 3": "Classical",
  "Chopin Piano Concerto No. 2 Op. 21 Mov. 1": "Classical",
  "Chopin Piano Concerto No. 2 Op. 21 Mov. 2": "Classical",
  "Chopin Piano Concerto No. 2 Op. 21 Mov. 3": "Classical",
  "Liszt Liebestraum No. 3": "Classical",
  "Liszt Consolation No. 2": "Classical",
  "Liszt Consolation No. 3": "Classical",
  "Liszt La Leggierezza": "Classical",
  "Liszt Un Sospiro": "Classical",
  "Liszt Piano Concerto No. 1": "Classical",
  "Liszt Mephisto Waltz": "Classical",
  "Liszt Sonata in B Minor": "Classical",
  "Liszt-Alabieff Le Rossignol": "Classical",
  "Schubert Impromptu Op. 90 No. 1": "Classical",
  "Schubert Impromptu Op. 90 No. 2": "Classical",
  "Schubert Impromptu Op. 90 No. 3": "Classical",
  "Schubert Serenade": "Classical",
  "Schubert Symphony No. 8 Mov. 1": "Classical",
  "Schubert Symphony No. 8 Mov. 2": "Classical",
  "Beethoven Sonata No. 8 Mov. 1": "Classical",
  "Beethoven Sonata No. 8 Mov. 2": "Classical",
  "Beethoven Sonata No. 8 Mov. 3": "Classical",
  "Beethoven Sonata No. 17 Mov. 1": "Classical",
  "Beethoven Sonata No. 17 Mov. 3": "Classical",
  "Beethoven Sonata No. 23 Mov. 1": "Classical",
  "Beethoven Sonata No. 23 Mov. 3": "Classical",
  "Beethoven Violin Sonata No. 5 Mov. 1": "Classical",
  "Beethoven Violin Sonata No. 9 Mov. 1": "Classical",
  "Beethoven Symphony No. 3 Mov. 1": "Classical",
  "Rachmaninoff Elegie Op. 3 No. 1": "Classical",
  "Rachmaninoff Symphony No. 2 Mov. 3": "Classical",
  "Rachmaninoff Piano Concerto No. 1 Mov. 1": "Classical",
  "Rachmaninoff Piano Concerto No. 1 Mov. 2": "Classical",
  "Rachmaninoff Piano Concerto No. 1 Mov. 3": "Classical",
  "Rachmaninoff Piano Concerto No. 2 Mov. 1": "Classical",
  "Rachmaninoff Piano Concerto No. 2 Mov. 2": "Classical",
  "Rachmaninoff Piano Concerto No. 2 Mov. 3": "Classical",
  "Tchaikovsky Waltz of the Flowers": "Classical",
  "Tchaikovsky Swan Lake Waltz": "Classical",
  "Tchaikovsky Sleeping Beauty Waltz": "Classical",
  "Tchaikovsky Violin Concerto Mov. 1": "Classical",
  "Tchaikovsky Violin Concerto Mov. 3": "Classical",
  "Debussy Clair de Lune": "Classical",
  "Debussy Arabesque No. 1": "Classical",
  "Debussy Arabesque No. 2": "Classical",
  "Debussy Reverie": "Classical",
  "Paganini Cantabile": "Classical",
  "Paganini Violin Concerto No. 1 Mov. 1": "Classical",
  "Paganini Violin Concerto No. 2 Mov. 3": "Classical",
  "Brahms Violin Concerto Mov. 1": "Classical",
  "Brahms Hungarian Dance No. 1": "Classical",
  "Brahms Hungarian Dance No. 5": "Classical",
  "Saint-Saens Introduction Rondo Capriccioso": "Classical",
  "Saint-Saens The Swan": "Classical",
  "Mendelssohn Violin Concerto Mov. 1": "Classical",
  "Mendelssohn Piano Concerto No. 1 Mov. 3": "Classical",
  "Haydn Serenade Op. 3 No. 5": "Classical",
  "Rossini Barber of Seville": "Classical",
  "Glinka The Lark": "Classical",
  "Poulenc Improvisation No. 15": "Classical",
  "Kreisler Liebesleid": "Classical",
  "Mozart Symphony No. 41 Mov. 4": "Classical",
  "Ravel Pavane for a Dead Princess": "Classical",
  "Gliere Harp Concerto": "Classical",
  "Moszkowski Piano Concerto Mov. 1": "Classical",
  "Strauss Fledermaus Overture": "Classical",
  "Strauss Blue Danube": "Classical",
  "Shostakovich Waltz No. 2": "Classical",
  "Sarasate Zigeunerweisen": "Classical",
  "Massenet Meditation from Thais": "Classical",
  "Hikaru Nara - Your Lie in April": "Anime",
  "Nanairo Symphony - Your Lie in April": "Anime",
  "Kirameki - Your Lie in April": "Anime",
  "Orange - Your Lie in April": "Anime",
};

var infoList = []
var catInfoList = []
for (const [key, value] of Object.entries(dict)) {
  infoList.push([key, value, categories[value]]);
  // Default to classical
  if (categories[value] == "Classical") {
    catInfoList.push([key, value, categories[value]]);
  }
}


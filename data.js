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
	"1004": "Nagisa - Clannad", // https://www.youtube.com/watch?v=hNrXDrs352g
	"1005": "Roaring Tides - Clannad",  // https://www.youtube.com/watch?v=vdk_76z38bA
	"1006": "My Soul Your Beats - Angel Beats", // https://www.youtube.com/watch?v=zIFV8UUs1-c
	"1007": "Brave Song - Angel Beats", // https://www.youtube.com/watch?v=xtcvM3s1I1s
	"1008": "Ichiban no Takaramono - Angel Beats",  // https://www.youtube.com/watch?v=tm7Xf9818FM
	"1009": "Aoi Shiori - Anohana", // https://www.youtube.com/watch?v=T3bxbVGWy5k
	"1010": "Secret Base - Anohana",  // https://www.youtube.com/watch?v=SJywJjwqIK8
	"1011": "Tanjiro no Uta - Demon Slayer",  // https://www.youtube.com/watch?v=bq7caidfUts
	"1012": "Colors - Code Geass",  // https://www.youtube.com/watch?v=G8CFuZ9MseQ
	"1013": "Continued Story - Code Geass", // https://www.youtube.com/watch?v=XHViAiVuDsA
	"1014": "Melissa - Fullmetal Alchemist",  // https://www.youtube.com/watch?v=uMsOlhzPEfY
	"1015": "Again - Fullmetal Alchemist Brotherhood", // https://www.youtube.com/watch?v=B7uMdmCQabc
	"1016": "Kaze ni Fukarete - Kaguya-sama", // https://www.youtube.com/watch?v=RCgOP_3P2T4
	"1017": "Konna Sekai - Akame ga Kill",  // https://www.youtube.com/watch?v=6zvQYq0LDRQ
	"1018": "Tsuki Akari - Akame ga Kill",  // https://www.youtube.com/watch?v=VMM7E464Qtc
	"1019": "Merry Go Round of Life - Howl's Moving Castle",  // https://www.youtube.com/watch?v=UwxatzcYf9Q
	"1020": "Promise of the World - Howl's Moving Castle",  // https://www.youtube.com/watch?v=yuhOUeZHEBo
	"1021": "One Summers' Day - Spirited Away", // https://www.youtube.com/watch?v=smn0HOvwoZ8
	"1022": "Reprise - Spirited Away",  // https://www.youtube.com/watch?v=KgEQNlR4A6o
	"1023": "Always With Me - Spirited Away", //
	"1024": "A Town with an Ocean View - Kiki's Delivery Service",  // https://www.youtube.com/watch?v=fc_dscz6dm0
	"1025": "Rouge no Dengon - Kiki's Delivery Service",  // https://www.youtube.com/watch?v=UJwtKY_iWkM
	"1026": "If I've Been Enveloped in Tenderness - Kiki's Delivery Service", // https://www.youtube.com/watch?v=i8N2qhzfc5E
	"1027": "Sparkle - Your Name",  // https://www.youtube.com/watch?v=-pHfPJGatgE
	"1028": "Zen zen zense - Your Name",  // https://www.youtube.com/watch?v=n4o-i71Jz4E
	"1029": "Sis Puella Magica - Madoka Magica",  // https://www.youtube.com/watch?v=bzlHPlq8hIs
	"1030": "Elegy for Rem - Re Zero",  // https://www.youtube.com/watch?v=pFdyldbdZXA
	"1031": "Wishing - Re Zero",  // https://www.youtube.com/watch?v=fV3Fu5csdcA
	"1032": "Fukashigi no Carte - Aobuta",  // https://www.youtube.com/watch?v=K1PCl5D-IpU
	"1033": "Is There Still Anything That Love Can Do - Weathering With You", // https://www.youtube.com/watch?v=J97ORP768HI
	"1034": "Grand Escape - Weathering With You", // https://www.youtube.com/watch?v=YAXTn0E-Zgo
	"1035": "Hacking to the Gate - Steins;Gate",  // https://www.youtube.com/watch?v=ZGM90Bo3zH0
	"1036": "A Cruel Angel's Thesis - Neon Genesis Evangelion", // https://www.youtube.com/watch?v=k8ozVkIkr-g
	"1037": "This Game - No Game No Life", // https://www.youtube.com/watch?v=4gerQu0ReY0
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
	"Nagisa - Clannad": "Anime",
	"Roaring Tides - Clannad": "Anime",
	"My Soul Your Beats - Angel Beats": "Anime",
	"Brave Song - Angel Beats": "Anime",
	"Ichiban no Takaramono - Angel Beats": "Anime",
	"Aoi Shiori - Anohana": "Anime",
	"Secret Base - Anohana": "Anime",
	"Tanjiro no Uta - Demon Slayer": "Anime",
	"Colors - Code Geass": "Anime",
	"Continued Story - Code Geass": "Anime",
	"Melissa - Fullmetal Alchemist": "Anime",
	"Again - Fullmetal Alchemist Brotherhood": "Anime",
	"Kaze ni Fukarete - Kaguya-sama": "Anime",
	"Konna Sekai - Akame ga Kill": "Anime",
	"Tsuki Akari - Akame ga Kill": "Anime",
	"Merry Go Round of Life - Howl's Moving Castle": "Anime",
	"Promise of the World - Howl's Moving Castle": "Anime",
	"One Summers' Day - Spirited Away": "Anime",
	"Reprise - Spirited Away": "Anime",
	"Always With Me - Spirited Away": "Anime",
	"A Town with an Ocean View - Kiki's Delivery Service": "Anime",
	"Rouge no Dengon - Kiki's Delivery Service": "Anime",
	"If I've Been Enveloped in Tenderness - Kiki's Delivery Service": "Anime",
	"Sparkle - Your Name": "Anime",
	"Zen zen zense - Your Name": "Anime",
	"Sis Puella Magica - Madoka Magica": "Anime",
	"Elegy for Rem - Re Zero": "Anime",
	"Wishing - Re Zero": "Anime",
	"Fukashigi no Carte - Aobuta": "Anime",
	"Is There Still Anything That Love Can Do - Weathering With You": "Anime",
	"Grand Escape - Weathering With You": "Anime",
	"Hacking to the Gate - Steins;Gate": "Anime",
	"A Cruel Angel's Thesis - Neon Genesis Evangelion": "Anime",
	"This Game - No Game No Life": "Anime",
};

var volume = {
	"A Cruel Angel's Thesis - Neon Genesis Evangelion": "73.55",
	"A Town with an Ocean View - Kiki's Delivery Service": "67.02",
	"Again - Fullmetal Alchemist Brotherhood": "78.61",
	"Always With Me - Spirited Away": "61.92",
	"Aoi Shiori - Anohana": "79.28",
	"Beethoven Sonata No. 17 Mov. 1": "54.34",
	"Beethoven Sonata No. 17 Mov. 3": "64.42",
	"Beethoven Sonata No. 23 Mov. 1": "62.13",
	"Beethoven Sonata No. 23 Mov. 3": "65.79",
	"Beethoven Sonata No. 8 Mov. 1": "58.33",
	"Beethoven Sonata No. 8 Mov. 2": "54.48",
	"Beethoven Sonata No. 8 Mov. 3": "60.89",
	"Beethoven Symphony No. 3 Mov. 1": "62.16",
	"Beethoven Violin Sonata No. 5 Mov. 1": "53.69",
	"Beethoven Violin Sonata No. 9 Mov. 1": "62.05",
	"Brahms Hungarian Dance No. 1": "65.24",
	"Brahms Hungarian Dance No. 5": "59.63",
	"Brahms Violin Concerto Mov. 1": "65.69",
	"Brave Song - Angel Beats": "73.91",
	"Chopin Andante Spianato Op. 22 No. 1": "56.42",
	"Chopin Ballade No. 1 Op. 23": "65.24",
	"Chopin Ballade No. 2 Op. 38": "64.75",
	"Chopin Ballade No. 3 Op. 47": "66.14",
	"Chopin Ballade No. 4 Op. 52": "63.91",
	"Chopin Barcarolle Op. 60": "61.26",
	"Chopin Berceuse Op. 57": "60.61",
	"Chopin Etude Op. 10 No. 10": "62.22",
	"Chopin Etude Op. 10 No. 12": "63.96",
	"Chopin Etude Op. 10 No. 3": "63.54",
	"Chopin Etude Op. 10 No. 5": "61.21",
	"Chopin Etude Op. 10 No. 7": "61.87",
	"Chopin Etude Op. 25 No. 1": "61.05",
	"Chopin Etude Op. 25 No. 12": "69.99",
	"Chopin Etude Op. 25 No. 2": "58.68",
	"Chopin Etude Op. 25 No. 5": "62.05",
	"Chopin Etude Op. 25 No. 6": "61.45",
	"Chopin Etude Op. 25 No. 7": "52.95",
	"Chopin Etude Op. 25 No. 8": "63.65",
	"Chopin Etude Op. 25 No. 9": "60.92",
	"Chopin Fantaisie Impromptu Op. 66": "55.1",
	"Chopin Grand Polonaise Brillante Op. 22 No. 1": "66.34",
	"Chopin Grand Valse Brillante Op. 18": "63.22",
	"Chopin Grand Valse Brillante Op. 34 No. 1": "65.52",
	"Chopin Grand Valse Op. 42": "63.55",
	"Chopin Impromptu No. 1 Op. 29": "55.52",
	"Chopin Impromptu No. 3 Op. 51": "60.67",
	"Chopin Nocturne Op. 15 No. 2": "55.57",
	"Chopin Nocturne Op. 27 No. 2": "56.57",
	"Chopin Nocturne Op. 32 No. 1": "56.39",
	"Chopin Nocturne Op. 32 No. 2": "58.19",
	"Chopin Nocturne Op. 37 No. 2": "57.79",
	"Chopin Nocturne Op. 48 No. 1": "59.51",
	"Chopin Nocturne Op. 48 No. 2": "56.84",
	"Chopin Nocturne Op. 55 No. 1": "54.75",
	"Chopin Nocturne Op. 55 No. 2": "56.42",
	"Chopin Nocturne Op. 62 No. 1": "53.79",
	"Chopin Nocturne Op. 62 No. 2": "60.91",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 1": "63.43",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 2": "57.85",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 3": "65.83",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 1": "64.16",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 2": "57.64",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 3": "65.22",
	"Chopin Polonaise Op. 53": "70.13",
	"Chopin Polonaise-Fantaisie Op. 61": "60.65",
	"Chopin Prelude Op. 28 No. 1": "57.01",
	"Chopin Prelude Op. 28 No. 11": "57.26",
	"Chopin Prelude Op. 28 No. 17": "59.57",
	"Chopin Prelude Op. 28 No. 19": "61.97",
	"Chopin Prelude Op. 28 No. 24": "66.08",
	"Chopin Prelude Op. 28 No. 8": "63.85",
	"Chopin Scherzo No. 2 Op. 31": "64.7",
	"Chopin Scherzo No. 4 Op. 54": "57.75",
	"Chopin Sonata No. 1 Op. 4 Mov. 1": "60.46",
	"Chopin Sonata No. 1 Op. 4 Mov. 4": "63.26",
	"Chopin Sonata No. 2 Op. 35 Mov. 1": "63.19",
	"Chopin Sonata No. 2 Op. 35 Mov. 3": "54.37",
	"Chopin Sonata No. 3 Op. 58 Mov. 1": "61.22",
	"Chopin Sonata No. 3 Op. 58 Mov. 3": "55.85",
	"Chopin Waltz Op. 64 No. 1": "68.44",
	"Chopin Waltz Op. 64 No. 2": "67.25",
	"Chopin Waltz Op. 64 No. 3": "66.81",
	"Chopin Waltz Op. 69 No. 2": "67.53",
	"Chopin Waltz Op. 70 No. 1": "67.29",
	"Chopin Waltz Op. 70 No. 3": "67.31",
	"Colors - Code Geass": "68.12",
	"Continued Story - Code Geass": "75.52",
	"Debussy Arabesque No. 1": "61.87",
	"Debussy Arabesque No. 2": "59.15",
	"Debussy Clair de Lune": "55.93",
	"Debussy Reverie": "54.89",
	"Elegy for Rem - Re Zero": "68.12",
	"Fukashigi no Carte - Aobuta": "78.96",
	"Gliere Harp Concerto": "63.45",
	"Glinka The Lark": "52.54",
	"Grand Escape - Weathering With You": "70.34",
	"Hacking to the Gate - Steins;Gate": "79.94",
	"Haydn Serenade Op. 3 No. 5": "67.34",
	"Hikaru Nara - Your Lie in April": "74.66",
	"Ichiban no Takaramono - Angel Beats": "72.99",
	"If I've Been Enveloped in Tenderness - Kiki's Delivery Service": "74.5",
	"Is There Still Anything That Love Can Do - Weathering With You": "74.41",
	"Kaze ni Fukarete - Kaguya-sama": "77.28",
	"Kirameki - Your Lie in April": "78.43",
	"Konna Sekai - Akame ga Kill": "74.81",
	"Kreisler Liebesleid": "62.46",
	"Liszt Consolation No. 2": "52.19",
	"Liszt Consolation No. 3": "48.7",
	"Liszt La Leggierezza": "57.85",
	"Liszt Liebestraum No. 3": "56.33",
	"Liszt Mephisto Waltz": "57.79",
	"Liszt Piano Concerto No. 1": "57.7",
	"Liszt Sonata in B Minor": "55.84",
	"Liszt Un Sospiro": "58.58",
	"Liszt-Alabieff Le Rossignol": "58.69",
	"Massenet Meditation from Thais": "58.99",
	"Melissa - Fullmetal Alchemist": "71.33",
	"Mendelssohn Piano Concerto No. 1 Mov. 3": "67.87",
	"Mendelssohn Violin Concerto Mov. 1": "56.79",
	"Merry Go Round of Life - Howl's Moving Castle": "74.58",
	"Moszkowski Piano Concerto Mov. 1": "64.09",
	"Mozart Symphony No. 41 Mov. 4": "65.27",
	"My Soul Your Beats - Angel Beats": "75.69",
	"Nagisa - Clannad": "66.19",
	"Nanairo Symphony - Your Lie in April": "80.47",
	"One Summers' Day - Spirited Away": "61.14",
	"Orange - Your Lie in April": "78.1",
	"Paganini Cantabile": "74.21",
	"Paganini Violin Concerto No. 1 Mov. 1": "56.27",
	"Paganini Violin Concerto No. 2 Mov. 3": "62.95",
	"Poulenc Improvisation No. 15": "63.56",
	"Promise of the World - Howl's Moving Castle": "70.78",
	"Rachmaninoff Elegie Op. 3 No. 1": "56.73",
	"Rachmaninoff Piano Concerto No. 1 Mov. 1": "60.02",
	"Rachmaninoff Piano Concerto No. 1 Mov. 2": "52.93",
	"Rachmaninoff Piano Concerto No. 1 Mov. 3": "60.84",
	"Rachmaninoff Piano Concerto No. 2 Mov. 1": "61.78",
	"Rachmaninoff Piano Concerto No. 2 Mov. 2": "57.42",
	"Rachmaninoff Piano Concerto No. 2 Mov. 3": "61.2",
	"Rachmaninoff Symphony No. 2 Mov. 3": "62.7",
	"Ravel Pavane for a Dead Princess": "62.59",
	"Reprise - Spirited Away": "65.02",
	"Roaring Tides - Clannad": "73.83",
	"Rossini Barber of Seville": "57.03",
	"Rouge no Dengon - Kiki's Delivery Service": "68.02",
	"Saint-Saens Introduction Rondo Capriccioso": "63.19",
	"Saint-Saens The Swan": "63.29",
	"Sarasate Zigeunerweisen": "60.61",
	"Schubert Impromptu Op. 90 No. 1": "59.99",
	"Schubert Impromptu Op. 90 No. 2": "64.97",
	"Schubert Impromptu Op. 90 No. 3": "57.8",
	"Schubert Serenade": "63.18",
	"Schubert Symphony No. 8 Mov. 1": "63.83",
	"Schubert Symphony No. 8 Mov. 2": "60.65",
	"Secret Base - Anohana": "70.38",
	"Shostakovich Waltz No. 2": "70.02",
	"Sis Puella Magica - Madoka Magica": "69.78",
	"Sparkle - Your Name": "76.55",
	"Strauss Blue Danube": "56.9",
	"Strauss Fledermaus Overture": "57.78",
	"Tanjiro no Uta - Demon Slayer": "70.37",
	"Tchaikovsky Sleeping Beauty Waltz": "65.75",
	"Tchaikovsky Swan Lake Waltz": "62.18",
	"Tchaikovsky Violin Concerto Mov. 1": "64.67",
	"Tchaikovsky Violin Concerto Mov. 3": "64.1",
	"Tchaikovsky Waltz of the Flowers": "63.94",
	"This Game - No Game No Life": "79.37",
	"Tsuki Akari - Akame ga Kill": "61.42",
	"Wishing - Re Zero": "74.68",
	"Zen zen zense - Your Name": "78.26",

};

var length = {
	"A Cruel Angel's Thesis - Neon Genesis Evangelion": "04:02",
	"A Town with an Ocean View - Kiki's Delivery Service": "04:00",
	"Again - Fullmetal Alchemist Brotherhood": "04:11",
	"Always With Me - Spirited Away": "03:33",
	"Aoi Shiori - Anohana": "05:34",
	"Beethoven Sonata No. 17 Mov. 1": "07:52",
	"Beethoven Sonata No. 17 Mov. 3": "06:07",
	"Beethoven Sonata No. 23 Mov. 1": "09:43",
	"Beethoven Sonata No. 23 Mov. 3": "07:34",
	"Beethoven Sonata No. 8 Mov. 1": "08:42",
	"Beethoven Sonata No. 8 Mov. 2": "04:46",
	"Beethoven Sonata No. 8 Mov. 3": "04:39",
	"Beethoven Symphony No. 3 Mov. 1": "13:27",
	"Beethoven Violin Sonata No. 5 Mov. 1": "09:04",
	"Beethoven Violin Sonata No. 9 Mov. 1": "11:37",
	"Brahms Hungarian Dance No. 1": "03:21",
	"Brahms Hungarian Dance No. 5": "03:11",
	"Brahms Violin Concerto Mov. 1": "23:34",
	"Brave Song - Angel Beats": "05:19",
	"Chopin Andante Spianato Op. 22 No. 1": "04:27",
	"Chopin Ballade No. 1 Op. 23": "09:11",
	"Chopin Ballade No. 2 Op. 38": "07:10",
	"Chopin Ballade No. 3 Op. 47": "07:02",
	"Chopin Ballade No. 4 Op. 52": "11:22",
	"Chopin Barcarolle Op. 60": "08:05",
	"Chopin Berceuse Op. 57": "04:13",
	"Chopin Etude Op. 10 No. 10": "02:04",
	"Chopin Etude Op. 10 No. 12": "02:48",
	"Chopin Etude Op. 10 No. 3": "03:43",
	"Chopin Etude Op. 10 No. 5": "01:40",
	"Chopin Etude Op. 10 No. 7": "01:30",
	"Chopin Etude Op. 25 No. 1": "02:13",
	"Chopin Etude Op. 25 No. 12": "02:28",
	"Chopin Etude Op. 25 No. 2": "01:28",
	"Chopin Etude Op. 25 No. 5": "02:56",
	"Chopin Etude Op. 25 No. 6": "02:04",
	"Chopin Etude Op. 25 No. 7": "04:51",
	"Chopin Etude Op. 25 No. 8": "01:05",
	"Chopin Etude Op. 25 No. 9": "00:57",
	"Chopin Fantaisie Impromptu Op. 66": "05:16",
	"Chopin Grand Polonaise Brillante Op. 22 No. 1": "09:07",
	"Chopin Grand Valse Brillante Op. 18": "04:50",
	"Chopin Grand Valse Brillante Op. 34 No. 1": "05:04",
	"Chopin Grand Valse Op. 42": "03:24",
	"Chopin Impromptu No. 1 Op. 29": "03:59",
	"Chopin Impromptu No. 3 Op. 51": "04:31",
	"Chopin Nocturne Op. 15 No. 2": "03:53",
	"Chopin Nocturne Op. 27 No. 2": "06:07",
	"Chopin Nocturne Op. 32 No. 1": "04:39",
	"Chopin Nocturne Op. 32 No. 2": "05:43",
	"Chopin Nocturne Op. 37 No. 2": "06:51",
	"Chopin Nocturne Op. 48 No. 1": "05:49",
	"Chopin Nocturne Op. 48 No. 2": "07:16",
	"Chopin Nocturne Op. 55 No. 1": "05:37",
	"Chopin Nocturne Op. 55 No. 2": "05:44",
	"Chopin Nocturne Op. 62 No. 1": "06:49",
	"Chopin Nocturne Op. 62 No. 2": "05:17",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 1": "23:23",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 2": "12:33",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 3": "09:45",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 1": "15:34",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 2": "11:00",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 3": "09:01",
	"Chopin Polonaise Op. 53": "06:26",
	"Chopin Polonaise-Fantaisie Op. 61": "12:10",
	"Chopin Prelude Op. 28 No. 1": "00:37",
	"Chopin Prelude Op. 28 No. 11": "00:39",
	"Chopin Prelude Op. 28 No. 17": "02:59",
	"Chopin Prelude Op. 28 No. 19": "01:19",
	"Chopin Prelude Op. 28 No. 24": "02:13",
	"Chopin Prelude Op. 28 No. 8": "01:52",
	"Chopin Scherzo No. 2 Op. 31": "08:49",
	"Chopin Scherzo No. 4 Op. 54": "11:53",
	"Chopin Sonata No. 1 Op. 4 Mov. 1": "09:17",
	"Chopin Sonata No. 1 Op. 4 Mov. 4": "06:47",
	"Chopin Sonata No. 2 Op. 35 Mov. 1": "05:22",
	"Chopin Sonata No. 2 Op. 35 Mov. 3": "08:02",
	"Chopin Sonata No. 3 Op. 58 Mov. 1": "09:41",
	"Chopin Sonata No. 3 Op. 58 Mov. 3": "09:04",
	"Chopin Waltz Op. 64 No. 1": "01:34",
	"Chopin Waltz Op. 64 No. 2": "03:01",
	"Chopin Waltz Op. 64 No. 3": "02:35",
	"Chopin Waltz Op. 69 No. 2": "02:50",
	"Chopin Waltz Op. 70 No. 1": "01:38",
	"Chopin Waltz Op. 70 No. 3": "02:32",
	"Colors - Code Geass": "01:29",
	"Continued Story - Code Geass": "05:08",
	"Debussy Arabesque No. 1": "04:19",
	"Debussy Arabesque No. 2": "03:11",
	"Debussy Clair de Lune": "04:53",
	"Debussy Reverie": "04:13",
	"Elegy for Rem - Re Zero": "06:59",
	"Fukashigi no Carte - Aobuta": "03:54",
	"Gliere Harp Concerto": "28:38",
	"Glinka The Lark": "05:15",
	"Grand Escape - Weathering With You": "05:33",
	"Hacking to the Gate - Steins;Gate": "04:13",
	"Haydn Serenade Op. 3 No. 5": "04:34",
	"Hikaru Nara - Your Lie in April": "04:08",
	"Ichiban no Takaramono - Angel Beats": "05:59",
	"If I've Been Enveloped in Tenderness - Kiki's Delivery Service": "03:10",
	"Is There Still Anything That Love Can Do - Weathering With You": "06:44",
	"Kaze ni Fukarete - Kaguya-sama": "04:30",
	"Kirameki - Your Lie in April": "04:38",
	"Konna Sekai - Akame ga Kill": "04:14",
	"Kreisler Liebesleid": "03:18",
	"Liszt Consolation No. 2": "03:11",
	"Liszt Consolation No. 3": "04:23",
	"Liszt La Leggierezza": "04:29",
	"Liszt Liebestraum No. 3": "04:14",
	"Liszt Mephisto Waltz": "11:40",
	"Liszt Piano Concerto No. 1": "18:32",
	"Liszt Sonata in B Minor": "30:24",
	"Liszt Un Sospiro": "05:53",
	"Liszt-Alabieff Le Rossignol": "03:14",
	"Massenet Meditation from Thais": "04:52",
	"Melissa - Fullmetal Alchemist": "01:40",
	"Mendelssohn Piano Concerto No. 1 Mov. 3": "05:56",
	"Mendelssohn Violin Concerto Mov. 1": "12:45",
	"Merry Go Round of Life - Howl's Moving Castle": "05:07",
	"Moszkowski Piano Concerto Mov. 1": "12:54",
	"Mozart Symphony No. 41 Mov. 4": "08:44",
	"My Soul Your Beats - Angel Beats": "04:32",
	"Nagisa - Clannad": "04:08",
	"Nanairo Symphony - Your Lie in April": "04:28",
	"One Summers' Day - Spirited Away": "04:51",
	"Orange - Your Lie in April": "05:46",
	"Paganini Cantabile": "03:51",
	"Paganini Violin Concerto No. 1 Mov. 1": "21:32",
	"Paganini Violin Concerto No. 2 Mov. 3": "05:48",
	"Poulenc Improvisation No. 15": "02:36",
	"Promise of the World - Howl's Moving Castle": "04:17",
	"Rachmaninoff Elegie Op. 3 No. 1": "04:23",
	"Rachmaninoff Piano Concerto No. 1 Mov. 1": "12:11",
	"Rachmaninoff Piano Concerto No. 1 Mov. 2": "06:31",
	"Rachmaninoff Piano Concerto No. 1 Mov. 3": "07:53",
	"Rachmaninoff Piano Concerto No. 2 Mov. 1": "11:04",
	"Rachmaninoff Piano Concerto No. 2 Mov. 2": "12:01",
	"Rachmaninoff Piano Concerto No. 2 Mov. 3": "11:33",
	"Rachmaninoff Symphony No. 2 Mov. 3": "15:28",
	"Ravel Pavane for a Dead Princess": "06:40",
	"Reprise - Spirited Away": "04:41",
	"Roaring Tides - Clannad": "02:34",
	"Rossini Barber of Seville": "07:42",
	"Rouge no Dengon - Kiki's Delivery Service": "03:01",
	"Saint-Saens Introduction Rondo Capriccioso": "08:30",
	"Saint-Saens The Swan": "03:12",
	"Sarasate Zigeunerweisen": "08:37",
	"Schubert Impromptu Op. 90 No. 1": "09:31",
	"Schubert Impromptu Op. 90 No. 2": "04:44",
	"Schubert Impromptu Op. 90 No. 3": "06:43",
	"Schubert Serenade": "03:41",
	"Schubert Symphony No. 8 Mov. 1": "14:50",
	"Schubert Symphony No. 8 Mov. 2": "13:22",
	"Secret Base - Anohana": "05:44",
	"Shostakovich Waltz No. 2": "03:39",
	"Sis Puella Magica - Madoka Magica": "02:45",
	"Sparkle - Your Name": "06:45",
	"Strauss Blue Danube": "10:51",
	"Strauss Fledermaus Overture": "08:49",
	"Tanjiro no Uta - Demon Slayer": "05:26",
	"Tchaikovsky Sleeping Beauty Waltz": "04:23",
	"Tchaikovsky Swan Lake Waltz": "07:09",
	"Tchaikovsky Violin Concerto Mov. 1": "18:32",
	"Tchaikovsky Violin Concerto Mov. 3": "09:51",
	"Tchaikovsky Waltz of the Flowers": "07:04",
	"This Game - No Game No Life": "04:40",
	"Tsuki Akari - Akame ga Kill": "01:30",
	"Wishing - Re Zero": "05:55",
	"Zen zen zense - Your Name": "04:44",

};

var infoList = []
var catInfoList = []
for (const [key, value] of Object.entries(dict)) {
	infoList.push([key, value, categories[value], volume[value], length[value]]);
	// Default to classical
	if (categories[value] == "Classical") {
		catInfoList.push([key, value, categories[value], volume[value], length[value]]);
	}
}

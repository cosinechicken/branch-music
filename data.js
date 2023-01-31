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
	"0071": "Chopin Impromptu No. 2 Op. 36",  // https://www.youtube.com/watch?v=DpcBEpiLDWA
	"0072": "Chopin Impromptu No. 3 Op. 51",  // https://www.youtube.com/watch?v=4Qw9dwmyths
	"0073": "Chopin Fantaisie Impromptu Op. 66",  // https://www.youtube.com/watch?v=H4v4Ipl_UJI
	"0074": "Chopin Scherzo No. 2 Op. 31",  // https://www.youtube.com/watch?v=z_MwPdr7WXQ
	"0075": "Chopin Scherzo No. 3 Op. 39",  // https://www.youtube.com/watch?v=rjmUbZ3Aumw
	0076": "Chopin Scherzo No. 4 Op. 54",  // https://www.youtube.com/watch?v=Bd_9hgpo1u4
	"0077": "Chopin Berceuse Op. 57",  // https://www.youtube.com/watch?v=TGXXLaO0Ke4
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
	"0630": "Scriabin Sonata No. 2 Mov. 1", // https://www.youtube.com/watch?v=7XGyWcuYVrg
	"0631": "Scriabin Etude Op. 8 No. 12",  // https://www.youtube.com/watch?v=_dP8FMZr2sA
	"0632": "Scriabin Etude Op. 42 No. 5",  // https://www.youtube.com/watch?v=xudZ3J4EeoQ
	"0640": "Saint-Saens Introduction Rondo Capriccioso", // https://www.youtube.com/watch?v=Q0ajM7aL-Vc
	"0641": "Saint-Saens The Swan", // https://www.youtube.com/watch?v=b44-5M4e9nI
	"0650": "Mendelssohn Violin Concerto Mov. 1", // https://www.youtube.com/watch?v=Pmj7nCRYNs4
	"0651": "Mendelssohn Piano Concerto No. 1 Mov. 3",  // https://www.youtube.com/watch?v=2GGx8TRWFVA
	"0660": "Haydn Serenade Op. 3 No. 5", // https://www.youtube.com/watch?v=okHgNrqpW3E
	"0661": "Rossini Barber of Seville",  // https://www.youtube.com/watch?v=OloXRhesab0
	"0662": "Glinka The Lark",  // https://www.youtube.com/watch?v=cxlf-ZmE8JI
	"0663": "Poulenc Improvisation No. 15", // https://www.youtube.com/watch?v=mmxsoi1Xeug
	"0664": "Kreisler Liebesleid",  // https://www.youtube.com/watch?v=ofQfRMpm7Ks
	"0665": "Mozart Symphony No. 41 Mov. 4",  // https://www.youtube.com/watch?v=C6EOb86YdIs
	"0666": "Ravel Pavane for a Dead Princess", // https://www.youtube.com/watch?v=GKkeDqJBlK8
	"0667": "Gliere Harp Concerto", // https://www.youtube.com/watch?v=t7Pai-BASak
	"0668": "Moszkowski Piano Concerto Mov. 1", // https://www.youtube.com/watch?v=eh3l8I-JT4Q
	"0670": "Strauss Fledermaus Overture",  // https://www.youtube.com/watch?v=QROR4LioU-8
	"0671": "Strauss Blue Danube",  // https://www.youtube.com/watch?v=_CTYymbbEL4
	"0672": "Shostakovich Waltz No. 2", // https://www.youtube.com/watch?v=phBThlPTBEg
	"0680": "Sarasate Zigeunerweisen",  // https://www.youtube.com/watch?v=5ysiQMbe_do
	"0681": "Massenet Meditation from Thais", // https://www.youtube.com/watch?v=7QtGOWemQhY
	"0682": "Rimsky-Korsakov Procession of the Nobles", // https://www.youtube.com/watch?v=nBdKlNsuPd4
	"0683": "Offenbach Galop Infernal", // https://www.youtube.com/watch?v=okQRnHvw3is
	"0684": "Wieniawski Violin Concerto 2", // https://www.youtube.com/watch?v=T7KNd6W5OXo
	"1000": "Hikaru Nara - Your Lie in April",  // https://www.youtube.com/watch?v=cWtgGTCAjYY 
	"1001": "Nanairo Symphony - Your Lie in April", // https://www.youtube.com/watch?v=lqRcl2k2xS8
	"1002": "Kirameki - Your Lie in April", // https://www.youtube.com/watch?v=iI_sbL-xhgw
	"1003": "Orange - Your Lie in April", // https://www.youtube.com/watch?v=JdSpuTi9d8A
	"1004": "Dango Daikazoku - Clannad",  // https://www.youtube.com/watch?v=0NF1lPiMXkY
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
	"1038": "Renai Circulation - Bakemonogatari", // https://www.youtube.com/watch?v=uKxyLmbOc0Q
	"1039": "GIRI GIRI - Kaguya-sama",  // https://www.youtube.com/watch?v=vptdHEUZN10
	"1040": "Super Riser! - Macross", // https://www.youtube.com/watch?v=srnyVw-OR0g
	"1041": "Uso - Fullmetal Alchemist Brotherhood",  // https://www.youtube.com/watch?v=sKu3LjLW4CQ
	"1042": "Believe in You - Re Zero", // https://www.youtube.com/watch?v=MnytTcodsPk
	"1043": "Guren no Yumiya - Attack on Titan",  // https://www.youtube.com/watch?v=8OkpRK2_gVs
	"1044": "Jiyuu no Tsubasa - Attack on Titan", // https://www.youtube.com/watch?v=PbWFpzi8C94
	"1045": "Shinzou wo Sasageyo - Attack on Titan",  // https://www.youtube.com/watch?v=XULerl4wvfo
	"1046": "Red Swan - Attack on Titan", // https://www.youtube.com/watch?v=MWSR17vEVBw
	"1047": "A Beautiful Cruel World - Attack on Titan",  // https://www.youtube.com/watch?v=pO5PLjDUkWw
	"1048": "Styx Helix - Re Zero", // https://www.youtube.com/watch?v=HdQCWXh3XXU
	"1049": "Door - Re Zero", // https://www.youtube.com/watch?v=5c_jTxvutlw
	"1050": "Isabella's Lullaby - The Promised Neverland",  // https://www.youtube.com/watch?v=rTJjtSP-ORc
	"1051": "Sirius - Kill la Kill",  // https://www.youtube.com/watch?v=sfPoZKmyBEw
	"1052": "Ambiguous - Kill la Kill",  // https://www.youtube.com/watch?v=qaLeO-2Fytg
	"1053": "Gomen Ne Iiko Ja Irarenai - Kill la Kill", // https://www.youtube.com/watch?v=AkkK7IakkbI
	"1054": "Gurenge - Demon Slayer", // https://www.youtube.com/watch?v=XjvaJH8aRc0
	"1055": "From the Edge - Demon Slayer", // https://www.youtube.com/watch?v=qz9bpL7o9Uo
	"1056": "Alumina - Death Note", // https://www.youtube.com/watch?v=fhgwSyRmAb8
	"1057": "Connect - Madoka Magica",  // https://www.youtube.com/watch?v=ADIP3Um32Gc
	"1058": "Fuwa Fuwa Time - K-On",  // https://www.youtube.com/watch?v=jL8p9vteR5g
	"1059": "Chiisana Boukensha - Konosuba",  // https://www.youtube.com/watch?v=NevwXF6ZdtI
	"1060": "Wanna Go Home - Konosuba", // https://www.youtube.com/watch?v=MQZV4SnshYs
	"1061": "Misa Theme B - Death Note",  // https://www.youtube.com/watch?v=0dahZOlHClE
	"1062": "Reflection - Fullmetal Alchemist", // https://www.youtube.com/watch?v=3WBo7aY3oc4
	"1063": "The Intrepid - Fullmetal Alchemist Brotherhood", // https://www.youtube.com/watch?v=iYDQMZMwT8g
	"1064": "Longing for Sunbeams - Re Zero", // https://www.youtube.com/watch?v=LwV6UJTHej4
	"1065": "Touch - Touch",  // https://www.youtube.com/watch?v=4klawrwXpD4
	"1066": "Bara wa Utsukushiku Chiru - Rose of Versailles", // https://www.youtube.com/watch?v=has-Ru1lGTM
	"1067": "God Knows - Haruhi", // https://www.youtube.com/watch?v=RxFQeIniK1w
	"1068": "Only My Railgun - Certain Scientific Railgun", // https://www.youtube.com/watch?v=UmnQ2fEoXUI
	"1069": "Moonlight Densetsu - Sailor Moon", // https://www.youtube.com/watch?v=3bBpiHJm3t0 
	"1070": "Toki wo Kizamu Uta - Clannad After Story",  // https://www.youtube.com/watch?v=PozVlhR20TE
	"1071": "Mata Ashita - Madoka Magica",  // https://www.youtube.com/watch?v=4Pdghq3xbwE
	"1072": "Rain - Fullmetal Alchemist Brotherhood", // https://www.youtube.com/watch?v=dBL3PXI_jFo
	"1073": "Racing into the Night",  // https://www.youtube.com/watch?v=by4SYYWlhEs
	"1074": "Name of Love - Attack on Titan", // https://www.youtube.com/watch?v=LnCDBel2JV0
	"1075": "Ashitaka and San - Princess Mononoke",	// https://www.youtube.com/watch?v=faf98cNY8A8
	"1076": "Days of Dash - Pet Girl of Sakurasou",	// https://www.youtube.com/watch?v=xwtd8-yrBZs
	"1077": "Bye Bye Yesterday - Assassination Classroom",	// https://www.youtube.com/watch?v=1RJt1rwNzoo
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
	"Chopin Impromptu No. 2 Op. 36": "Classical",
	"Chopin Impromptu No. 3 Op. 51": "Classical",
	"Chopin Fantaisie Impromptu Op. 66": "Classical",
	"Chopin Scherzo No. 2 Op. 31": "Classical",
	"Chopin Scherzo No. 3 Op. 39": "Classical",
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
	"Scriabin Sonata No. 2 Mov. 1": "Classical",
	"Scriabin Etude Op. 8 No. 12": "Classical",
	"Scriabin Etude Op. 42 No. 5": "Classical",
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
	"Rimsky-Korsakov Procession of the Nobles": "Classical",
	"Offenbach Galop Infernal": "Classical",
	"Wieniawski Violin Concerto 2": "Classical",
	"Hikaru Nara - Your Lie in April": "Anime",
	"Nanairo Symphony - Your Lie in April": "Anime",
	"Kirameki - Your Lie in April": "Anime",
	"Orange - Your Lie in April": "Anime",
	"Dango Daikazoku - Clannad": "Anime",
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
	"Renai Circulation - Bakemonogatari": "Anime",
	"GIRI GIRI - Kaguya-sama": "Anime",
	"Super Riser! - Macross": "Anime",
	"Uso - Fullmetal Alchemist Brotherhood": "Anime",
	"Believe in You - Re Zero": "Anime",
	"Guren no Yumiya - Attack on Titan": "Anime",
	"Jiyuu no Tsubasa - Attack on Titan": "Anime",
	"Shinzou wo Sasageyo - Attack on Titan": "Anime",
	"Red Swan - Attack on Titan": "Anime",
	"A Beautiful Cruel World - Attack on Titan": "Anime",
	"Styx Helix - Re Zero": "Anime",
	"Door - Re Zero": "Anime",
	"Isabella's Lullaby - The Promised Neverland": "Anime",
	"Sirius - Kill la Kill": "Anime",
	"Ambiguous - Kill la Kill": "Anime",
	"Gomen Ne Iiko Ja Irarenai - Kill la Kill": "Anime",
	"Gurenge - Demon Slayer": "Anime",
	"From the Edge - Demon Slayer": "Anime",
	"Alumina - Death Note": "Anime",
	"Connect - Madoka Magica": "Anime",
	"Fuwa Fuwa Time - K-On": "Anime",
	"Chiisana Boukensha - Konosuba": "Anime",
	"Wanna Go Home - Konosuba": "Anime",
	"Misa Theme B - Death Note": "Anime",
	"Reflection - Fullmetal Alchemist": "Anime",
	"The Intrepid - Fullmetal Alchemist Brotherhood": "Anime",
	"Longing for Sunbeams - Re Zero": "Anime",
	"Touch - Touch": "Anime",
	"Bara wa Utsukushiku Chiru - Rose of Versailles": "Anime",
	"God Knows - Haruhi": "Anime",
	"Only My Railgun - Certain Scientific Railgun": "Anime",
	"Moonlight Densetsu - Sailor Moon": "Anime",
	"Toki wo Kizamu Uta - Clannad After Story": "Anime",
	"Mata Ashita - Madoka Magica": "Anime",
	"Rain - Fullmetal Alchemist Brotherhood": "Anime",
	"Racing into the Night": "Classical",
	"Name of Love - Attack on Titan": "Anime",
	"Ashitaka and San - Princess Mononoke",	// https://www.youtube.com/watch?v=faf98cNY8A8
: "Anime",
	"Days of Dash - Pet Girl of Sakurasou",	// https://www.youtube.com/watch?v=xwtd8-yrBZs
: "Anime",
	"Bye Bye Yesterday - Assassination Classroom",	// https://www.youtube.com/watch?v=1RJt1rwNzoo: "Anime",
};

var volume = {
	"A Beautiful Cruel World - Attack on Titan": "77.22",
	"A Cruel Angel's Thesis - Neon Genesis Evangelion": "74.74",
	"A Town with an Ocean View - Kiki's Delivery Service": "69.62",
	"Again - Fullmetal Alchemist Brotherhood": "80.25",
	"Alumina - Death Note": "79.67",
	"Always With Me - Spirited Away": "64.32",
	"Ambiguous - Kill la Kill": "68.48",
	"Aoi Shiori - Anohana": "80.02",
	"Ashitaka and San - Princess Mononoke": "71.62",
	"Bara wa Utsukushiku Chiru - Rose of Versailles": "72.82",
	"Beethoven Sonata No. 17 Mov. 1": "65.91",
	"Beethoven Sonata No. 17 Mov. 3": "67.59",
	"Beethoven Sonata No. 23 Mov. 1": "68.3",
	"Beethoven Sonata No. 23 Mov. 3": "69.58",
	"Beethoven Sonata No. 8 Mov. 1": "65.25",
	"Beethoven Sonata No. 8 Mov. 2": "58.53",
	"Beethoven Sonata No. 8 Mov. 3": "65.48",
	"Beethoven Symphony No. 3 Mov. 1": "67.92",
	"Beethoven Violin Sonata No. 5 Mov. 1": "57.29",
	"Beethoven Violin Sonata No. 9 Mov. 1": "68.82",
	"Believe in You - Re Zero": "79.14",
	"Brahms Hungarian Dance No. 1": "68.79",
	"Brahms Hungarian Dance No. 5": "65.11",
	"Brahms Violin Concerto Mov. 1": "69.12",
	"Brave Song - Angel Beats": "76.1",
	"Bye Bye Yesterday - Assassination Classroom": "80.66",
	"Chiisana Boukensha - Konosuba": "78.3",
	"Chopin Andante Spianato Op. 22 No. 1": "61.69",
	"Chopin Ballade No. 1 Op. 23": "70.52",
	"Chopin Ballade No. 2 Op. 38": "70.67",
	"Chopin Ballade No. 3 Op. 47": "70.96",
	"Chopin Ballade No. 4 Op. 52": "69.88",
	"Chopin Barcarolle Op. 60": "68.89",
	"Chopin Berceuse Op. 57": "65.05",
	"Chopin Etude Op. 10 No. 10": "66.9",
	"Chopin Etude Op. 10 No. 12": "69.09",
	"Chopin Etude Op. 10 No. 3": "68.21",
	"Chopin Etude Op. 10 No. 5": "65.0",
	"Chopin Etude Op. 10 No. 7": "64.53",
	"Chopin Etude Op. 25 No. 1": "65.62",
	"Chopin Etude Op. 25 No. 12": "71.4",
	"Chopin Etude Op. 25 No. 2": "64.51",
	"Chopin Etude Op. 25 No. 5": "66.47",
	"Chopin Etude Op. 25 No. 6": "66.44",
	"Chopin Etude Op. 25 No. 7": "60.89",
	"Chopin Etude Op. 25 No. 8": "66.9",
	"Chopin Etude Op. 25 No. 9": "65.53",
	"Chopin Fantaisie Impromptu Op. 66": "57.76",
	"Chopin Grand Polonaise Brillante Op. 22 No. 1": "69.35",
	"Chopin Grand Valse Brillante Op. 18": "67.47",
	"Chopin Grand Valse Brillante Op. 34 No. 1": "69.05",
	"Chopin Grand Valse Op. 42": "66.79",
	"Chopin Impromptu No. 1 Op. 29": "60.6",
	"Chopin Impromptu No. 2 Op. 36": "60.63",
	"Chopin Impromptu No. 3 Op. 51": "63.85",
	"Chopin Nocturne Op. 15 No. 2": "62.99",
	"Chopin Nocturne Op. 27 No. 2": "63.06",
	"Chopin Nocturne Op. 32 No. 1": "61.78",
	"Chopin Nocturne Op. 32 No. 2": "63.36",
	"Chopin Nocturne Op. 37 No. 2": "63.3",
	"Chopin Nocturne Op. 48 No. 1": "67.75",
	"Chopin Nocturne Op. 48 No. 2": "62.38",
	"Chopin Nocturne Op. 55 No. 1": "62.74",
	"Chopin Nocturne Op. 55 No. 2": "61.53",
	"Chopin Nocturne Op. 62 No. 1": "58.94",
	"Chopin Nocturne Op. 62 No. 2": "66.18",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 1": "70.91",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 2": "64.11",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 3": "70.67",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 1": "71.48",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 2": "64.76",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 3": "70.36",
	"Chopin Polonaise Op. 53": "73.8",
	"Chopin Polonaise-Fantaisie Op. 61": "69.04",
	"Chopin Prelude Op. 28 No. 1": "64.09",
	"Chopin Prelude Op. 28 No. 11": "61.98",
	"Chopin Prelude Op. 28 No. 17": "63.51",
	"Chopin Prelude Op. 28 No. 19": "64.88",
	"Chopin Prelude Op. 28 No. 24": "67.59",
	"Chopin Prelude Op. 28 No. 8": "67.52",
	"Chopin Scherzo No. 2 Op. 31": "70.78",
	"Chopin Scherzo No. 3 Op. 39": "67.67",
	"Chopin Scherzo No. 4 Op. 54": "64.44",
	"Chopin Sonata No. 1 Op. 4 Mov. 1": "65.61",
	"Chopin Sonata No. 1 Op. 4 Mov. 4": "66.37",
	"Chopin Sonata No. 2 Op. 35 Mov. 1": "68.06",
	"Chopin Sonata No. 2 Op. 35 Mov. 3": "62.48",
	"Chopin Sonata No. 3 Op. 58 Mov. 1": "64.74",
	"Chopin Sonata No. 3 Op. 58 Mov. 3": "57.76",
	"Chopin Waltz Op. 64 No. 1": "70.74",
	"Chopin Waltz Op. 64 No. 2": "70.39",
	"Chopin Waltz Op. 64 No. 3": "69.4",
	"Chopin Waltz Op. 69 No. 2": "70.84",
	"Chopin Waltz Op. 70 No. 1": "70.44",
	"Chopin Waltz Op. 70 No. 3": "70.0",
	"Colors - Code Geass": "69.09",
	"Connect - Madoka Magica": "78.61",
	"Continued Story - Code Geass": "76.84",
	"Dango Daikazoku - Clannad": "73.81",
	"Days of Dash - Pet Girl of Sakurasou": "80.65",
	"Debussy Arabesque No. 1": "66.08",
	"Debussy Arabesque No. 2": "63.37",
	"Debussy Clair de Lune": "63.96",
	"Debussy Reverie": "59.33",
	"Door - Re Zero": "79.09",
	"Elegy for Rem - Re Zero": "71.77",
	"From the Edge - Demon Slayer": "79.58",
	"Fukashigi no Carte - Aobuta": "80.48",
	"Fuwa Fuwa Time - K-On": "79.44",
	"GIRI GIRI - Kaguya-sama": "78.96",
	"Gliere Harp Concerto": "67.43",
	"Glinka The Lark": "61.77",
	"God Knows - Haruhi": "81.2",
	"Gomen Ne Iiko Ja Irarenai - Kill la Kill": "77.61",
	"Grand Escape - Weathering With You": "74.46",
	"Guren no Yumiya - Attack on Titan": "64.41",
	"Gurenge - Demon Slayer": "80.17",
	"Hacking to the Gate - Steins;Gate": "81.02",
	"Haydn Serenade Op. 3 No. 5": "69.8",
	"Hikaru Nara - Your Lie in April": "75.41",
	"Ichiban no Takaramono - Angel Beats": "76.23",
	"If I've Been Enveloped in Tenderness - Kiki's Delivery Service": "76.34",
	"Is There Still Anything That Love Can Do - Weathering With You": "78.35",
	"Isabella's Lullaby - The Promised Neverland": "78.05",
	"Jiyuu no Tsubasa - Attack on Titan": "68.86",
	"Kaze ni Fukarete - Kaguya-sama": "79.38",
	"Kirameki - Your Lie in April": "79.48",
	"Konna Sekai - Akame ga Kill": "78.22",
	"Kreisler Liebesleid": "65.66",
	"Liszt Consolation No. 2": "58.09",
	"Liszt Consolation No. 3": "52.67",
	"Liszt La Leggierezza": "64.36",
	"Liszt Liebestraum No. 3": "63.99",
	"Liszt Mephisto Waltz": "66.71",
	"Liszt Piano Concerto No. 1": "65.58",
	"Liszt Sonata in B Minor": "66.68",
	"Liszt Un Sospiro": "64.02",
	"Liszt-Alabieff Le Rossignol": "65.28",
	"Longing for Sunbeams - Re Zero": "65.31",
	"Massenet Meditation from Thais": "64.45",
	"Mata Ashita - Madoka Magica": "66.91",
	"Melissa - Fullmetal Alchemist": "72.09",
	"Mendelssohn Piano Concerto No. 1 Mov. 3": "69.32",
	"Mendelssohn Violin Concerto Mov. 1": "62.26",
	"Merry Go Round of Life - Howl's Moving Castle": "77.12",
	"Misa Theme B - Death Note": "78.26",
	"Moonlight Densetsu - Sailor Moon": "71.71",
	"Moszkowski Piano Concerto Mov. 1": "68.64",
	"Mozart Symphony No. 41 Mov. 4": "68.1",
	"My Soul Your Beats - Angel Beats": "77.57",
	"Name of Love - Attack on Titan": "80.36",
	"Nanairo Symphony - Your Lie in April": "81.25",
	"Offenbach Galop Infernal": "77.1",
	"One Summers' Day - Spirited Away": "66.07",
	"Only My Railgun - Certain Scientific Railgun": "81.47",
	"Orange - Your Lie in April": "79.91",
	"Paganini Cantabile": "76.37",
	"Paganini Violin Concerto No. 1 Mov. 1": "64.86",
	"Paganini Violin Concerto No. 2 Mov. 3": "67.4",
	"Poulenc Improvisation No. 15": "67.96",
	"Promise of the World - Howl's Moving Castle": "74.21",
	"Rachmaninoff Elegie Op. 3 No. 1": "63.29",
	"Rachmaninoff Piano Concerto No. 1 Mov. 1": "65.19",
	"Rachmaninoff Piano Concerto No. 1 Mov. 2": "57.98",
	"Rachmaninoff Piano Concerto No. 1 Mov. 3": "65.62",
	"Rachmaninoff Piano Concerto No. 2 Mov. 1": "67.0",
	"Rachmaninoff Piano Concerto No. 2 Mov. 2": "63.62",
	"Rachmaninoff Piano Concerto No. 2 Mov. 3": "67.96",
	"Rachmaninoff Symphony No. 2 Mov. 3": "68.01",
	"Racing into the Night": "80.54",
	"Rain - Fullmetal Alchemist Brotherhood": "79.23",
	"Ravel Pavane for a Dead Princess": "66.23",
	"Red Swan - Attack on Titan": "76.07",
	"Reflection - Fullmetal Alchemist": "73.37",
	"Renai Circulation - Bakemonogatari": "80.51",
	"Reprise - Spirited Away": "68.51",
	"Rimsky-Korsakov Procession of the Nobles": "68.41",
	"Roaring Tides - Clannad": "75.67",
	"Rossini Barber of Seville": "64.88",
	"Rouge no Dengon - Kiki's Delivery Service": "70.37",
	"Saint-Saens Introduction Rondo Capriccioso": "67.79",
	"Saint-Saens The Swan": "67.22",
	"Sarasate Zigeunerweisen": "65.26",
	"Schubert Impromptu Op. 90 No. 1": "66.43",
	"Schubert Impromptu Op. 90 No. 2": "67.38",
	"Schubert Impromptu Op. 90 No. 3": "61.86",
	"Schubert Serenade": "66.03",
	"Schubert Symphony No. 8 Mov. 1": "71.25",
	"Schubert Symphony No. 8 Mov. 2": "68.82",
	"Scriabin Etude Op. 42 No. 5": "69.02",
	"Scriabin Etude Op. 8 No. 12": "74.23",
	"Scriabin Sonata No. 2 Mov. 1": "63.75",
	"Secret Base - Anohana": "72.53",
	"Shinzou wo Sasageyo - Attack on Titan": "68.2",
	"Shostakovich Waltz No. 2": "72.09",
	"Sirius - Kill la Kill": "80.63",
	"Sis Puella Magica - Madoka Magica": "73.24",
	"Sparkle - Your Name": "79.09",
	"Strauss Blue Danube": "61.79",
	"Strauss Fledermaus Overture": "62.82",
	"Styx Helix - Re Zero": "79.12",
	"Super Riser! - Macross": "77.73",
	"Tanjiro no Uta - Demon Slayer": "75.54",
	"Tchaikovsky Sleeping Beauty Waltz": "69.42",
	"Tchaikovsky Swan Lake Waltz": "67.35",
	"Tchaikovsky Violin Concerto Mov. 1": "66.1",
	"Tchaikovsky Violin Concerto Mov. 3": "65.59",
	"Tchaikovsky Waltz of the Flowers": "68.41",
	"The Intrepid - Fullmetal Alchemist Brotherhood": "75.88",
	"This Game - No Game No Life": "80.77",
	"Toki wo Kizamu Uta - Clannad After Story": "75.06",
	"Touch - Touch": "71.91",
	"Tsuki Akari - Akame ga Kill": "65.82",
	"Uso - Fullmetal Alchemist Brotherhood": "79.87",
	"Wanna Go Home - Konosuba": "79.55",
	"Wieniawski Violin Concerto 2": "65.06",
	"Wishing - Re Zero": "76.99",
	"Zen zen zense - Your Name": "79.91",

};

var length = {
	"A Beautiful Cruel World - Attack on Titan": "04:52",
	"A Cruel Angel's Thesis - Neon Genesis Evangelion": "04:02",
	"A Town with an Ocean View - Kiki's Delivery Service": "04:00",
	"Again - Fullmetal Alchemist Brotherhood": "04:11",
	"Alumina - Death Note": "05:01",
	"Always With Me - Spirited Away": "03:33",
	"Ambiguous - Kill la Kill": "01:31",
	"Aoi Shiori - Anohana": "05:34",
	"Ashitaka and San - Princess Mononoke": "04:18",
	"Bara wa Utsukushiku Chiru - Rose of Versailles": "03:19",
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
	"Believe in You - Re Zero": "04:38",
	"Brahms Hungarian Dance No. 1": "03:21",
	"Brahms Hungarian Dance No. 5": "03:11",
	"Brahms Violin Concerto Mov. 1": "23:34",
	"Brave Song - Angel Beats": "05:19",
	"Bye Bye Yesterday - Assassination Classroom": "04:07",
	"Chiisana Boukensha - Konosuba": "03:15",
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
	"Chopin Impromptu No. 2 Op. 36": "05:54",
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
	"Chopin Scherzo No. 3 Op. 39": "07:57",
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
	"Connect - Madoka Magica": "04:27",
	"Continued Story - Code Geass": "05:08",
	"Dango Daikazoku - Clannad": "04:32",
	"Days of Dash - Pet Girl of Sakurasou": "04:09",
	"Debussy Arabesque No. 1": "04:19",
	"Debussy Arabesque No. 2": "03:11",
	"Debussy Clair de Lune": "04:53",
	"Debussy Reverie": "04:13",
	"Door - Re Zero": "04:54",
	"Elegy for Rem - Re Zero": "06:59",
	"From the Edge - Demon Slayer": "04:33",
	"Fukashigi no Carte - Aobuta": "03:54",
	"Fuwa Fuwa Time - K-On": "03:55",
	"GIRI GIRI - Kaguya-sama": "04:18",
	"Gliere Harp Concerto": "28:38",
	"Glinka The Lark": "05:15",
	"God Knows - Haruhi": "04:37",
	"Gomen Ne Iiko Ja Irarenai - Kill la Kill": "04:40",
	"Grand Escape - Weathering With You": "05:33",
	"Guren no Yumiya - Attack on Titan": "01:32",
	"Gurenge - Demon Slayer": "03:55",
	"Hacking to the Gate - Steins;Gate": "04:13",
	"Haydn Serenade Op. 3 No. 5": "04:34",
	"Hikaru Nara - Your Lie in April": "04:08",
	"Ichiban no Takaramono - Angel Beats": "05:59",
	"If I've Been Enveloped in Tenderness - Kiki's Delivery Service": "03:10",
	"Is There Still Anything That Love Can Do - Weathering With You": "06:44",
	"Isabella's Lullaby - The Promised Neverland": "04:51",
	"Jiyuu no Tsubasa - Attack on Titan": "01:29",
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
	"Longing for Sunbeams - Re Zero": "02:25",
	"Massenet Meditation from Thais": "04:52",
	"Mata Ashita - Madoka Magica": "01:27",
	"Melissa - Fullmetal Alchemist": "01:40",
	"Mendelssohn Piano Concerto No. 1 Mov. 3": "05:56",
	"Mendelssohn Violin Concerto Mov. 1": "12:45",
	"Merry Go Round of Life - Howl's Moving Castle": "05:07",
	"Misa Theme B - Death Note": "02:28",
	"Moonlight Densetsu - Sailor Moon": "02:51",
	"Moszkowski Piano Concerto Mov. 1": "12:54",
	"Mozart Symphony No. 41 Mov. 4": "08:44",
	"My Soul Your Beats - Angel Beats": "04:32",
	"Name of Love - Attack on Titan": "04:24",
	"Nanairo Symphony - Your Lie in April": "04:28",
	"Offenbach Galop Infernal": "05:17",
	"One Summers' Day - Spirited Away": "04:51",
	"Only My Railgun - Certain Scientific Railgun": "04:11",
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
	"Racing into the Night": "04:21",
	"Rain - Fullmetal Alchemist Brotherhood": "04:13",
	"Ravel Pavane for a Dead Princess": "06:40",
	"Red Swan - Attack on Titan": "01:30",
	"Reflection - Fullmetal Alchemist": "04:18",
	"Renai Circulation - Bakemonogatari": "04:13",
	"Reprise - Spirited Away": "04:41",
	"Rimsky-Korsakov Procession of the Nobles": "04:28",
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
	"Scriabin Etude Op. 42 No. 5": "03:06",
	"Scriabin Etude Op. 8 No. 12": "02:10",
	"Scriabin Sonata No. 2 Mov. 1": "10:04",
	"Secret Base - Anohana": "05:44",
	"Shinzou wo Sasageyo - Attack on Titan": "01:29",
	"Shostakovich Waltz No. 2": "03:39",
	"Sirius - Kill la Kill": "04:20",
	"Sis Puella Magica - Madoka Magica": "02:45",
	"Sparkle - Your Name": "06:45",
	"Strauss Blue Danube": "10:51",
	"Strauss Fledermaus Overture": "08:49",
	"Styx Helix - Re Zero": "04:46",
	"Super Riser! - Macross": "03:47",
	"Tanjiro no Uta - Demon Slayer": "05:26",
	"Tchaikovsky Sleeping Beauty Waltz": "04:23",
	"Tchaikovsky Swan Lake Waltz": "07:09",
	"Tchaikovsky Violin Concerto Mov. 1": "18:32",
	"Tchaikovsky Violin Concerto Mov. 3": "09:51",
	"Tchaikovsky Waltz of the Flowers": "07:04",
	"The Intrepid - Fullmetal Alchemist Brotherhood": "02:14",
	"This Game - No Game No Life": "04:40",
	"Toki wo Kizamu Uta - Clannad After Story": "01:29",
	"Touch - Touch": "03:10",
	"Tsuki Akari - Akame ga Kill": "01:30",
	"Uso - Fullmetal Alchemist Brotherhood": "03:22",
	"Wanna Go Home - Konosuba": "03:17",
	"Wieniawski Violin Concerto 2": "22:53",
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

var totalLength = 79572.67383392129

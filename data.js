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
	"0075": "Chopin Scherzo No. 4 Op. 54",  // https://www.youtube.com/watch?v=Bd_9hgpo1u4
	"0076": "Chopin Berceuse Op. 57",  // https://www.youtube.com/watch?v=TGXXLaO0Ke4
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
};

var volume = {
	"A Beautiful Cruel World - Attack on Titan": "60.99",
	"A Cruel Angel's Thesis - Neon Genesis Evangelion": "61.0",
	"A Town with an Ocean View - Kiki's Delivery Service": "61.0",
	"Again - Fullmetal Alchemist Brotherhood": "60.99",
	"Alumina - Death Note": "60.99",
	"Always With Me - Spirited Away": "60.98",
	"Ambiguous - Kill la Kill": "60.99",
	"Aoi Shiori - Anohana": "61.0",
	"Bara wa Utsukushiku Chiru - Rose of Versailles": "60.99",
	"Beethoven Sonata No. 17 Mov. 1": "61.0",
	"Beethoven Sonata No. 17 Mov. 3": "61.0",
	"Beethoven Sonata No. 23 Mov. 1": "60.99",
	"Beethoven Sonata No. 23 Mov. 3": "61.0",
	"Beethoven Sonata No. 8 Mov. 1": "60.99",
	"Beethoven Sonata No. 8 Mov. 2": "60.99",
	"Beethoven Sonata No. 8 Mov. 3": "60.99",
	"Beethoven Symphony No. 3 Mov. 1": "61.0",
	"Beethoven Violin Sonata No. 5 Mov. 1": "60.99",
	"Beethoven Violin Sonata No. 9 Mov. 1": "61.0",
	"Believe in You - Re Zero": "61.0",
	"Brahms Hungarian Dance No. 1": "60.99",
	"Brahms Hungarian Dance No. 5": "61.0",
	"Brahms Violin Concerto Mov. 1": "61.0",
	"Brave Song - Angel Beats": "61.0",
	"Chiisana Boukensha - Konosuba": "60.99",
	"Chopin Andante Spianato Op. 22 No. 1": "60.99",
	"Chopin Ballade No. 1 Op. 23": "61.0",
	"Chopin Ballade No. 2 Op. 38": "61.0",
	"Chopin Ballade No. 3 Op. 47": "60.99",
	"Chopin Ballade No. 4 Op. 52": "61.0",
	"Chopin Barcarolle Op. 60": "61.0",
	"Chopin Berceuse Op. 57": "60.99",
	"Chopin Etude Op. 10 No. 10": "61.0",
	"Chopin Etude Op. 10 No. 12": "60.99",
	"Chopin Etude Op. 10 No. 3": "60.98",
	"Chopin Etude Op. 10 No. 5": "60.97",
	"Chopin Etude Op. 10 No. 7": "60.97",
	"Chopin Etude Op. 25 No. 1": "60.98",
	"Chopin Etude Op. 25 No. 12": "60.99",
	"Chopin Etude Op. 25 No. 2": "60.98",
	"Chopin Etude Op. 25 No. 5": "60.99",
	"Chopin Etude Op. 25 No. 6": "60.98",
	"Chopin Etude Op. 25 No. 7": "61.0",
	"Chopin Etude Op. 25 No. 8": "60.94",
	"Chopin Etude Op. 25 No. 9": "60.99",
	"Chopin Fantaisie Impromptu Op. 66": "61.0",
	"Chopin Grand Polonaise Brillante Op. 22 No. 1": "61.0",
	"Chopin Grand Valse Brillante Op. 18": "60.99",
	"Chopin Grand Valse Brillante Op. 34 No. 1": "60.99",
	"Chopin Grand Valse Op. 42": "61.0",
	"Chopin Impromptu No. 1 Op. 29": "60.99",
	"Chopin Impromptu No. 2 Op. 36": "60.99",
	"Chopin Impromptu No. 3 Op. 51": "60.99",
	"Chopin Nocturne Op. 15 No. 2": "60.99",
	"Chopin Nocturne Op. 27 No. 2": "61.0",
	"Chopin Nocturne Op. 32 No. 1": "61.0",
	"Chopin Nocturne Op. 32 No. 2": "61.0",
	"Chopin Nocturne Op. 37 No. 2": "61.0",
	"Chopin Nocturne Op. 48 No. 1": "60.99",
	"Chopin Nocturne Op. 48 No. 2": "60.99",
	"Chopin Nocturne Op. 55 No. 1": "60.99",
	"Chopin Nocturne Op. 55 No. 2": "61.0",
	"Chopin Nocturne Op. 62 No. 1": "60.99",
	"Chopin Nocturne Op. 62 No. 2": "60.99",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 1": "61.0",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 2": "61.0",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 3": "61.0",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 1": "61.0",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 2": "61.0",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 3": "61.0",
	"Chopin Polonaise Op. 53": "61.0",
	"Chopin Polonaise-Fantaisie Op. 61": "61.0",
	"Chopin Prelude Op. 28 No. 1": "60.95",
	"Chopin Prelude Op. 28 No. 11": "60.9",
	"Chopin Prelude Op. 28 No. 17": "60.99",
	"Chopin Prelude Op. 28 No. 19": "60.95",
	"Chopin Prelude Op. 28 No. 24": "60.98",
	"Chopin Prelude Op. 28 No. 8": "60.97",
	"Chopin Scherzo No. 2 Op. 31": "60.99",
	"Chopin Scherzo No. 4 Op. 54": "60.99",
	"Chopin Sonata No. 1 Op. 4 Mov. 1": "60.99",
	"Chopin Sonata No. 1 Op. 4 Mov. 4": "60.99",
	"Chopin Sonata No. 2 Op. 35 Mov. 1": "61.0",
	"Chopin Sonata No. 2 Op. 35 Mov. 3": "61.0",
	"Chopin Sonata No. 3 Op. 58 Mov. 1": "61.0",
	"Chopin Sonata No. 3 Op. 58 Mov. 3": "61.0",
	"Chopin Waltz Op. 64 No. 1": "60.98",
	"Chopin Waltz Op. 64 No. 2": "61.0",
	"Chopin Waltz Op. 64 No. 3": "61.0",
	"Chopin Waltz Op. 69 No. 2": "60.99",
	"Chopin Waltz Op. 70 No. 1": "60.99",
	"Chopin Waltz Op. 70 No. 3": "60.98",
	"Colors - Code Geass": "60.99",
	"Connect - Madoka Magica": "60.99",
	"Continued Story - Code Geass": "61.0",
	"Dango Daikazoku - Clannad": "61.0",
	"Debussy Arabesque No. 1": "60.99",
	"Debussy Arabesque No. 2": "60.98",
	"Debussy Clair de Lune": "60.99",
	"Debussy Reverie": "60.99",
	"Door - Re Zero": "61.0",
	"Elegy for Rem - Re Zero": "60.99",
	"From the Edge - Demon Slayer": "60.99",
	"Fukashigi no Carte - Aobuta": "61.0",
	"Fuwa Fuwa Time - K-On": "61.0",
	"GIRI GIRI - Kaguya-sama": "61.0",
	"Gliere Harp Concerto": "61.0",
	"Glinka The Lark": "60.99",
	"God Knows - Haruhi": "60.99",
	"Gomen Ne Iiko Ja Irarenai - Kill la Kill": "61.0",
	"Grand Escape - Weathering With You": "60.99",
	"Guren no Yumiya - Attack on Titan": "60.96",
	"Gurenge - Demon Slayer": "60.99",
	"Hacking to the Gate - Steins;Gate": "60.99",
	"Haydn Serenade Op. 3 No. 5": "61.0",
	"Hikaru Nara - Your Lie in April": "60.99",
	"Ichiban no Takaramono - Angel Beats": "61.0",
	"If I've Been Enveloped in Tenderness - Kiki's Delivery Service": "60.99",
	"Is There Still Anything That Love Can Do - Weathering With You": "61.0",
	"Isabella's Lullaby - The Promised Neverland": "60.99",
	"Jiyuu no Tsubasa - Attack on Titan": "60.96",
	"Kaze ni Fukarete - Kaguya-sama": "60.99",
	"Kirameki - Your Lie in April": "60.99",
	"Konna Sekai - Akame ga Kill": "60.99",
	"Kreisler Liebesleid": "60.99",
	"Liszt Consolation No. 2": "61.0",
	"Liszt Consolation No. 3": "61.0",
	"Liszt La Leggierezza": "60.99",
	"Liszt Liebestraum No. 3": "60.99",
	"Liszt Mephisto Waltz": "61.0",
	"Liszt Piano Concerto No. 1": "61.0",
	"Liszt Sonata in B Minor": "61.0",
	"Liszt Un Sospiro": "61.0",
	"Liszt-Alabieff Le Rossignol": "60.99",
	"Longing for Sunbeams - Re Zero": "61.0",
	"Massenet Meditation from Thais": "60.99",
	"Mata Ashita - Madoka Magica": "61.0",
	"Melissa - Fullmetal Alchemist": "60.98",
	"Mendelssohn Piano Concerto No. 1 Mov. 3": "60.99",
	"Mendelssohn Violin Concerto Mov. 1": "61.0",
	"Merry Go Round of Life - Howl's Moving Castle": "61.0",
	"Misa Theme B - Death Note": "60.99",
	"Moonlight Densetsu - Sailor Moon": "60.98",
	"Moszkowski Piano Concerto Mov. 1": "61.0",
	"Mozart Symphony No. 41 Mov. 4": "60.99",
	"My Soul Your Beats - Angel Beats": "60.99",
	"Nanairo Symphony - Your Lie in April": "61.0",
	"Offenbach Galop Infernal": "60.99",
	"One Summers' Day - Spirited Away": "60.99",
	"Only My Railgun - Certain Scientific Railgun": "60.99",
	"Orange - Your Lie in April": "61.0",
	"Paganini Cantabile": "60.99",
	"Paganini Violin Concerto No. 1 Mov. 1": "61.0",
	"Paganini Violin Concerto No. 2 Mov. 3": "61.0",
	"Poulenc Improvisation No. 15": "60.97",
	"Promise of the World - Howl's Moving Castle": "60.99",
	"Rachmaninoff Elegie Op. 3 No. 1": "61.0",
	"Rachmaninoff Piano Concerto No. 1 Mov. 1": "61.0",
	"Rachmaninoff Piano Concerto No. 1 Mov. 2": "61.0",
	"Rachmaninoff Piano Concerto No. 1 Mov. 3": "61.0",
	"Rachmaninoff Piano Concerto No. 2 Mov. 1": "61.0",
	"Rachmaninoff Piano Concerto No. 2 Mov. 2": "61.0",
	"Rachmaninoff Piano Concerto No. 2 Mov. 3": "61.0",
	"Rachmaninoff Symphony No. 2 Mov. 3": "61.0",
	"Ravel Pavane for a Dead Princess": "60.99",
	"Red Swan - Attack on Titan": "60.95",
	"Reflection - Fullmetal Alchemist": "61.0",
	"Renai Circulation - Bakemonogatari": "60.99",
	"Reprise - Spirited Away": "61.0",
	"Rimsky-Korsakov Procession of the Nobles": "61.0",
	"Roaring Tides - Clannad": "60.98",
	"Rossini Barber of Seville": "60.99",
	"Rouge no Dengon - Kiki's Delivery Service": "60.99",
	"Saint-Saens Introduction Rondo Capriccioso": "61.03",
	"Saint-Saens The Swan": "61.0",
	"Sarasate Zigeunerweisen": "61.0",
	"Schubert Impromptu Op. 90 No. 1": "61.0",
	"Schubert Impromptu Op. 90 No. 2": "61.0",
	"Schubert Impromptu Op. 90 No. 3": "60.99",
	"Schubert Serenade": "60.98",
	"Schubert Symphony No. 8 Mov. 1": "61.0",
	"Schubert Symphony No. 8 Mov. 2": "60.99",
	"Scriabin Etude Op. 42 No. 5": "60.99",
	"Scriabin Etude Op. 8 No. 12": "61.0",
	"Scriabin Sonata No. 2 Mov. 1": "61.0",
	"Secret Base - Anohana": "60.99",
	"Shinzou wo Sasageyo - Attack on Titan": "61.0",
	"Shostakovich Waltz No. 2": "60.99",
	"Sirius - Kill la Kill": "60.99",
	"Sis Puella Magica - Madoka Magica": "61.0",
	"Sparkle - Your Name": "60.99",
	"Strauss Blue Danube": "61.0",
	"Strauss Fledermaus Overture": "61.0",
	"Styx Helix - Re Zero": "60.99",
	"Super Riser! - Macross": "60.99",
	"Tanjiro no Uta - Demon Slayer": "61.0",
	"Tchaikovsky Sleeping Beauty Waltz": "60.99",
	"Tchaikovsky Swan Lake Waltz": "60.99",
	"Tchaikovsky Violin Concerto Mov. 1": "61.0",
	"Tchaikovsky Violin Concerto Mov. 3": "61.0",
	"Tchaikovsky Waltz of the Flowers": "60.99",
	"The Intrepid - Fullmetal Alchemist Brotherhood": "60.99",
	"This Game - No Game No Life": "61.0",
	"Toki wo Kizamu Uta - Clannad After Story": "60.99",
	"Touch - Touch": "60.99",
	"Tsuki Akari - Akame ga Kill": "60.96",
	"Uso - Fullmetal Alchemist Brotherhood": "60.99",
	"Wanna Go Home - Konosuba": "60.99",
	"Wishing - Re Zero": "61.0",
	"Zen zen zense - Your Name": "61.0",

};

var length = {
	"A Beautiful Cruel World - Attack on Titan": "04:53",
	"A Cruel Angel's Thesis - Neon Genesis Evangelion": "04:03",
	"A Town with an Ocean View - Kiki's Delivery Service": "04:01",
	"Again - Fullmetal Alchemist Brotherhood": "04:12",
	"Alumina - Death Note": "05:02",
	"Always With Me - Spirited Away": "03:34",
	"Ambiguous - Kill la Kill": "01:32",
	"Aoi Shiori - Anohana": "05:35",
	"Bara wa Utsukushiku Chiru - Rose of Versailles": "03:20",
	"Beethoven Sonata No. 17 Mov. 1": "07:53",
	"Beethoven Sonata No. 17 Mov. 3": "06:08",
	"Beethoven Sonata No. 23 Mov. 1": "09:44",
	"Beethoven Sonata No. 23 Mov. 3": "07:35",
	"Beethoven Sonata No. 8 Mov. 1": "08:43",
	"Beethoven Sonata No. 8 Mov. 2": "04:47",
	"Beethoven Sonata No. 8 Mov. 3": "04:40",
	"Beethoven Symphony No. 3 Mov. 1": "13:28",
	"Beethoven Violin Sonata No. 5 Mov. 1": "09:05",
	"Beethoven Violin Sonata No. 9 Mov. 1": "11:38",
	"Believe in You - Re Zero": "04:39",
	"Brahms Hungarian Dance No. 1": "03:22",
	"Brahms Hungarian Dance No. 5": "03:12",
	"Brahms Violin Concerto Mov. 1": "23:35",
	"Brave Song - Angel Beats": "05:20",
	"Chiisana Boukensha - Konosuba": "03:16",
	"Chopin Andante Spianato Op. 22 No. 1": "04:28",
	"Chopin Ballade No. 1 Op. 23": "09:12",
	"Chopin Ballade No. 2 Op. 38": "07:11",
	"Chopin Ballade No. 3 Op. 47": "07:03",
	"Chopin Ballade No. 4 Op. 52": "11:23",
	"Chopin Barcarolle Op. 60": "08:06",
	"Chopin Berceuse Op. 57": "04:14",
	"Chopin Etude Op. 10 No. 10": "02:05",
	"Chopin Etude Op. 10 No. 12": "02:49",
	"Chopin Etude Op. 10 No. 3": "03:44",
	"Chopin Etude Op. 10 No. 5": "01:41",
	"Chopin Etude Op. 10 No. 7": "01:31",
	"Chopin Etude Op. 25 No. 1": "02:14",
	"Chopin Etude Op. 25 No. 12": "02:29",
	"Chopin Etude Op. 25 No. 2": "01:29",
	"Chopin Etude Op. 25 No. 5": "02:57",
	"Chopin Etude Op. 25 No. 6": "02:05",
	"Chopin Etude Op. 25 No. 7": "04:52",
	"Chopin Etude Op. 25 No. 8": "01:06",
	"Chopin Etude Op. 25 No. 9": "00:58",
	"Chopin Fantaisie Impromptu Op. 66": "05:17",
	"Chopin Grand Polonaise Brillante Op. 22 No. 1": "09:08",
	"Chopin Grand Valse Brillante Op. 18": "04:51",
	"Chopin Grand Valse Brillante Op. 34 No. 1": "05:05",
	"Chopin Grand Valse Op. 42": "03:25",
	"Chopin Impromptu No. 1 Op. 29": "04:00",
	"Chopin Impromptu No. 2 Op. 36": "05:55",
	"Chopin Impromptu No. 3 Op. 51": "04:32",
	"Chopin Nocturne Op. 15 No. 2": "03:54",
	"Chopin Nocturne Op. 27 No. 2": "06:08",
	"Chopin Nocturne Op. 32 No. 1": "04:39",
	"Chopin Nocturne Op. 32 No. 2": "05:44",
	"Chopin Nocturne Op. 37 No. 2": "06:52",
	"Chopin Nocturne Op. 48 No. 1": "05:50",
	"Chopin Nocturne Op. 48 No. 2": "07:17",
	"Chopin Nocturne Op. 55 No. 1": "05:38",
	"Chopin Nocturne Op. 55 No. 2": "05:45",
	"Chopin Nocturne Op. 62 No. 1": "06:50",
	"Chopin Nocturne Op. 62 No. 2": "05:18",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 1": "23:24",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 2": "12:34",
	"Chopin Piano Concerto No. 1 Op. 11 Mov. 3": "09:45",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 1": "15:35",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 2": "11:01",
	"Chopin Piano Concerto No. 2 Op. 21 Mov. 3": "09:02",
	"Chopin Polonaise Op. 53": "06:27",
	"Chopin Polonaise-Fantaisie Op. 61": "12:11",
	"Chopin Prelude Op. 28 No. 1": "00:38",
	"Chopin Prelude Op. 28 No. 11": "00:40",
	"Chopin Prelude Op. 28 No. 17": "03:00",
	"Chopin Prelude Op. 28 No. 19": "01:20",
	"Chopin Prelude Op. 28 No. 24": "02:14",
	"Chopin Prelude Op. 28 No. 8": "01:53",
	"Chopin Scherzo No. 2 Op. 31": "08:50",
	"Chopin Scherzo No. 4 Op. 54": "11:54",
	"Chopin Sonata No. 1 Op. 4 Mov. 1": "09:18",
	"Chopin Sonata No. 1 Op. 4 Mov. 4": "06:48",
	"Chopin Sonata No. 2 Op. 35 Mov. 1": "05:23",
	"Chopin Sonata No. 2 Op. 35 Mov. 3": "08:03",
	"Chopin Sonata No. 3 Op. 58 Mov. 1": "09:42",
	"Chopin Sonata No. 3 Op. 58 Mov. 3": "09:05",
	"Chopin Waltz Op. 64 No. 1": "01:35",
	"Chopin Waltz Op. 64 No. 2": "03:01",
	"Chopin Waltz Op. 64 No. 3": "02:36",
	"Chopin Waltz Op. 69 No. 2": "02:51",
	"Chopin Waltz Op. 70 No. 1": "01:39",
	"Chopin Waltz Op. 70 No. 3": "02:33",
	"Colors - Code Geass": "01:30",
	"Connect - Madoka Magica": "04:28",
	"Continued Story - Code Geass": "05:09",
	"Dango Daikazoku - Clannad": "04:33",
	"Debussy Arabesque No. 1": "04:20",
	"Debussy Arabesque No. 2": "03:12",
	"Debussy Clair de Lune": "04:54",
	"Debussy Reverie": "04:14",
	"Door - Re Zero": "04:55",
	"Elegy for Rem - Re Zero": "07:00",
	"From the Edge - Demon Slayer": "04:34",
	"Fukashigi no Carte - Aobuta": "03:55",
	"Fuwa Fuwa Time - K-On": "03:56",
	"GIRI GIRI - Kaguya-sama": "04:19",
	"Gliere Harp Concerto": "28:39",
	"Glinka The Lark": "05:16",
	"God Knows - Haruhi": "04:38",
	"Gomen Ne Iiko Ja Irarenai - Kill la Kill": "04:41",
	"Grand Escape - Weathering With You": "05:34",
	"Guren no Yumiya - Attack on Titan": "01:33",
	"Gurenge - Demon Slayer": "03:56",
	"Hacking to the Gate - Steins;Gate": "04:14",
	"Haydn Serenade Op. 3 No. 5": "04:35",
	"Hikaru Nara - Your Lie in April": "04:09",
	"Ichiban no Takaramono - Angel Beats": "06:00",
	"If I've Been Enveloped in Tenderness - Kiki's Delivery Service": "03:11",
	"Is There Still Anything That Love Can Do - Weathering With You": "06:45",
	"Isabella's Lullaby - The Promised Neverland": "04:52",
	"Jiyuu no Tsubasa - Attack on Titan": "01:30",
	"Kaze ni Fukarete - Kaguya-sama": "04:31",
	"Kirameki - Your Lie in April": "04:39",
	"Konna Sekai - Akame ga Kill": "04:15",
	"Kreisler Liebesleid": "03:19",
	"Liszt Consolation No. 2": "03:11",
	"Liszt Consolation No. 3": "04:24",
	"Liszt La Leggierezza": "04:30",
	"Liszt Liebestraum No. 3": "04:15",
	"Liszt Mephisto Waltz": "11:41",
	"Liszt Piano Concerto No. 1": "18:33",
	"Liszt Sonata in B Minor": "30:24",
	"Liszt Un Sospiro": "05:54",
	"Liszt-Alabieff Le Rossignol": "03:15",
	"Longing for Sunbeams - Re Zero": "02:25",
	"Massenet Meditation from Thais": "04:53",
	"Mata Ashita - Madoka Magica": "01:28",
	"Melissa - Fullmetal Alchemist": "01:41",
	"Mendelssohn Piano Concerto No. 1 Mov. 3": "05:57",
	"Mendelssohn Violin Concerto Mov. 1": "12:46",
	"Merry Go Round of Life - Howl's Moving Castle": "05:08",
	"Misa Theme B - Death Note": "02:29",
	"Moonlight Densetsu - Sailor Moon": "02:52",
	"Moszkowski Piano Concerto Mov. 1": "12:55",
	"Mozart Symphony No. 41 Mov. 4": "08:45",
	"My Soul Your Beats - Angel Beats": "04:33",
	"Nanairo Symphony - Your Lie in April": "04:29",
	"Offenbach Galop Infernal": "05:18",
	"One Summers' Day - Spirited Away": "04:52",
	"Only My Railgun - Certain Scientific Railgun": "04:12",
	"Orange - Your Lie in April": "05:47",
	"Paganini Cantabile": "03:52",
	"Paganini Violin Concerto No. 1 Mov. 1": "21:33",
	"Paganini Violin Concerto No. 2 Mov. 3": "05:49",
	"Poulenc Improvisation No. 15": "02:37",
	"Promise of the World - Howl's Moving Castle": "04:18",
	"Rachmaninoff Elegie Op. 3 No. 1": "04:24",
	"Rachmaninoff Piano Concerto No. 1 Mov. 1": "12:12",
	"Rachmaninoff Piano Concerto No. 1 Mov. 2": "06:32",
	"Rachmaninoff Piano Concerto No. 1 Mov. 3": "07:54",
	"Rachmaninoff Piano Concerto No. 2 Mov. 1": "11:05",
	"Rachmaninoff Piano Concerto No. 2 Mov. 2": "12:02",
	"Rachmaninoff Piano Concerto No. 2 Mov. 3": "11:34",
	"Rachmaninoff Symphony No. 2 Mov. 3": "15:29",
	"Ravel Pavane for a Dead Princess": "06:41",
	"Red Swan - Attack on Titan": "01:31",
	"Reflection - Fullmetal Alchemist": "04:19",
	"Renai Circulation - Bakemonogatari": "04:14",
	"Reprise - Spirited Away": "04:42",
	"Rimsky-Korsakov Procession of the Nobles": "04:29",
	"Roaring Tides - Clannad": "02:35",
	"Rossini Barber of Seville": "07:43",
	"Rouge no Dengon - Kiki's Delivery Service": "03:02",
	"Saint-Saens Introduction Rondo Capriccioso": "08:31",
	"Saint-Saens The Swan": "03:13",
	"Sarasate Zigeunerweisen": "08:38",
	"Schubert Impromptu Op. 90 No. 1": "09:32",
	"Schubert Impromptu Op. 90 No. 2": "04:45",
	"Schubert Impromptu Op. 90 No. 3": "06:44",
	"Schubert Serenade": "03:42",
	"Schubert Symphony No. 8 Mov. 1": "14:51",
	"Schubert Symphony No. 8 Mov. 2": "13:23",
	"Scriabin Etude Op. 42 No. 5": "03:07",
	"Scriabin Etude Op. 8 No. 12": "02:11",
	"Scriabin Sonata No. 2 Mov. 1": "10:05",
	"Secret Base - Anohana": "05:45",
	"Shinzou wo Sasageyo - Attack on Titan": "01:30",
	"Shostakovich Waltz No. 2": "03:40",
	"Sirius - Kill la Kill": "04:21",
	"Sis Puella Magica - Madoka Magica": "02:46",
	"Sparkle - Your Name": "06:46",
	"Strauss Blue Danube": "10:52",
	"Strauss Fledermaus Overture": "08:50",
	"Styx Helix - Re Zero": "04:47",
	"Super Riser! - Macross": "03:48",
	"Tanjiro no Uta - Demon Slayer": "05:27",
	"Tchaikovsky Sleeping Beauty Waltz": "04:24",
	"Tchaikovsky Swan Lake Waltz": "07:10",
	"Tchaikovsky Violin Concerto Mov. 1": "18:33",
	"Tchaikovsky Violin Concerto Mov. 3": "09:52",
	"Tchaikovsky Waltz of the Flowers": "07:05",
	"The Intrepid - Fullmetal Alchemist Brotherhood": "02:15",
	"This Game - No Game No Life": "04:41",
	"Toki wo Kizamu Uta - Clannad After Story": "01:30",
	"Touch - Touch": "03:11",
	"Tsuki Akari - Akame ga Kill": "01:31",
	"Uso - Fullmetal Alchemist Brotherhood": "03:23",
	"Wanna Go Home - Konosuba": "03:18",
	"Wishing - Re Zero": "05:56",
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

var totalLength = 76281.0

'use strict';

const i18n = {
  it: {
    meta_title: "Seaview 26 | Casa Vacanze Vista Mare Isola Rossa, Sardegna",
    meta_desc: "Affitto casa vacanze al mare in Sardegna. Seaview 26: appartamento con terrazza panoramica a 180° a Isola Rossa, Nord Sardegna.",
    nav_home: "Home", nav_appartamento: "L'Appartamento", nav_territorio: "Il Territorio", nav_galleria: "Galleria", nav_tariffe: "Tariffe & FAQ", nav_contatti: "Contatti", nav_chisono: "Chi Sono", nav_prenota: "Prenota", btn_prenota_ora: "Prenota Ora",
    hero_tag: "Isola Rossa &nbsp;·&nbsp; Nord Sardegna &nbsp;·&nbsp; Vista Mare 180°", hero_h1: "Un panorama<br><em>infinito</em><br>sul mare.", hero_btn_check: "Richiedi Disponibilità", hero_btn_explore: "Esplora gli spazi", hero_badge_terr: "Due terrazze panoramiche", hero_m1: "5 min in auto dal mare", hero_m2: "Parcheggio privato", hero_m3: "Wi-Fi ultra veloce", hero_scroll: "Scorri",
    s1_lbl: "Vista Mare", s1_val: "180° Panoramica", s2_lbl: "Distanza Spiaggia", s2_val: "5 minuti in auto", s3_lbl: "Valutazione Ospiti", s3_val: "8.6 / 10", s4_lbl: "Parcheggio", s4_val: "Privato & Gratuito", s5_lbl: "Ospiti", s5_val: "Fino a 5 persone",
    ab_eye: "Il Tuo Rifugio", ab_h2: "Il silenzio della natura,<br><em>ogni mattina.</em>", ab_p1: "Immagina di aprire le persiane e trovare il Mediterraneo davanti a te. <strong>Seaview 26</strong> è un appartamento luminoso di 50 m², curato in ogni dettaglio, nel cuore tranquillo di Isola Rossa.", ab_q: "\"Una casa che ha tutto per rendere il soggiorno perfetto.\"", ab_p2: "I <strong>due terrazzi</strong> — uno dei quali completamente panoramico — sono l'anima della casa. È qui che i tramonti sardi si trasformano in spettacoli irripetibili.", ab_p3: "All'interno trovi spazi ariosi, <strong>completamente climatizzati</strong>, con una cucina attrezzata e materiali scelti con cura.", ab_host: "Paola, host dedicata", ab_staff: "Punteggio Staff 9.5 su Booking.com", ab_rev: "Recensioni verificate con media 8.6", ab_tag: "Isola Rossa · Sardegna",
    cs_eye: "L'Host", cs_h1: "Piacere, Paola", cs_h2: "La tua casa in<br><em>Sardegna.</em>", cs_p1: "L'ospitalità per me è molto più di un lavoro: è la gioia di condividere la bellezza di Isola Rossa con viaggiatori da tutto il mondo.", cs_p2: "Ho curato il Seaview 26 in ogni minimo dettaglio per offrirti un rifugio caldo e funzionale fin dal primo momento. Dalla pulizia impeccabile ai consigli pratici sui migliori ristoranti e calette segrete, sono sempre a disposizione.", cs_p3: "Se hai domande prima di prenotare, non esitare a scrivermi su WhatsApp o via email. Sarò felice di aiutarti!", cs_cta: "Scrivimi su WhatsApp",
    am_eye: "Comfort & Servizi", am_h2: "Tutto ciò che serve,<br><em style=\"color:rgba(255,255,255,0.55)\">niente di superfluo.</em>", am_btn: "Vedi lista completa →", ac1_n: "Terrazza panoramica", ac1_d: "Vista a 180° sul Mediterraneo", ac2_n: "Aria condizionata", ac2_d: "In ogni ambiente", ac3_n: "Wi-Fi gratuito", ac3_d: "Connessione veloce ovunque", ac4_n: "Parcheggio privato", ac4_d: "Incluso e gratuito", ac5_n: "Cucina completa", ac5_d: "Forno, microonde, utensili", ac6_n: "Lavatrice", ac6_d: "Per soggiorni lunghi", ac7_n: "TV Satellite", ac7_d: "Canali internazionali", ac8_n: "Sicurezza", ac8_d: "Estintori, allarme CO₂",
    ex_eye: "Il Territorio", ex_h2: "La Sardegna che<br><em>non dimentichi.</em>", ex_p: "Isola Rossa è il punto di partenza per un'estate che lascia il segno. Spiagge da leggenda, borghi medievali, sapori autentici.", ex1_tag: "Spiaggia · 5 min", ex1_t: "La Baia della Marinedda", ex1_d: "Una piscina naturale in estate, mecca del surf quando soffia il maestrale.", ex2_tag: "Natura · 20 min", ex2_t: "Costa Paradiso e Li Cossi", ex2_d: "Granito rosso scolpito dal vento, mare di smeraldo profondo.", ex3_tag: "Storia · 30 min", ex3_t: "Castelsardo", ex3_d: "Uno dei borghi medievali più integri d'Italia, con il suo Castello e i vicoli acciottolati.", ex4_tag: "Mare · Porto", ex4_t: "Maddalena e Asinara", ex4_d: "Dal porto partono escursioni per calette irraggiungibili via terra.", ex5_tag: "Tramonto · 5 min", ex5_t: "La Torre Aragonese", ex5_d: "A pochi minuti dall'appartamento, la storica Torre si staglia contro i rossi del tramonto.", ex6_tag: "Enogastronomia", ex6_t: "I Sapori della Gallura", ex6_d: "Pesce fresco e piatti di terra da gustare nei ristoranti locali.",
    ga_eye: "Esplora gli Spazi", ga_h2: "Ogni angolo racconta<br><em>una storia.</em>", g1: "La Baia", g2: "Soggiorno", g3: "Camera Principale", g4: "Tramonti Sardi", g5: "Terrazza & Relax", g6: "Cucina", g7: "Mare Cristallino", g_more: "Vedi tutte le foto",
    tf_eye: "Informazioni Pratiche", tf_h2: "Prezzi trasparenti.", tf_p: "I prezzi variano in base al periodo dell'anno.", tf_s1: "Bassa Stagione", tf_m1: "Ottobre - Maggio", tf_s2: "Media Stagione", tf_m2: "Giugno e Settembre", tf_s3: "Alta Stagione", tf_m3: "Luglio e Agosto", tf_per: "a notte", tf_clean: "* Spese di pulizia, lenzuola e biancheria da bagno: da €80.",
    faq_title: "Domande Frequenti", faq1_q: "A che ora sono check-in e check-out?", faq1_a: "Il check-in è disponibile dalle 15:00 alle 19:30. Il check-out deve essere effettuato tra le 08:00 e le 10:00 del mattino.", faq2_q: "Gli animali sono ammessi?", faq2_a: "Ci dispiace, ma per garantire il massimo livello di pulizia non ammettiamo animali domestici.", faq3_q: "Come funziona la prenotazione diretta?", faq3_a: "Inviateci una richiesta. Per bloccare le date è richiesto il versamento di una caparra.", faq4_q: "C'è il parcheggio?", faq4_a: "Sì, la struttura dispone di parcheggio privato gratuito.",
    re_eye: "Cosa Dicono gli Ospiti", re_h2: "Parole di chi <em>c'è stato.</em>", r1_t: "Posizione, ampi spazi, parcheggio e aria condizionata. Una casa che ha tutto per rendere il soggiorno perfetto.", r1_a: "Belgio", r2_t: "Alloggio ben situato con vista mare, ben progettato e funzionale. Il parcheggio davanti e la terrazza sono ottimi.", r2_a: "Francia", r3_t: "Appartamento pulitissimo e in posizione strategica. Ottimo per una vacanza in relax.", r3_a: "Svizzera", r_avg: "Media su 5 recensioni verificate", r_plat: "Booking.com · Favoloso",
    bk_eye: "Prenota Direttamente", bk_h2: "Contattaci<br><em>per prenotare.</em>", bk_p1: "Contatta Paola direttamente per richiedere la disponibilità dell'appartamento.", bk_save: "<strong>Invia una richiesta</strong> per ricevere informazioni sulle date disponibili.", ct_eye: "Dove Siamo", ct_ind: "Indirizzo", ct_tel: "Telefono & WhatsApp", bw_title: "Richiedi Disponibilità", bw_sub: "Contattaci per informazioni sulle date", bw_from: "Da", bw_per: "/ notte", bw_in: "Arrivo", bw_out: "Partenza", bw_guest: "Ospiti", bw_g1: "1 Ospite", bw_g2: "2 Ospiti", bw_g3: "3 Ospiti", bw_g4: "4 Ospiti", bw_g5: "5 Ospiti (max)", bw_tot_lbl: "Totale Stimato", bw_btn: "Invia Richiesta via Mail", bw_or: "— oppure scrivi su WhatsApp —", bw_btn_wa: "Messaggio WhatsApp",
    ft_h2: "Non sognarlo,<br>vivilo.", ft_btn: "Prenota la tua estate →", ft_desc: "Un appartamento con terrazza panoramica e vista mare a 180° a Isola Rossa.", ft_nav: "Navigazione", ft_cnt: "Contatti", ft_rat: "Valutato <strong>8.6/10</strong> su Booking.com",
    cf_h3: "Richiesta pronta!", cf_p: "Scegli come inviare il messaggio a Paola:", cf_lbl: "Il tuo messaggio", cf_em: "Invia via Email", cf_wa: "Invia via WhatsApp", cf_back: "Annulla",
    amm_eye: "Lista Completa", amm_h2: "Tutti i servizi inclusi", am_html: `<div class="am-cat"><h4>Cucina & Ristorazione</h4><ul><li>Cucina / Angolo cottura</li><li>Frigorifero</li><li>Forno e microonde</li><li>Piano cottura</li><li>Utensili da cucina</li></ul></div><div class="am-cat"><h4>Bagno</h4><ul><li>Bagno privato</li><li>Doccia / Vasca</li><li>Bidet e WC</li><li>Asciugacapelli</li><li>Lavatrice</li></ul></div><div class="am-cat"><h4>Generali</h4><ul><li>Aria condizionata</li><li>Wi-Fi gratuito</li><li>Parcheggio gratuito</li><li>Struttura non fumatori</li></ul></div>`,
    nights_str: "notti · Pulizie incl.", night_str: "notte · Pulizia incl.", mail_template: "Gentile Paola,\nVorrei richiedere disponibilità per il Seaview 26.\nArrivo: {ci}\nPartenza: {co}\nOspiti: {g}\nPreventivo stimato: €{tot}\n\nIn attesa di un riscontro, saluti.", mail_subj: "Prenotazione Seaview 26 - Arrivo {ci}"
  },
  en: {
    meta_title: "Seaview 26 | Sea View Holiday Home Isola Rossa",
    meta_desc: "Rent a sea view apartment in Sardinia. Seaview 26: holiday home with 180° panoramic terrace.",
    nav_home: "Home", nav_appartamento: "The Apartment", nav_territorio: "The Area", nav_galleria: "Gallery", nav_tariffe: "Rates & FAQ", nav_contatti: "Contact", nav_chisono: "About the Host", nav_prenota: "Book", btn_prenota_ora: "Book Now",
    hero_tag: "Isola Rossa  ·  North Sardinia  ·  180° Sea View", hero_h1: "An endless<br><em>panorama</em><br>over the sea.", hero_btn_check: "Request Availability", hero_btn_explore: "Explore spaces", hero_badge_terr: "Two panoramic terraces", hero_m1: "5 min by car from beach", hero_m2: "Private parking", hero_m3: "Ultra-fast Wi-Fi", hero_scroll: "Scroll",
    s1_lbl: "Sea View", s1_val: "180° Panoramic", s2_lbl: "Beach Distance", s2_val: "5 minutes by car", s3_lbl: "Guest Rating", s3_val: "8.6 / 10", s4_lbl: "Parking", s4_val: "Private & Free", s5_lbl: "Guests", s5_val: "Up to 5 people",
    ab_eye: "Your Retreat", ab_h2: "The silence of nature,<br><em>every morning.</em>", ab_p1: "Imagine opening the shutters and finding the Mediterranean right in front of you. <strong>Seaview 26</strong> is a bright 50 m² apartment.", ab_q: "\"A house that has everything to make your stay perfect.\"", ab_p2: "The <strong>two terraces</strong> are the soul of the house. Here, Sardinian sunsets turn into unrepeatable shows.", ab_p3: "Inside you will find airy spaces, <strong>fully air-conditioned</strong>, with an equipped kitchen.", ab_host: "Paola, dedicated host", ab_staff: "Staff Score 9.5 on Booking.com", ab_rev: "Verified reviews with 8.6 average", ab_tag: "Isola Rossa · Sardinia",
    cs_eye: "The Host", cs_h1: "Nice to meet you, I'm Paola", cs_h2: "Your home in<br><em>Sardinia.</em>", cs_p1: "Hospitality is the joy of making you feel at home. I am always available for advice!", cs_p2: "I have taken care of Seaview 26 down to the smallest detail to offer you a warm and functional refuge.", cs_p3: "If you have any questions before booking, do not hesitate to contact me.", cs_cta: "Message me on WhatsApp",
    am_eye: "Comfort & Services", am_h2: "Everything you need.", am_btn: "See full list →", ac1_n: "Panoramic terrace", ac1_d: "180° Mediterranean view", ac2_n: "Air conditioning", ac2_d: "In every room", ac3_n: "Free Wi-Fi", ac3_d: "Fast connection", ac4_n: "Private parking", ac4_d: "Included and free", ac5_n: "Full kitchen", ac5_d: "Oven, microwave", ac6_n: "Washing machine", ac6_d: "For longer stays", ac7_n: "Satellite TV", ac7_d: "International channels", ac8_n: "Safety", ac8_d: "Extinguishers, CO₂ alarm",
    ex_eye: "The Area", ex_h2: "The Sardinia you<br><em>won't forget.</em>", ex_p: "Isola Rossa is the starting point for a memorable summer.", ex1_tag: "Beach · 5 min", ex1_t: "Marinedda Beach", ex1_d: "A natural pool in summer, a surfing mecca when the mistral blows.", ex2_tag: "Nature · 20 min", ex2_t: "Costa Paradiso", ex2_d: "Red granite sculpted by the wind, deep emerald sea.", ex3_tag: "History · 30 min", ex3_t: "Castelsardo", ex3_d: "One of Italy's most intact medieval villages.", ex4_tag: "Boat Trips", ex4_t: "Maddalena & Asinara", ex4_d: "Excursions leave from the port for unreachable coves.", ex5_tag: "Sunset · 5 min", ex5_t: "The Aragonese Tower", ex5_d: "The historic Tower stands out against the red Sardinian sunset.", ex6_tag: "Food & Wine", ex6_t: "Vermentino & Seafood", ex6_d: "Discover local flavors in the port restaurants.",
    ga_eye: "Explore", ga_h2: "Every corner tells<br><em>a story.</em>", g1: "The Bay", g2: "Living Room", g3: "Main Bedroom", g4: "Sunsets", g5: "Terrace", g6: "Kitchen", g7: "Sea", g_more: "See all photos",
    tf_eye: "Practical Info", tf_h2: "Transparent pricing.", tf_p: "Prices vary by season.", tf_s1: "Low Season", tf_m1: "October - May", tf_s2: "Mid Season", tf_m2: "June & September", tf_s3: "High Season", tf_m3: "July & August", tf_per: "per night", tf_clean: "* Cleaning, bed linen and towels: from €80.",
    faq_title: "FAQ", faq1_q: "Check-in and check-out times?", faq1_a: "Check-in: 15:00 - 19:30. Check-out: 08:00 - 10:00.", faq2_q: "Are pets allowed?", faq2_a: "We do not allow pets.", faq3_q: "How does direct booking work?", faq3_a: "Send us a request. A deposit is required to block dates.", faq4_q: "Is parking available?", faq4_a: "Yes, free private parking.",
    re_eye: "Reviews", re_h2: "Words from <em>our guests.</em>", r1_t: "Location, space, parking and air conditioning. A house that has everything to make the stay perfect.", r1_a: "Belgium", r2_t: "Well located with a sea view, well designed and functional. The parking and the terrace are great pluses.", r2_a: "France", r3_t: "Spotlessly clean apartment in a strategic position. Great for a relaxing holiday.", r3_a: "Switzerland", r_avg: "Average of 5 verified reviews", r_plat: "Booking.com · Fabulous",
    bk_eye: "Book Directly", bk_h2: "Contact us<br><em>to book.</em>", bk_p1: "Contact Paola directly to request the availability of the apartment.", bk_save: "<strong>Send a request</strong> to receive information about available dates.", ct_eye: "Location", ct_ind: "Address", ct_tel: "Phone & WhatsApp", bw_title: "Request Availability", bw_sub: "Contact us for information about dates", bw_from: "From", bw_per: "/ night", bw_in: "Check-in", bw_out: "Check-out", bw_guest: "Guests", bw_g1: "1 Guest", bw_g2: "2 Guests", bw_g3: "3 Guests", bw_g4: "4 Guests", bw_g5: "5 Guests", bw_tot_lbl: "Estimated Total", bw_btn: "Send Email Request", bw_or: "— or —", bw_btn_wa: "WhatsApp Message",
    ft_h2: "Don't dream it,<br>live it.", ft_btn: "Book your summer →", ft_desc: "Sea view holiday home in Isola Rossa, Sardinia.", ft_nav: "Navigation", ft_cnt: "Contact us", ft_rat: "Rated <strong>8.6/10</strong> on Booking",
    cf_h3: "Ready!", cf_p: "Choose how to send:", cf_lbl: "Message", cf_em: "Email", cf_wa: "WhatsApp", cf_back: "Cancel",
    amm_eye: "Full List", amm_h2: "All amenities", am_html: `<div class="am-cat"><h4>Amenities</h4><ul><li>Kitchen</li><li>Air conditioning</li><li>Wi-Fi</li><li>Parking</li></ul></div>`, nights_str: "nights", night_str: "night", mail_template: "Hi Paola,\nI'd like to book Seaview 26.\nCheck-in: {ci}\nCheck-out: {co}\nGuests: {g}\nTotal: €{tot}\nRegards.", mail_subj: "Booking - {ci}"
  },
  fr: {
    meta_title: "Seaview 26 | Location Vacances Vue Mer Isola Rossa",
    meta_desc: "Louez un appartement vue mer en Sardaigne. Seaview 26 : location avec terrasse panoramique à 180°.",
    nav_home: "Accueil", nav_appartamento: "L'Appartement", nav_territorio: "Le Territoire", nav_galleria: "Galerie", nav_tariffe: "Tarifs & FAQ", nav_contatti: "Contacts", nav_chisono: "L'Hôte", nav_prenota: "Réserver", btn_prenota_ora: "Réserver",
    hero_tag: "Isola Rossa  ·  Nord Sardaigne  ·  Vue Mer 180°", hero_h1: "Un panorama<br><em>infini</em><br>sur la mer.", hero_btn_check: "Vérifier les dispos", hero_btn_explore: "Explorer", hero_badge_terr: "Deux terrasses panoramiques", hero_m1: "À 5 min en voiture", hero_m2: "Parking privé", hero_m3: "Wi-Fi ultra rapide", hero_scroll: "Défiler",
    s1_lbl: "Vue Mer", s1_val: "Panoramique 180°", s2_lbl: "Plage", s2_val: "5 minutes en voiture", s3_lbl: "Évaluation", s3_val: "8.6 / 10", s4_lbl: "Parking", s4_val: "Privé & Gratuit", s5_lbl: "Personnes", s5_val: "Jusqu'à 5 pers.",
    ab_eye: "Votre Refuge", ab_h2: "Le silence de la nature,<br><em>chaque matin.</em>", ab_p1: "Imaginez ouvrir les volets et trouver la Méditerranée devant vous. <strong>Seaview 26</strong> est un appartement lumineux de 50 m².", ab_q: "\"Un logement parfait pour les vacances.\"", ab_p2: "Les <strong>deux terrasses</strong> sont l'âme de la maison.", ab_p3: "Espaces aérés et <strong>climatisés</strong>.", ab_host: "Paola, hôte dévouée", ab_staff: "Note 9.5 sur Booking", ab_rev: "Avis vérifiés", ab_tag: "Isola Rossa · Sardaigne",
    cs_eye: "L'Hôte", cs_h1: "Enchantée, je suis Paola", cs_h2: "Bienvenue chez<br><em>vous en Sardaigne.</em>", cs_p1: "L'hospitalité, c'est ma passion.", cs_p2: "J'ai soigné Seaview 26 dans les moindres détails.", cs_p3: "N'hésitez pas à m'écrire.", cs_cta: "WhatsApp",
    am_eye: "Services", am_h2: "Tout ce dont vous avez besoin.", am_btn: "Liste complète →", ac1_n: "Terrasse", ac1_d: "Vue mer", ac2_n: "Climatisation", ac2_d: "Toutes pièces", ac3_n: "Wi-Fi", ac3_d: "Gratuit", ac4_n: "Parking", ac4_d: "Gratuit", ac5_n: "Cuisine", ac5_d: "Équipée", ac6_n: "Lave-linge", ac6_d: "Inclus", ac7_n: "TV", ac7_d: "Satellite", ac8_n: "Sécurité", ac8_d: "Extincteurs",
    ex_eye: "Le Territoire", ex_h2: "La Sardaigne que vous<br><em>n'oublierez pas.</em>", ex_p: "Plages de légende et villages médiévaux.", ex1_tag: "Plage", ex1_t: "Marinedda", ex1_d: "Paradis du surf et baignade.", ex2_tag: "Nature", ex2_t: "Costa Paradiso", ex2_d: "Roches rouges.", ex3_tag: "Histoire", ex3_t: "Castelsardo", ex3_d: "Village historique.", ex4_tag: "Excursions", ex4_t: "Maddalena", ex4_d: "Départ du port.", ex5_tag: "Coucher de soleil", ex5_t: "Tour Aragonaise", ex5_d: "À quelques minutes.", ex6_tag: "Gastronomie", ex6_t: "Poissons frais", ex6_d: "Restaurants locaux.",
    ga_eye: "Espaces", ga_h2: "Chaque coin raconte<br><em>une histoire.</em>", g1: "Baie", g2: "Salon", g3: "Chambre", g4: "Couchers de soleil", g5: "Terrasse", g6: "Cuisine", g7: "Mer", g_more: "Toutes les photos",
    tf_eye: "Infos", tf_h2: "Prix transparents.", tf_p: "Prix par saison.", tf_s1: "Basse Saison", tf_m1: "Oct-Mai", tf_s2: "Moyenne Saison", tf_m2: "Juin-Sept", tf_s3: "Haute Saison", tf_m3: "Juil-Août", tf_per: "par nuit", tf_clean: "* Ménage, draps et serviettes : à partir de 80 €.",
    faq_title: "FAQ", faq1_q: "Arrivée / Départ ?", faq1_a: "In: 15h-19h30. Out: 8h-10h.", faq2_q: "Animaux ?", faq2_a: "Non admis.", faq3_q: "Réservation ?", faq3_a: "Acompte requis.", faq4_q: "Parking ?", faq4_a: "Gratuit.",
    re_eye: "Avis", re_h2: "Mots de <em>nos invités.</em>", r1_t: "L'emplacement, l'espace, le parking et la clim. Un logement qui dispose de tout pour faciliter le séjour.", r1_a: "Belgique", r2_t: "Le logement est bien situé avec vue mer, bien conçu et très fonctionnel. Le parking et la terrasse sont superbes.", r2_a: "France", r3_t: "Logement très propre et bien situé. Idéal pour un séjour confortable.", r3_a: "Suisse", r_avg: "Moyenne 8.6", r_plat: "Booking.com",
    bk_eye: "Réservation", bk_h2: "Contactez-nous<br><em>pour réserver.</em>", bk_p1: "Contactez directement Paola pour connaître les disponibilités.", bk_save: "<strong>Soumettre une demande</strong> pour recevoir des informations sur les dates.", ct_eye: "Localisation", ct_ind: "Adresse", ct_tel: "Tél & WhatsApp", bw_title: "Disponibilité", bw_sub: "Demande immédiate", bw_from: "Dès", bw_per: "/ nuit", bw_in: "Arrivée", bw_out: "Départ", bw_guest: "Personnes", bw_g1: "1 Pers.", bw_g2: "2 Pers.", bw_g3: "3 Pers.", bw_g4: "4 Pers.", bw_g5: "5 Pers.", bw_tot_lbl: "Total", bw_btn: "Envoyer par e-mail", bw_or: "— ou —", bw_btn_wa: "Message WhatsApp",
    ft_h2: "Vivez-le.", ft_btn: "Réservez →", ft_desc: "Vue mer 180°.", ft_nav: "Menu", ft_cnt: "Contacts", ft_rat: "8.6/10",
    cf_h3: "Prêt !", cf_p: "Envoyer à Paola :", cf_lbl: "Message", cf_em: "Email", cf_wa: "WhatsApp", cf_back: "Annuler",
    amm_eye: "Liste", amm_h2: "Services", am_html: `<div class="am-cat"><h4>Services</h4><ul><li>Climatisation</li><li>Wi-Fi</li><li>Parking</li></ul></div>`, nights_str: "nuits", night_str: "nuit", mail_template: "Bonjour Paola,\nJe voudrais réserver.\nArrivée: {ci}\nDépart: {co}\nPers: {g}\nTotal: €{tot}\nCordialement.", mail_subj: "Demande - {ci}"
  }
};

let currentLang = localStorage.getItem('seaview26_lang') || 'it';

// Riferimenti agli input definiti subito per evitare errori
let ciInput = null;
let coInput = null;

function setLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('seaview26_lang', lang);
  document.documentElement.lang = lang;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && i18n[lang].meta_desc) metaDesc.setAttribute("content", i18n[lang].meta_desc);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });

  const amModalGrid = document.getElementById('amModalGrid');
  if (amModalGrid) amModalGrid.innerHTML = i18n[lang].am_html;

  if (typeof calcPrice === 'function') calcPrice();
  if (typeof updateLb === 'function') updateLb();
}

window.addEventListener('scroll', () => {
  const scrollH = document.body.scrollHeight - window.innerHeight;
  if (scrollH > 0 && document.getElementById('scrollBar')) {
    document.getElementById('scrollBar').style.width = (window.scrollY / scrollH * 100) + '%';
  }
  const nb = document.getElementById('navbar');
  if (nb) nb.classList.toggle('stuck', window.scrollY > 60);
}, { passive: true });

function toggleMob() {
  const m = document.getElementById('mobMenu');
  const t = document.getElementById('navToggle');
  if (m) m.classList.toggle('open');
  if (t) t.classList.toggle('open');
  document.body.style.overflow = m && m.classList.contains('open') ? 'hidden' : '';
}
function closeMob() {
  const m = document.getElementById('mobMenu');
  const t = document.getElementById('navToggle');
  if (m) m.classList.remove('open');
  if (t) t.classList.remove('open');
  document.body.style.overflow = '';
}

function goto(id) {
  const el = document.getElementById(id);
  if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
  else { window.location.href = 'index.html#' + id; }
}

const CLEAN = 50;
let calcTotal = 0;
let bookSubject = '';

function rate(d) {
  const m = d.getMonth() + 1;
  if (m === 7 || m === 8) return 180;
  if (m === 6 || m === 9) return 130;
  return 90;
}

function calcPrice() {
  if (!ciInput || !coInput) return;
  const res = document.getElementById('priceResult');
  if (!res) return;

  const ciV = ciInput.value, coV = coInput.value;
  if (!ciV || !coV) { res.classList.remove('show'); return; }

  const ci = new Date(ciV), co = new Date(coV), today = new Date();
  today.setHours(0, 0, 0, 0);

  if (ci < today || co <= ci) { res.classList.remove('show'); return; }

  let tot = 0, nights = 0, cur = new Date(ci);
  while (cur < co) { tot += rate(cur); cur.setDate(cur.getDate() + 1); nights++; }
  calcTotal = tot + CLEAN;

  const nightText = nights === 1 ? i18n[currentLang].night_str : i18n[currentLang].nights_str;
  document.getElementById('prNights').textContent = nights + ' ' + nightText;
  document.getElementById('prTotal').textContent = '€' + calcTotal;
  res.classList.add('show');
}

function openConfirm() {
  if (!ciInput || !coInput) return;
  const guestsEl = document.getElementById('guests');
  const guests = guestsEl ? guestsEl.value : "2";
  if (!ciInput.value || !coInput.value) {
    const al = { it: 'Seleziona le date di arrivo e partenza.', en: 'Please select check-in and check-out dates.', fr: 'Veuillez sélectionner les dates.' };
    alert(al[currentLang] || al.it); return;
  }
  let msg = i18n[currentLang].mail_template;
  msg = msg.replace('{ci}', ciInput.value).replace('{co}', coInput.value).replace('{g}', guests).replace('{tot}', calcTotal);
  bookSubject = i18n[currentLang].mail_subj.replace('{ci}', ciInput.value);

  const msgTa = document.getElementById('msgTa');
  if (msgTa) msgTa.value = msg;

  const overlay = document.getElementById('confirmOverlay');
  if (overlay) { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeConfirm() {
  const overlay = document.getElementById('confirmOverlay');
  if (overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }
}

function doEmail() {
  const msgTa = document.getElementById('msgTa');
  if (msgTa) window.location.href = 'mailto:p.piredda@gmail.com?subject=' + encodeURIComponent(bookSubject) + '&body=' + encodeURIComponent(msgTa.value);
}

function doWa() {
  const msgTa = document.getElementById('msgTa');
  if (msgTa) window.open('https://wa.me/393339070939?text=' + encodeURIComponent(msgTa.value), '_blank');
}

const gallery = [
  { s: 'img/casa.jpg', key: 'g1' }, { s: 'img/13.jpg', key: 'g1' }, { s: 'img/8.jpg', key: 'g5' }, { s: 'img/20.jpg', key: 'g5' },
  { s: 'img/9.jpg', key: 'g2' }, { s: 'img/31.jpg', key: 'g2' }, { s: 'img/24.JPG', key: 'g6' }, { s: 'img/33.jpg', key: 'g6' },
  { s: 'img/2.jpg', key: 'g3' }, { s: 'img/47.JPG', key: 'g3' }, { s: 'img/4.jpg', key: 'g3' }, { s: 'img/18.jpg', key: 'g_more' },
  { s: 'img/30.jpg', key: 'g_more' }, { s: 'img/6.jpg', key: 'g7' }, { s: 'img/41.jpg', key: 'g4' }, { s: 'img/42.jpg', key: 'g7' },
  { s: 'img/17.jpg', key: 'g1' }
];

let curPic = 0;

function openLb(i) {
  const lb = document.getElementById('lb');
  if (!lb) return;
  curPic = i; updateLb(); lb.classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeLb() {
  const lb = document.getElementById('lb');
  if (!lb) return;
  lb.classList.remove('open'); document.body.style.overflow = '';
}
function shiftLb(d) {
  curPic = (curPic + d + gallery.length) % gallery.length; updateLb();
}
function updateLb() {
  const lbImg = document.getElementById('lbImg');
  const lbCount = document.getElementById('lbCount');
  if (!lbImg || !lbCount) return;
  const g = gallery[curPic];
  lbImg.src = g.s;
  lbImg.alt = i18n[currentLang][g.key] || "";
  lbCount.textContent = (curPic + 1) + ' / ' + gallery.length;
}

// === INIZIALIZZAZIONE SICURA AL CARICAMENTO ===
document.addEventListener('DOMContentLoaded', () => {

  // Imposta Lingua
  const initLang = localStorage.getItem('seaview26_lang') || navigator.language.slice(0, 2);
  setLang(i18n[initLang] ? initLang : 'it');

  // Associa input calendario se esistono
  ciInput = document.getElementById('ci');
  coInput = document.getElementById('co');
  if (ciInput && coInput) {
    const todayStr = new Date().toISOString().split('T')[0];
    ciInput.setAttribute('min', todayStr);
    coInput.setAttribute('min', todayStr);
    ciInput.addEventListener('change', function () {
      if (!this.value) return;
      const ciDate = new Date(this.value);
      const nextDay = new Date(ciDate);
      nextDay.setDate(ciDate.getDate() + 1);
      const nextDayStr = nextDay.toISOString().split('T')[0];
      coInput.setAttribute('min', nextDayStr);
      if (coInput.value <= this.value) coInput.value = nextDayStr;
      calcPrice();
    });
  }

  // Lightbox Touch
  const lb = document.getElementById('lb');
  if (lb) {
    let touchstartX = 0; let touchendX = 0;
    lb.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; }, { passive: true });
    lb.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      if (touchendX < touchstartX - 50) shiftLb(1);
      if (touchendX > touchstartX + 50) shiftLb(-1);
    }, { passive: true });
  }

  // Intersection Observer per animazioni reveal
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stat-cell')) {
          const c = entry.target.querySelector('.counter');
          if (c) startCounter(c);
        }
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.rv').forEach(el => observer.observe(el));
});

function startCounter(el) {
  const to = parseFloat(el.getAttribute('data-to'));
  const dec = parseInt(el.getAttribute('data-dec')) || 0;
  const duration = 2000;
  const start = performance.now();

  function up(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const cur = (ease * to).toFixed(dec);
    el.textContent = cur;
    if (progress < 1) requestAnimationFrame(up);
  }
  requestAnimationFrame(up);
}

// Chiusura con tasto Esc
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lb');
  if (lb && lb.classList.contains('open')) {
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowRight') shiftLb(1);
    if (e.key === 'ArrowLeft') shiftLb(-1);
  }
  const cf = document.getElementById('confirmOverlay');
  if (cf && cf.classList.contains('open') && e.key === 'Escape') closeConfirm();

  const mm = document.getElementById('mobMenu');
  if (mm && mm.classList.contains('open') && e.key === 'Escape') closeMob();
});
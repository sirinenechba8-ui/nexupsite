/* =====================================================================
   NEXUP | CONTENU MODIFIABLE DU SITE
   ---------------------------------------------------------------------
   C'est le seul fichier à modifier pour gérer le site :
   coordonnées, formations, langues et photos de la galerie.

   Règles simples :
   - Chaque texte existe en 3 langues : fr (par défaut), ar, en.
   - Une valeur laissée à null s'affiche "À confirmer" sur le site.
   - Aucune date de début de session n'est affichée : chaque carte
     indique "Prochaine session : nous contacter".
   - status : "open" (Inscriptions ouvertes), "soon" (Bientôt),
              "request" (Sur demande).
   ===================================================================== */

window.NEXUP_CONTENT = {

  /* ------------------------- COORDONNÉES ------------------------- */
  center: {
    phoneDisplay: "+216 52 388 818",
    phoneTel: "+21652388818",
    whatsapp: "21652388818",          // numéro au format international, sans + ni espaces
    email: null,                      // ex. "contact@nexup.tn"
    address: {
      fr: "Route Zaouiet Kontech, Immeuble RMB, Jemmel, Monastir, Tunisie",
      ar: "طريق زاوية قنطش، عمارة RMB، جمّال، المنستير، تونس",
      en: "Route Zaouiet Kontech, RMB Building, Jemmel, Monastir, Tunisia"
    },
    hours: null,                      // ex. { fr: "Lundi à samedi, 9h à 19h", ar: "...", en: "..." }
    facebook:  { label: "Nex Up", url: null },   // coller l'URL de la page Facebook
    instagram: { label: "Nex Up", url: null },   // coller l'URL du compte Instagram
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Immeuble+RMB+Route+Zaouiet+Kontech+Jemmel+Monastir",

    /* Envoi du formulaire d'inscription.
       Laisser vide : la demande validée est envoyée par WhatsApp (aucun faux succès).
       Renseigner une URL (Formspree, Getform, API maison...) : la demande est
       envoyée en POST JSON et le succès n'est affiché que si le serveur répond OK. */
    formEndpoint: ""
  },

  /* -------------------------- CATÉGORIES -------------------------- */
  categories: [
    { id: "pro",     label: { fr: "Formation professionnelle", ar: "التكوين المهني",   en: "Professional training" } },
    { id: "langues", label: { fr: "Formation en langues",      ar: "تكوين في اللغات", en: "Language training" } }
  ],

  /* ---------------------------- LANGUES --------------------------- */
  languages: [
    { id: "fr",    code: "FR", label: { fr: "Français",       ar: "الفرنسية",  en: "French" } },
    { id: "en",    code: "EN", label: { fr: "Anglais",        ar: "الإنجليزية", en: "English" } },
    { id: "de",    code: "DE", label: { fr: "Allemand",       ar: "الألمانية", en: "German" } },
    { id: "it",    code: "IT", label: { fr: "Italien",        ar: "الإيطالية", en: "Italian" } },
    { id: "other", code: "+",  label: { fr: "Autres langues", ar: "لغات أخرى", en: "Other languages" } }
  ],

  /* ---------------------------------------------------------------
     FORMATIONS
     Pour ajouter une formation : copier un bloc { ... }, changer l'id
     (unique, sans espaces) et remplir les champs.
     Pour retirer une formation : supprimer son bloc.
     --------------------------------------------------------------- */
  programs: [

    /* ---- Formation professionnelle (catalogue à compléter par le centre) ---- */
    {
      id: "pro-catalogue",
      category: "pro",
      language: null,
      level: null,
      status: "request",
      placeholder: true,
      title: {
        fr: "Formations professionnelles",
        ar: "التكوينات المهنية",
        en: "Professional training programs"
      },
      description: {
        fr: "Le catalogue détaillé de nos formations professionnelles sera publié ici. Contactez-nous pour connaître les programmes disponibles.",
        ar: "سيتمّ نشر القائمة المفصّلة لتكويناتنا المهنية هنا. تواصلوا معنا لمعرفة البرامج المتوفّرة.",
        en: "Our detailed professional training catalogue will be published here. Contact us to find out which programs are available."
      },
      objectives: null,
      duration: null,
      schedule: null
    },

    /* ---- Allemand A1 (informations publiées par le centre) ---- */
    {
      id: "allemand-a1",
      category: "langues",
      language: "de",
      level: "A1",
      status: "open",
      title: { fr: "Allemand, niveau A1", ar: "اللغة الألمانية، المستوى A1", en: "German, level A1" },
      description: {
        fr: "Cours d'allemand pour débutants avec une préparation complète aux examens Goethe et ÖSD.",
        ar: "دروس في اللغة الألمانية للمبتدئين مع تحضير كامل لامتحانات Goethe و ÖSD.",
        en: "German course for beginners with full preparation for the Goethe and ÖSD exams."
      },
      objectives: {
        fr: ["Préparation complète aux examens Goethe / ÖSD", "Pratique intensive : écrit, oral et communication", "Formateurs qualifiés et groupes réduits"],
        ar: ["تحضير كامل لامتحانات Goethe / ÖSD", "تطبيق مكثّف: كتابة، شفاهي وتواصل", "مكوّنون مؤهّلون ومجموعات صغيرة"],
        en: ["Full preparation for the Goethe / ÖSD exams", "Intensive practice: writing, speaking and communication", "Qualified trainers and small groups"]
      },
      duration: { fr: "90 heures", ar: "90 ساعة", en: "90 hours" },
      schedule: null
    },

    /* ---- Italien A1 (informations publiées par le centre) ---- */
    {
      id: "italien-a1",
      category: "langues",
      language: "it",
      level: "A1",
      status: "open",
      title: { fr: "Italien, niveau A1", ar: "اللغة الإيطالية، المستوى A1", en: "Italian, level A1" },
      description: {
        fr: "Cours d'italien pour débutants, orienté vers la préparation au CILS, les études et le travail.",
        ar: "دروس في اللغة الإيطالية للمبتدئين، موجّهة للتحضير لامتحان CILS وللدراسة والعمل.",
        en: "Italian course for beginners, focused on CILS preparation, study and work."
      },
      objectives: {
        fr: ["Préparation au CILS", "Italien pour les études", "Italien pour le travail"],
        ar: ["التحضير لامتحان CILS", "الإيطالية من أجل الدراسة", "الإيطالية من أجل العمل"],
        en: ["CILS exam preparation", "Italian for study", "Italian for work"]
      },
      duration: null,
      schedule: { fr: "Samedi et dimanche, de 10h à 12h", ar: "كل سبت وأحد، من 10:00 إلى 12:00", en: "Saturdays and Sundays, 10:00 to 12:00" }
    },

    /* ---- Français (à compléter) ---- */
    {
      id: "francais",
      category: "langues",
      language: "fr",
      level: null,
      status: "request",
      placeholder: true,
      title: { fr: "Français", ar: "اللغة الفرنسية", en: "French" },
      description: {
        fr: "Programme de français en cours de préparation. Contactez-nous pour connaître les niveaux et horaires disponibles.",
        ar: "برنامج اللغة الفرنسية قيد الإعداد. تواصلوا معنا لمعرفة المستويات والتوقيت المتاح.",
        en: "French program in preparation. Contact us for available levels and schedules."
      },
      objectives: null,
      duration: null,
      schedule: null
    },

    /* ---- Anglais (à compléter) ---- */
    {
      id: "anglais",
      category: "langues",
      language: "en",
      level: null,
      status: "request",
      placeholder: true,
      title: { fr: "Anglais", ar: "اللغة الإنجليزية", en: "English" },
      description: {
        fr: "Programme d'anglais en cours de préparation. Contactez-nous pour connaître les niveaux et horaires disponibles.",
        ar: "برنامج اللغة الإنجليزية قيد الإعداد. تواصلوا معنا لمعرفة المستويات والتوقيت المتاح.",
        en: "English program in preparation. Contact us for available levels and schedules."
      },
      objectives: null,
      duration: null,
      schedule: null
    },

    /* ---- Autres langues (à confirmer) ---- */
    {
      id: "autres-langues",
      category: "langues",
      language: "other",
      level: null,
      status: "request",
      placeholder: true,
      title: { fr: "Autres langues", ar: "لغات أخرى", en: "Other languages" },
      description: {
        fr: "D'autres langues pourront être proposées selon la demande. Contactez-nous pour nous faire part de votre besoin.",
        ar: "يمكن اقتراح لغات أخرى حسب الطلب. تواصلوا معنا لإعلامنا باحتياجاتكم.",
        en: "Other languages may be offered on demand. Contact us to tell us what you need."
      },
      objectives: null,
      duration: null,
      schedule: null
    }

    /* ---- MODÈLE À COPIER ----
    ,{
      id: "nouvelle-formation",
      category: "pro",            // "pro" ou "langues"
      language: null,             // pour une langue : "fr", "en", "de", "it" ou "other"
      level: null,                // ex. "A2"
      status: "open",
      title:       { fr: "", ar: "", en: "" },
      description: { fr: "", ar: "", en: "" },
      objectives:  { fr: [""], ar: [""], en: [""] },
      duration:    { fr: "", ar: "", en: "" },
      schedule:    { fr: "", ar: "", en: "" }
    }
    */
  ],

  /* ---------------------------------------------------------------
     GALERIE
     src: chemin de la photo (ex. "assets/accueil.webp").
     src: null affiche un emplacement "Photo à venir".
     category: "salles", "accueil", "classes", "activites", "locaux"
     --------------------------------------------------------------- */
  gallery: [
    { src: "assets/facade-nexup.webp", category: "locaux", wide: false,
      caption: { fr: "La façade de NEXUP, Immeuble RMB à Jemmel", ar: "واجهة NEXUP، عمارة RMB بجمّال", en: "NEXUP's front, RMB Building in Jemmel" } },
    { src: "assets/salle-cours-panorama.webp", category: "classes", wide: true,
      caption: { fr: "Cours de langue en groupe", ar: "درس لغة ضمن مجموعة", en: "Group language class" } },
    { src: "assets/seance-groupe.webp", category: "activites", wide: false,
      caption: { fr: "Séance de travail en petit groupe", ar: "حصّة عمل ضمن مجموعة صغيرة", en: "Small group work session" } },
    { src: null, category: "salles",
      caption: { fr: "Salle de formation", ar: "قاعة التكوين", en: "Training room" } },
    { src: null, category: "accueil",
      caption: { fr: "Espace d'accueil", ar: "فضاء الاستقبال", en: "Reception area" } },
    { src: null, category: "classes",
      caption: { fr: "Salle de classe", ar: "قاعة الدرس", en: "Classroom" } },
    { src: null, category: "activites",
      caption: { fr: "Activité d'apprentissage", ar: "نشاط تعليمي", en: "Learning activity" } },
    { src: null, category: "locaux",
      caption: { fr: "Les installations du centre", ar: "تجهيزات المركز", en: "Center facilities" } }
  ]
};

import { Language } from '@/lib/language';

export interface InterestItem {
  title: string;
  description: string;
  contactText: string;
  contactLink: string;
}

export interface AboutPageData {
  title: string;
  subtitle: string;
  journeyTitle: string;
  journeyParagraph1: string;
  journeyParagraph2: string;
  beyondCodeTitle: string;
  interests: {
    tableTennis: InterestItem;
    dota2: InterestItem;
  };
  connectTitle: string;
  connectSubtitle: string;
  ctaButtons: {
    email: string;
    phone: string;
    linkedin: string;
    discord: string;
  };
}

// English Version
export const ABOUT_PAGE_EN: AboutPageData = {
  title: 'About Me',
  subtitle: 'Get to know me beyond the code',
  journeyTitle: 'My Journey',
  journeyParagraph1: 'My passion for programming has been the driving force behind my career. What started as self-taught learning transformed into a professional journey that I\'m incredibly proud of. I taught myself programming by tackling real-world problems, experimenting with different technologies, and constantly pushing the boundaries of what I could build. This self-driven approach has instilled in me a growth mindset and an unwavering commitment to continuous learning.',
  journeyParagraph2: 'Every challenge I encounter is an opportunity to expand my skill set. Whether it\'s learning a new framework, mastering advanced architectural patterns, or exploring emerging technologies, I approach each with the same enthusiasm and dedication that got me started. This mindset has not only made me a better engineer but also a more effective team lead who understands the value of perseverance and innovation.',
  beyondCodeTitle: 'Beyond the Code',
  interests: {
    tableTennis: {
      title: '🏓 Table Tennis',
      description: 'I\'m an avid table tennis player and genuinely enjoy the sport. If you\'re interested in playing, I\'d be more than happy to challenge you! Whether you\'re a beginner or an experienced player, feel free to get in touch. It\'s a great way to unwind and connect with fellow enthusiasts.',
      contactText: 'Contact me at ',
      contactLink: 'or ',
    },
    dota2: {
      title: '🎮 DOTA 2',
      description: 'In my downtime, you\'ll often find me playing DOTA 2. I\'m always looking for teammates to join me on epic gaming sessions. Whether you want to climb the ranks, have fun casually, or just enjoy some competitive gaming, I\'m in! Connect with me on Discord and let\'s team up for some memorable matches.',
      contactText: 'Hit me up on ',
      contactLink: ' for gaming sessions!',
    },
  },
  connectTitle: 'Let\'s Connect!',
  connectSubtitle: 'Whether it\'s about code, table tennis, gaming, or just having a chat, I\'d love to hear from you.',
  ctaButtons: {
    email: '📧 Send Email',
    phone: '📱 Call/WhatsApp',
    linkedin: '💼 LinkedIn',
    discord: '💬 Discord',
  },
};

// Italian Version
export const ABOUT_PAGE_IT: AboutPageData = {
  title: 'Chi Sono',
  subtitle: 'Conosci chi sono oltre al codice',
  journeyTitle: 'Il Mio Percorso',
  journeyParagraph1: 'La mia passione per la programmazione è stata la forza trainante della mia carriera. Quello che è iniziato come un autoapprendimento si è trasformato in un percorso professionale di cui sono incredibilmente orgoglioso. Mi sono insegnato la programmazione affrontando problemi del mondo reale, sperimentando diverse tecnologie e spingendo costantemente i confini di ciò che potevo costruire. Questo approccio autodeterminato ha instillato in me una mentalità di crescita e un impegno incrollabile nell\'apprendimento continuo.',
  journeyParagraph2: 'Ogni sfida che incontro è un\'opportunità per ampliare il mio insieme di competenze. Che si tratti di imparare un nuovo framework, padroneggiare pattern architetturali avanzati o esplorare tecnologie emergenti, affronato ognuna con lo stesso entusiasmo e dedizione con cui ho iniziato. Questa mentalità non solo mi ha reso un ingegnere migliore, ma anche un team lead più efficace che comprende il valore della perseveranza e dell\'innovazione.',
  beyondCodeTitle: 'Oltre il Codice',
  interests: {
    tableTennis: {
      title: '🏓 Ping Pong',
      description: 'Sono un appassionato giocatore di ping pong e genuinamente amo questo sport. Se sei interessato a giocare, sarei più che felice di sfidare te! Che tu sia un principiante o un giocatore esperto, sentiti libero di contattarmi. È un ottimo modo per rilassarsi e connettersi con altri appassionati.',
      contactText: 'Contattami a ',
      contactLink: 'o ',
    },
    dota2: {
      title: '🎮 DOTA 2',
      description: 'Nel mio tempo libero, mi troverai spesso a giocare a DOTA 2. Sono sempre alla ricerca di compagni di squadra per partecipare a sessioni di gioco epiche. Che tu voglia salire di rango, divertirsi casualmente o semplicemente godere di giochi competitivi, sono dentro! Connettiti con me su Discord e uniamoci per partite memorabili.',
      contactText: 'Contattami su ',
      contactLink: ' per sessioni di gioco!',
    },
  },
  connectTitle: 'Connettiamoci!',
  connectSubtitle: 'Che sia di codice, ping pong, giochi o semplicemente una chiacchierata, mi piacerebbe sentirti.',
  ctaButtons: {
    email: '📧 Invia Email',
    phone: '📱 Chiama/WhatsApp',
    linkedin: '💼 LinkedIn',
    discord: '💬 Discord',
  },
};

// Get about page data based on language
export const getAboutPageData = (language: Language): AboutPageData => {
  return language === 'it' ? ABOUT_PAGE_IT : ABOUT_PAGE_EN;
};

// Legacy export for backward compatibility
export const ABOUT_PAGE = ABOUT_PAGE_EN;

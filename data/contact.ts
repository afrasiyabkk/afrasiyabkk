import { Language } from '@/lib/language';

export interface ContactPageData {
  title: string;
  subtitle: string;
  contactInfoTitle: string;
  contactInfoLabels: {
    email: string;
    phone: string;
    location: string;
    discord: string;
  };
  discordLinkText: string;
  formSectionTitle: string;
  successMessage: string;
  contactMethodOptions: {
    email: string;
    whatsapp: string;
  };
  formLabels: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  formPlaceholders: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  submitButtonText: {
    sending: string;
    email: string;
    whatsapp: string;
  };
  whatsappNote: string;
}

// English Version
export const CONTACT_PAGE_EN: ContactPageData = {
  title: 'Get in Touch',
  subtitle: 'Have a question or proposal? I\'d love to hear from you!',
  contactInfoTitle: 'Contact Information',
  contactInfoLabels: {
    email: '📧 Email',
    phone: '📱 Phone / WhatsApp',
    location: '📍 Location',
    discord: '💬 Discord',
  },
  discordLinkText: 'Join my Discord',
  formSectionTitle: 'Send me a Message',
  successMessage: '✅ Thank you! Your message has been sent. I\'ll get back to you soon!',
  contactMethodOptions: {
    email: '📧 Email',
    whatsapp: '💬 WhatsApp',
  },
  formLabels: {
    name: 'Name *',
    email: 'Email *',
    subject: 'Subject *',
    message: 'Message *',
  },
  formPlaceholders: {
    name: 'Your name',
    email: 'your@email.com',
    subject: 'What is this about?',
    message: 'Your message here...',
  },
  submitButtonText: {
    sending: 'Sending...',
    email: 'Send via Email',
    whatsapp: 'Send via WhatsApp',
  },
  whatsappNote: '💡 WhatsApp will open in a new window with your message pre-filled.',
};

// Italian Version
export const CONTACT_PAGE_IT: ContactPageData = {
  title: 'Contattami',
  subtitle: 'Hai una domanda o una proposta? Mi piacerebbe sentirti!',
  contactInfoTitle: 'Informazioni di Contatto',
  contactInfoLabels: {
    email: '📧 Email',
    phone: '📱 Telefono / WhatsApp',
    location: '📍 Posizione',
    discord: '💬 Discord',
  },
  discordLinkText: 'Unisciti al mio Discord',
  formSectionTitle: 'Inviami un Messaggio',
  successMessage: '✅ Grazie! Il tuo messaggio è stato inviato. Ti contatterò presto!',
  contactMethodOptions: {
    email: '📧 Email',
    whatsapp: '💬 WhatsApp',
  },
  formLabels: {
    name: 'Nome *',
    email: 'Email *',
    subject: 'Oggetto *',
    message: 'Messaggio *',
  },
  formPlaceholders: {
    name: 'Il tuo nome',
    email: 'tuo@email.com',
    subject: 'Di che cosa si tratta?',
    message: 'Il tuo messaggio qui...',
  },
  submitButtonText: {
    sending: 'Invio in corso...',
    email: 'Invia via Email',
    whatsapp: 'Invia via WhatsApp',
  },
  whatsappNote: '💡 WhatsApp si aprirà in una nuova finestra con il tuo messaggio pre-compilato.',
};

// Get contact page data based on language
export const getContactPageData = (language: Language): ContactPageData => {
  return language === 'it' ? CONTACT_PAGE_IT : CONTACT_PAGE_EN;
};

// Legacy export for backward compatibility
export const CONTACT_PAGE = CONTACT_PAGE_EN;

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Главная",
    url: "#hero",
  },
  {
    id: "1",
    title: "Портфолио",
    url: "#portfolio",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits_1 = [
  {
    id: "0",
    title: "Английский",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1Au71LJdtjVjc2MIPAm8cAuqfMXn8UTdZ'
  },
  {
    id: "1",
    title: "БЖД",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1L-HI9gKFbO8DHpNHZCvuxadvOzh_59sM'
  },
  {
    id: "2",
    title: "Информатика",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1adiLZSc_tpM--c21namvGOWRbCs6SS_g'
  },
  {
    id: "3",
    title: "Информационные технологии в математике",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1xJKf7JGt9gMgLqdnehfDoYA23XhY5L4N'
  },
  {
    id: "4",
    title: "История",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/10vi0SJFH5zMHl9TywOe9qVsb-Q6edE8V'
  },
  {
    id: "5",
    title: "ИТ в математике",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1Yy1a6rfflVKQOPWk8gsuHfJmsxUMFXOd'
  },
  {
    id: "7",
    title: "Курсовая работа",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1jR5VKBFVC5YV77guPWq94KhP2OvsQ8_1'
  },
  {
    id: "8",
    title: "Линейная алгебра и теория матриц",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1-KKp2nZF7uuvhe_w6AyFjCdpIVXIOMfC'
  },
  {
    id: "9",
    title: "Основы компьютерной алгебры",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1-tw8hL7tjNyodDXzIYKyGbCeSw7HK5rc'
  },
  {
    id: "11",
    title: "Практика",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/14TatpDeBETKtdN_iU6gL630q3ZLoaNA6'
  },
  {
    id: "12",
    title: "Програмирование",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1cwaAGQ63yDavbd_iLgTPLWkLBZeZLLyP'
  },
  {
    id: "13",
    title: "Физика",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1364gQFwXQqpjgwCUenpxrHMtJ0umQeR8'
  },
  {
    id: "14",
    title: "Философия",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1bmSSjPwW0upJI5QQHiJSGH1LxzpJLilS'
  },
];

export const benefits_2 = [
  {
    id: "0",
    title: "Анализ данных и основы Data science",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1ZRYm0MceRiuSIGGHOXbQR6mVGwHhLCcr'
  },
  {
    id: "1",
    title: "Английский",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1i3gXLqdLMK7m_oYJoLzL1mZ39gISuHIN'
  },
  {
    id: "3",
    title: "База данных",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1_1KiqcYMbqc04pCM92qRv3XYgHUgYIZZ'
  },
  {
    id: "4",
    title: "Вычислительная математика",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1z6IejROlvlC73fpqnvqlxHkrWdWBi7AN'
  },
  {
    id: "5",
    title: "Вычислительная техника",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1ohy0tv7FpnNMEqoIXepgk2JL5OmK4xWi'
  },
  {
    id: "10",
    title: "Курсовая работа",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1Vyz7jFQXAG0cFn9djlzALsK7znA6OVQj'
  },
  {
    id: "11",
    title: "Операционные системы",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1s1kjdtxWNQLNiTvtRI3C4vyyjs8v2qqa'
  },
  {
    id: "12",
    title: "Практика",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1_NOqh0NuMixywd9h3Zz9zVtjgUNc6Gg6'
  },
  {
    id: "13",
    title: "Програмирование",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1bfiTuqLfOh-o-7XETu9pTOg1tlydNxAl'
  },
  {
    id: "14",
    title: "Технологии компьютерного моделирования",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1InOxI5JIqc1WGSGwDcdxfWE5NMHaZf7x'
  },
  {
    id: "15",
    title: "Физика",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/180N7DLx-LAWlTS3QGRuSYmH8Ud8QLiTa'
  },
  {
    id: "16",
    title: "Физика полупроводников",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/18BPss4jR5V7WD5AcsQ3sNBxPj8vxchnt'
  },
];

export const benefits_3 = [
  {
    id: "0",
    title: "IT-менеджмент",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/17aiYJMN4XU735fg7fbM6JpFUA5tmwZLJ'
  },
  {
    id: "1",
    title: "Английский",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1t7SaxHbWqETOPnBv-VcuHSrqBAJ7-Jk-'
  },
  {
    id: "2",
    title: "Информационные технологии и системы бизнес-аналитики",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1W3mFxYQ2-o5DvDf2dBl7PKWGitVao9Kj'
  },
  {
    id: "3",
    title: "Визуализация данных и инфографика",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1xzrt_Vyc-VxdpTcdojw77u5rkkSCbH7-'
  },
  {
    id: "4",
    title: "Защита информации",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1FEVFmHrocfEtRAxwz1ULBDeNfCChKRWa'
  },
  {
    id: "5",
    title: "Информационные технологии в изучении иностранных языков",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1iEye3p_zUl8CkcgX7iKtIWVx9W60PPk8'
  },
  {
    id: "10",
    title: "Компьютерная графика",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1szGmQsXu8WunTMzMsS-v04bmeseXhyLF'
  },
  {
    id: "11",
    title: "Курсовая работа",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/19cOdKd2Aeh00t_S0wWfbCcoSetJJ7wZ4'
  },
  {
    id: "12",
    title: "Математические основы компьютерной алгебры",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1ZB2V6TbLfnMnfo7cklSTIQnt8Q13F13t'
  },
  {
    id: "13",
    title: "Основы бизнес-информатики",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1QnTXAqLEy_kKXeDfsKUzT90VlPMeTwJf'
  },
  {
    id: "14",
    title: "Основы электронного управления",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1Uz_HtdAv0xVbSSS_WKYoiIYHIjjr3bku'
  },
  {
    id: "15",
    title: "Практика",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1iGFDD3H_UvTK6qML8pj3P_14Zq9y0SPJ'
  },
  {
    id: "16",
    title: "Прикладные информационные технологии",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1819aNuD0R-i5Dlcq0Fbqlei8KJAiqBVL'
  },
  {
    id: "17",
    title: "Програмирование",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1yTMoIxFqcHMwsIcN9p6KFTpt8ejeqYsf'
  },
  {
    id: "18",
    title: "Управление программными проектами",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1ZAPQJIUgkLB130VaaKxsgNqrw5UgGAyd'
  },
  {
    id: "19",
    title: "Электротехника",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1BvAhpBd1M8719uSIga4QmWgib8fK8O5P'
  },
];

export const benefits_4 = [
  {
    id: "0",
    title: "IT-рекрутмент",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1py2vWtHWzokxaf2pbS02OoZ6l5FtDuEI'
  },
  {
    id: "1",
    title: "Английский",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1ZkVN6kbpQyH6t1Tnsc_FoOtfXdvRjzGd'
  },
  {
    id: "2",
    title: "Мировые информационные ресурсы и цифровые библиотеки",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1kId9aPxua2J4YkMOYDPJeaLLyxowWucc'
  },
  {
    id: "3",
    title: "Информационные технологии оценки персонала",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1jKX0MEaaELky8kb6k9_KgSZyl_GvVpR2'
  },
  {
    id: "4",
    title: "Курсовая работа",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1PsZc0P8EXScUXTweSEOF4fpCbnVWceDk'
  },
  {
    id: "5",
    title: "Пакеты прикладных программ для статистической обработки и анализа данных",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1kfGTrj_I4D3HQxyOxFMiQOS7hv6ZSdZi'
  },
  {
    id: "10",
    title: "Практика",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1MvFWrzBJS1yEJtvwp6u1aPDy93mFtjIl'
  },
  {
    id: "11",
    title: "Програмирование",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: 'https://drive.google.com/drive/folders/1mcAHMmW8YJS9zt0N7YvHTj7ceMjAK4O3'
  },
  {
    id: "12",
    title: "Социальные и профессиональные вопросы информатики и ИТ",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: 'https://drive.google.com/drive/folders/1KX3utYv5qMGvzbWEdlOdTdypNpIiVf5N'
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

const colors = {
  primary: {
    300: '#717CB7', // самый светлый — плейсхолдеры в формах
    400: '#48548E', // мелкий текст, лейблы
    500: '#343D68', // база — параграфы, основной текст/бренд
    700: '#262C4D', // тёмные поверхности (карточки, секции Projects/Footer)
    900: '#1F243D', // самый тёмный — хединги, максимальный контраст
  },
  secondary: {
    0: '#FFFFFF',
    50: '#F7F6FB',
  },
} as const;

export const theme = {
  colors,
  fontFamily: "'Be Vietnam Pro', sans-serif",
} as const;

export type Theme = typeof theme;

const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

const colors = {
  primary: {
    300: '#717CB7', // самый светлый — плейсхолдеры в формах
    400: '#48548E', // мелкий текст, лейблы
    500: '#343D68', // база — параграфы, основной текст/бренд
    700: '#262C4D', // тёмные поверхности (карточки, секции Projects/Footer)
    900: '#1F243D', // самый тёмный — хединги, максимальный контраст
  },
  secondary: {
    0: '#FCFCFC',
    50: '#F7F6FB',
  },
  accent: '#E84949',
} as const;

const sizes = {
  headerHeight: '80px',
  skillIcon: '40px',
  footerWaveHeight: 'calc(100vw * 70 / 1440)',
} as const;

const fontSize = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px — база
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem', // 32px
  '4xl': '2.5rem', // 40px
  '5xl': '3rem', // 48px
} as const;

const spacing = {
  none: '0px',
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
} as const;

export const theme = {
  fontFamily: "'Be Vietnam Pro', sans-serif",
  fontWeight,
  colors,
  spacing,
  sizes,
  fontSize,
} as const;

export type Theme = typeof theme;

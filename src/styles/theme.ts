const breakpoints = {
  mobile: '640px',
  tablet: '1024px',
} as const;

const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
} as const;

const font = {
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  size: {
    base: '1rem', // 16px — база
    md: '1.125rem', // 18px
    lg: '1.25rem', // 20px
  },
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
  highlight: '#0ACBBF',
} as const;

const sections = {
  header: {
    height: '83px',
    navLinks: {
      gap: '50px',
      fontSize: font.size.md,
      fontWeight: font.weight.medium,
      color: colors.primary[500],
      hoverColor: colors.accent,
    },
    zIndex: 99,
  },
  hero: {
    paddings: {
      top: '90px',
      bottom: '25px',
    },
  },
  skills: {
    paddings: {
      top: '25px',
      bottom: '70px',
    },
    pictureWidth: '500px',
    minHeight: '450px',
    icon: {
      width: '40px',
      wrapperWidth: '75px',
    },
  },
  projects: {
    paddings: {
      top: '30px',
      bottom: '35px',
    },
  },
  contactMe: {
    paddings: {
      top: '75px',
      bottom: '85px',
    },
    pictureWidth: '560px',
    form: {
      width: '610px',
      gap: '40px',
    },
  },
  footer: {
    height: '450px',
    waveHeight: '80px',
    paddings: {
      top: '180px',
    },
  },
  bgColor: {
    primary: colors.secondary[50],
    secondary: colors.primary[500],
  },
  defaults: {
    minHeight: '500px',
    titleGap: spacing.md,
    paddingY: spacing.md,
  },
} as const;

const container = {
  maxWidth: '1240px',
  paddingX: '24px',
};

const sizes = {
  skillIcon: '40px',
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

export const theme = {
  breakpoints,
  media,
  font,
  fontFamily: "'Be Vietnam Pro', sans-serif",
  fontWeight,
  colors,
  sections,
  container,
  spacing,
  sizes,
  fontSize,
} as const;

export type Theme = typeof theme;

export const media = {
  // (max-width: 599px)
  phone: '(width <= 599px)',
  // (min-width: 600px)
  tabletPortrait: '(width >= 600px)',
  // (min-width: 600px) and (max-width: 899px)
  tabletPortraitOnly: '(600px <= width <= 899px)',
  // (min-width: 900px)
  tabletLandscape: '(width >= 900px)',
  // (min-width: 900px) and (max-width: 1199px)
  tabletLandscapeOnly: '',
  // (min-width: 1200px)
  desktop: '(width >= 1200px)',
  // (min-width: 1200px) and (max-width: 1799px)
  desktopOnly: '(1200px <= width <= 1799px)',
  // (min-width: 1800px)
  bigDesktop: '(width >= 1800px)',
} as const

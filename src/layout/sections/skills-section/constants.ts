import * as icons from '@/assets/icons/dev-icons';

export const SKILLS = [
  { label: 'HTML5', icon: icons.htmlIconUrl, enlarged: false },
  { label: 'CSS3', icon: icons.cssIconUrl, enlarged: false },
  { label: 'JavaScript', icon: icons.javascriptIconUrl, enlarged: false },
  { label: 'Typescript', icon: icons.typescriptIconUrl, enlarged: false },
  { label: 'React', icon: icons.reactIconUrl, enlarged: true },
  { label: 'Redux', icon: icons.reduxIconUrl, enlarged: false },
  { label: 'Graphql', icon: icons.graphqlIconUrl, enlarged: true },
  { label: 'Docker', icon: icons.dockerIconUrl, enlarged: true },
] as const;

export type Skill = (typeof SKILLS)[number];

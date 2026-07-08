import * as icons from '@/assets/icons/dev-icons';

export const SKILLS = [
  { label: 'HTML5', icon: icons.htmlIconUrl },
  { label: 'CSS3', icon: icons.cssIconUrl },
  { label: 'JavaScript', icon: icons.javascriptIconUrl },
  { label: 'Typescript', icon: icons.typescriptIconUrl },
  { label: 'React', icon: icons.reactIconUrl },
  { label: 'Redux', icon: icons.reduxIconUrl },
  { label: 'Graphql', icon: icons.graphqlIconUrl },
  { label: 'Docker', icon: icons.dockerIconUrl },
] as const;

export type Skill = (typeof SKILLS)[number];

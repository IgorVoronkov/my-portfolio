export interface ContentIllustratedProps {
  $picture: {
    src: string;
    where: 'left' | 'right';
    width: string;
  };
  $minHeight?: string | undefined;
}

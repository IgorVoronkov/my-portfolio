export interface SectionProps {
  id?: string;
  $variant?: 'primary' | 'secondary';
  title: string;
  $padding?:
    | {
        top: string;
        bottom: string;
      }
    | undefined;
}

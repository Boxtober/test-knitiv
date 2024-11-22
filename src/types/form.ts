export interface Component {
  key: string;
  type: string;
  label: string;
  options?: { items: any[] };
  validation?: string;
  required?: boolean;
  disabled?: boolean;
  components?: Component[];
}
export interface Option {
  value: string;
  label: string;
}
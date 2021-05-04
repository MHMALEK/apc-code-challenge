export interface OptionItem {
  value: string;
  label: string;
}
export interface BaseSelectProps {
  onChange?: (selectedOption: OptionItem | null) => void;
  defaultValue?: OptionItem;
  options?: OptionItem[];
  [x: string]: any;
}

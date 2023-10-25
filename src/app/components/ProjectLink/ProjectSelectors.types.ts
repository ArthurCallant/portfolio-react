export interface ProjectSelectorsProps {
  items: ProjectSelectorItem[];
  onClick: (item: ProjectSelectorItem) => void;
}

export interface ProjectSelectorItem {
  value: string;
  active?: boolean;
}

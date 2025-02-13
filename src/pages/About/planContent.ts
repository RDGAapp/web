export enum PlanContentType {
  Junior = 'Юниор',
  Base = 'Базовый',
}

export interface IPlanContent {
  charmType: string;
}

export const PlanContent: Record<PlanContentType, IPlanContent> = {
  [PlanContentType.Junior]: { charmType: 'has' },
  [PlanContentType.Base]: { charmType: 'has' },
};

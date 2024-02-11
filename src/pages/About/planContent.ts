export enum PlanContentType {
  Junior = 'Юниор',
  Base = 'Базовый',
  VIP = 'VIP',
}

export interface IPlanContent {
  charmType: string;
}

export const PlanContent: Record<PlanContentType, IPlanContent> = {
  [PlanContentType.Junior]: {
    charmType: 'Белый',
  },
  [PlanContentType.Base]: {
    charmType: 'Синий',
  },
  [PlanContentType.VIP]: {
    charmType: 'Красный (из ювелирной бронзы)',
  },
};

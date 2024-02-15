export enum PlanContentType {
  Junior = 'Юниор',
  Base = 'Базовый',
  VIP = 'VIP',
}

export interface IPlanContent {
  charmType: string;
  bronzeCharm: boolean;
}

export const PlanContent: Record<PlanContentType, IPlanContent> = {
  [PlanContentType.Junior]: {
    charmType: 'Белый',
    bronzeCharm: false,
  },
  [PlanContentType.Base]: {
    charmType: 'Синий',
    bronzeCharm: false,
  },
  [PlanContentType.VIP]: {
    charmType: 'Красный',
    bronzeCharm: true,
  },
};

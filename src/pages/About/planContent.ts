export enum PlanContentType {
  Junior = 'Юниор',
  Newbie = 'Новичок',
  Base = 'Базовый',
  Sponsor = 'Спонсор',
  Maecenas = 'Меценат',
}

export interface IPlanContent {
  markerType: string;
  buddy: boolean;
  individualUniform: string;
  discsDiscount: boolean;
}

export const PlanContent: Record<PlanContentType, IPlanContent> = {
  [PlanContentType.Junior]: {
    markerType: 'Белый',
    buddy: true,
    individualUniform: '',
    discsDiscount: false,
  },
  [PlanContentType.Newbie]: {
    markerType: 'Белый',
    buddy: true,
    individualUniform: '',
    discsDiscount: true,
  },
  [PlanContentType.Base]: {
    markerType: 'Белый',
    buddy: false,
    individualUniform: '',
    discsDiscount: true,
  },
  [PlanContentType.Sponsor]: {
    markerType: 'Синий',
    buddy: true,
    individualUniform: 'Вариант 1',
    discsDiscount: true,
  },
  [PlanContentType.Maecenas]: {
    markerType: 'Красный',
    buddy: true,
    individualUniform: 'Вариант 2',
    discsDiscount: true,
  },
};

export enum PlanContentType {
  Base = 'Базовый',
  Active = 'Активный',
  Sponsor = 'Спонсор',
  Maecenas = 'Меценат',
  Newbie = 'Новичок',
}

export interface IPlanContent {
  canChooseNumber: boolean;
  federalTournamentsDiscount: {
    all: boolean;
    discount: null | number;
  };
  souvenir: string;
  prodiscusDiscount: {
    discsNumber: number;
    discount: null | number;
  };
  rdgaRating: boolean;
  rdgaParticipation: boolean;
  accessToRdgaMerch: boolean;
  accessToRdgaReport: boolean;
}

export const PlanContent: Record<PlanContentType, IPlanContent> = {
  [PlanContentType.Base]: {
    canChooseNumber: false,
    federalTournamentsDiscount: {
      all: false,
      discount: null,
    },
    souvenir: 'Сувенир №1',
    prodiscusDiscount: {
      discsNumber: 0,
      discount: null,
    },
    rdgaRating: true,
    rdgaParticipation: true,
    accessToRdgaMerch: true,
    accessToRdgaReport: true,
  },
  [PlanContentType.Active]: {
    canChooseNumber: true,
    federalTournamentsDiscount: {
      all: false,
      discount: 500,
    },
    souvenir: 'Сувенир №2',
    prodiscusDiscount: {
      discsNumber: 1,
      discount: 50,
    },
    rdgaRating: true,
    rdgaParticipation: true,
    accessToRdgaMerch: true,
    accessToRdgaReport: true,
  },
  [PlanContentType.Sponsor]: {
    canChooseNumber: true,
    federalTournamentsDiscount: {
      all: true,
      discount: 500,
    },
    souvenir: 'Сувенир №2',
    prodiscusDiscount: {
      discsNumber: 2,
      discount: 50,
    },
    rdgaRating: true,
    rdgaParticipation: true,
    accessToRdgaMerch: true,
    accessToRdgaReport: true,
  },
  [PlanContentType.Maecenas]: {
    canChooseNumber: true,
    federalTournamentsDiscount: {
      all: true,
      discount: 500,
    },
    souvenir: 'Сувенир №2',
    prodiscusDiscount: {
      discsNumber: 3,
      discount: 50,
    },
    rdgaRating: true,
    rdgaParticipation: true,
    accessToRdgaMerch: true,
    accessToRdgaReport: true,
  },
  [PlanContentType.Newbie]: {
    canChooseNumber: true,
    federalTournamentsDiscount: {
      all: false,
      discount: null,
    },
    souvenir: 'Сувенир №1',
    prodiscusDiscount: {
      discsNumber: 2,
      discount: 100,
    },
    rdgaRating: true,
    rdgaParticipation: true,
    accessToRdgaMerch: true,
    accessToRdgaReport: true,
  },
};

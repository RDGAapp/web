export interface ITelegramResponse {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name?: string;
  photo_url?: string;
  username?: string;
}

export interface ITelegramOptions {
  bot_id: string;
  request_access?: string;
  lang?: string;
}

export interface ITelegram {
  // 👇️ not sure about getWidgetInfo's callback arguments
  getWidgetInfo: (el_or_id: HTMLElement | string, callback: () => void) => void;
  setWidgetOptions: (
    options: ITelegramOptions,
    el_or_id: HTMLElement | string,
  ) => void;
  Login: {
    // 👇️ init checks for base64 'tgAuthResult' in URL, though redirect after login has 'hash' instead, so ????
    init: (
      options: ITelegramOptions,
      auth_callback: (auth_result: ITelegramResponse) => void,
    ) => void;
    open: (callback: (authData: ITelegramResponse) => void) => void;
    auth: (
      options: ITelegramOptions,
      callback: (authData: ITelegramResponse) => void,
    ) => void;
    widgetsOrigin: string;
  };
}

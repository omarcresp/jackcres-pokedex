import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { common } from 'src/environments/commons';

const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, common.i18nPath, '.json');

export const translateConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient],
  }
};

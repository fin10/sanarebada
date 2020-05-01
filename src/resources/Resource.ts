import stringResourceDefault from './string-default.json';

interface resourceMap {
  [key:string]: {
    [key:string]: string
  }
}

const stringResource: resourceMap = {
  default: stringResourceDefault
};

export default {
  getString: (key: string, locale = 'default'): string => {
    const resMap = stringResource[locale] || stringResource.default;
    return resMap[key];
  }
};

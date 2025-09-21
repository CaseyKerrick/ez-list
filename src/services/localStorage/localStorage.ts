

const LocalStorage = {

  getSavedValue: (item: string) => {
    const current = localStorage.getItem(item);

    if (current === null) {
      localStorage.setItem(item, '');
      return '';
    } else {
      return current;
    }
  },
  setSavedValue: (item: string, value: any) => {
    localStorage.setItem(item, value);
  },
  getToggle: (item: string) => {
    const current = localStorage.getItem(item);

    if (current === null) {
      localStorage.setItem(item, 'true');
      return true;
    } else {
      return current === 'true' ? true : false;
    }
  },
  setToggle: (item: string, value: boolean) => {
    localStorage.setItem(item, value ? 'true' : 'false');
  },
};

export default LocalStorage;

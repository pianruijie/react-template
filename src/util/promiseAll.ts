const all = (list: any[]) => {
  const result = [];
  const count = list.length;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < count; i++) {
      if (list[i].then) {
        list[i]
          .then((res: any) => {
            result[i] = res;
          })
          .catch((err: any) => reject(err));
      } else {
        result[i] = list[i];
      }
    }
  });
};

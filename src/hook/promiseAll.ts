const all = (list: any[]) => {
    let result = [];
    let count = list.length;

    return new Promise((resolve, reject)=>{
        for (let i = 0; i<count; i++) {
            if (list[i].then) {
                list[i].then((res)=> {
                    result[i] = res;
                }).catch(err => reject(err))
            } else {}
        }
    });
}
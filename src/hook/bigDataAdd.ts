let result = 0;
let flag = 0;
let count = Math.pow(10, 9);

const loop = () => {
  while(flag<1000) {
    flag++;
    result += count;
    count--;
  }
  flag = 0;
  if (count > 0) {
    setTimeout(loop, 1);
  }
}
loop();
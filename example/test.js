let noVar = 'no var declaration';

const noParamReassign = (origin) => {
  origin = 1;
};

for (let i = 0; i < 10; i++) {
  console.log(i);
}

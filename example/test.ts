import { TYPE } from './env-type';

const rightArrayType: string[] = ['right', 'array', 'type'];
const errorArrayType: Array<string> = ['error', 'array', 'type'];

interface NoEmptyInterface {}

interface MethodSignatureStyle {
  errorPropertyFunc(): [];
  rightPropertyFunc: () => [];
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

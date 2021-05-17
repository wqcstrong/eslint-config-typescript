import { TYPE } from './env-type'

const rightArrayType: string[] = ['right', 'array', 'type']
const errorArrayType: Array<string> = ['error', 'array', 'type']

interface NoEmptyInterface {

}

interface MethodSignatureStyle {
  errorPropertyFunc (): [];
  rightPropertyFunc: () => [];
}


import { SExp } from './ide-protocol'

export type ProtocolVersion = {
    type: 'protocol-version'
    major: number
    minor: number
}

export type WithCommandId = { id: number }

export type Premise = {
    name: string
    type: string
    metadata: any
}

export type Conclusion = {
    type: string
    highlightingInformation: Array<any>
}

export type Hole = {
    name: string
    premises: Array<Premise>
    conclusions: Array<Conclusion>
}

export type Success = { type: 'success' }
export type Error = { type: 'error'; message: string }
export type Result = Success | Error
export type Output = { type: 'output'; result: Result } & WithCommandId
export type Return = { type: 'return'; result: Result } & WithCommandId

export type SetPrompt = { type: 'set-prompt'; prompt: string } & WithCommandId

export type UnknownAnswer = { type: 'unknown'; msg: string; expr: SExp }

export type Answer =
    | ProtocolVersion
    | Output
    | Return
    | SetPrompt
    | UnknownAnswer

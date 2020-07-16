export enum Action {
  INCREASE,
  REDUCE,
}
export interface ActionType {
  type: Action
  data: Object
}

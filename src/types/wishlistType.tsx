export interface WishlistStateType {
  showText: boolean;
  textBackground: string;
  defaultText: string;
}

export type WishlistActionType = { type: "ADD" } | { type: "NOACTION" } | { type: "REMOVE" } | { type: "CLOSE" };
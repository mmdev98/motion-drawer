import { ReactNode, Ref } from "react";

export type ConditionRenderProps = {
  ref?: Ref<HTMLElement>;
  if: boolean;
  then: (props: any & { children?: any }) => ReactNode;
  else: (props: any & { children?: any }) => ReactNode;
  children?: any;
};

export function ConditionRender(props: ConditionRenderProps) {
  const {
    ref,
    if: ifProp,
    then: thenProp,
    else: elseProp,
    ...otherProps
  } = props;
  return ifProp
    ? thenProp({ ...otherProps, ref })
    : elseProp({ ...otherProps, ref });
}

import { ComponentType } from "react";

declare namespace React {
  function lazy<T extends ComponentType<any>>(
    factory: () => Promise<{ default: T }>,
  ): T;
}
export type Args<Props> = {
  [Property in keyof Props]: Props[Property];
};

interface radioOrSelect {
  variant: "radio-or-select";
  options?: string[];
  control: {
    type: "radio" | "select";
  };
}

interface Boolean {
  variant: "boolean";
  control: {
    type: "boolean";
  };
}

interface NumberOrRange {
  variant: "number-or-range";
  control: {
    type: "range" | "number";
    min?: number;
    max?: number;
    step?: number;
  };
}

interface JsonObject {
  variant: "json-object";
  control: {
    type: "object";
  };
}

interface JsonArray {
  variant: "file-array";
  control: {
    type: "file";
  };
}

interface Enum {
  variant: "enum-or-literalUnion";
  control: {
    type:
      | "radio"
      | "inline-radio"
      | "check"
      | "inline-check"
      | "select"
      | "multi-select";
  };
}

interface String {
  variant: "string";
  control: {
    type: "text" | "color" | "date";
  };
  presetColors?: Array<
    | string
    | {
        color: string;
        title: string;
      }
  >;
}

export type ArgType<Type> = Partial<
  {
    [Property in keyof Type]:
      | radioOrSelect
      | Boolean
      | NumberOrRange
      | JsonObject
      | JsonArray
      | Enum
      | String;
  }
>;

export {};

type profile = {
  name: string;
  age: number;
  zipCode: number;
};

type PartialType = Partial<profile>;
type requiredType = Required<profile>;

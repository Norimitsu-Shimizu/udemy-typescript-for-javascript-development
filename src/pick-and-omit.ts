export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type MySmallProfile = MyOmit<DetailedProfile, 'height'>;
// ↓
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, 'height'>>;
// type MySmallProfile = MyOmit<DetailedProfile>;
// ↓
// type MyOmit = Pick<
//   DetailedProfile,
//   Exclude<'name' | 'weight' | 'height', 'height'>
// >;
// type MySmallProfile = MyOmit;
// ↓
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;


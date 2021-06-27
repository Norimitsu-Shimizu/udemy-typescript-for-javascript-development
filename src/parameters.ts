export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age })
}

debugProfile('Nori', 100);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 72];

debugProfile(...profile)

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

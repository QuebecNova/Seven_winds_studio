import { IData, ISubData, IItemCount, IItem } from "../types/IData";

export default function randomData(): IData[] {
  function t(t: number, e: number): number {
    return t > e || t < 0 ? 0 : Math.floor(Math.random() * (e - t + 1) + t);
  }

  function e(): string {
    return Math.random().toString(36).slice(-5);
  }

  const n: IData[] = [];

  for (let o = 0; o < t(1, 10); o++) {
    const o: ISubData[] = [];

    for (let n = 0; n < t(1, 10); n++) {
      const n: IItem[] = [];

      for (let o = 0; o < t(1, 10); o++) {
        const o: IItemCount[] = [];

        for (let n = 0; n < t(5, 15); n++) {
          o.push({ title: e(), number: t(1, 1e7) });
        }

        n.push({
          title: e(),
          subTitle: e(),
          dateStart: Date.now(),
          dateEnd: Date.now() + 31e9 + 6e8,
          data: o,
        });
      }
      o.push({ title: e(), items: n });
    }
    n.push({ title: e(), items: o });
  }

  return n;
}

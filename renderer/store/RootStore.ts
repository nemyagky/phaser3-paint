import {types} from "mobx-state-tree";
import {useScene} from "../hooks/useScene";


const Dot = types.model({
  x: types.number,
  y: types.number
})

export const RootStore = types.model({
  dots: types.array(Dot)
}).actions((self) => {
  return {
    addDot(x: number, y: number) {
      // @ts-ignore
      self.dots.push({x, y})
    },
    resetDots() {
      self.dots.clear();
    },
    resetCanvas() {
      const scene = useScene();

      scene.children.removeAll();
    }
  }
});

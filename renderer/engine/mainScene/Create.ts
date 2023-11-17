import {useScene} from "../../hooks/useScene";
import {useStore} from "../../hooks/useStore";



export const create = () => {
  const scene = useScene();
  const store = useStore();


  scene.input.on('pointermove', pointer => {
    if (pointer.isDown) {
      scene.add.line(
        pointer.position.x,
        pointer.position.y,

        0, 0,

        pointer.prevPosition.x - pointer.position.x,
        pointer.prevPosition.y - pointer.position.y,
        0x6666ff
      ).setOrigin(0, 0);


      store.addDot(pointer.x, pointer.y);
    }
  });
}
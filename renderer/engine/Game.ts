import Phaser from "phaser";
import {MainScene} from "./mainScene/MainScene";

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  scene: MainScene,
  width: window.innerWidth,
  height: window.innerHeight,
};


export const initGame = () => {
  new Phaser.Game(config);
}


import {RootStore} from "../store/RootStore";


let globalStore: RootStore = RootStore.create();

export const useStore = () => {
  return globalStore;
}

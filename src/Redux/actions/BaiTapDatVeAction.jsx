import { DAT_GHE } from '../types/BaiTapDatGheType';
import { HUY_GHE } from '../types/BaiTapDatGheType';

export const datGheAction = (ghe) => {
  return {
    // import tên type vào để quản lí
    type: DAT_GHE,
    ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};

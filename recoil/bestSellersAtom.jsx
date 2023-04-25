const { atom } = require("recoil");

const bestSellersAtom = atom({
    key: 'bestSellersAtom',
    default: {},
})

export default bestSellersAtom;
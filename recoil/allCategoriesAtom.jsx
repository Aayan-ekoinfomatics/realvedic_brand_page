const { atom } = require("recoil");

const allCategoriesAtom = atom({
    key: 'allCategoriesAtom',
    default: [],
})

export default allCategoriesAtom;
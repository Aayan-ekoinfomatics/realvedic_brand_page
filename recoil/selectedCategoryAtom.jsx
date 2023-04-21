const { atom } = require("recoil");

const selectedCategoryAtom = atom({
    key: 'selectedCategoryAtom',
    default: {},
})

export default selectedCategoryAtom;
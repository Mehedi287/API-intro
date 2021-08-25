const palyer = { name: 'hasan', id: 09, phone: 098090, ft: 'kuddus' };
console.log(palyer);
const singy = JSON.stringify(palyer);
console.log(singy);
const shop = {
    name: 'motu',
    product: 'shomosa',
    bake: false,
    anotherProudct: ['puri', 'singra', 'laddu']
};
const motiSing = JSON.stringify(shop);
console.log(motiSing);
const converToObjact = JSON.parse(motiSing);
console.log(converToObjact);

export default str => str.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');


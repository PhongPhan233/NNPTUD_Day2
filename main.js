function Product(id, name, prce, quantity, category,isAvailable ) {
    this.id = id;
    this.name = name;
    this.price = prce;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
const products = [
    new Product(1, "Laptop ASUS", 1442500, 10, "Điện tử", true),
    new Product(2, "IP 15", 25550000, 0, "Điện tử", false),
    new Product(3, "Tablet", 12000000, 5, "Accessories", true),
    new Product(4, "Headphones", 30000000, 15, "Phụ kiện", true),
    
];

const khoitaoMang = products.map(p => ({ name: p.name, price: p.price }));
const inStock = products.filter(p => p.quantity > 0);
const hasExpensiveProduct = products.some(p => p.price > 30000000);
const allAccAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Tổng giá trị tồn kho:", totalInventoryValue);
console.log("Danh sách sản phẩm");
for (const p of products) {
    let status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}
console.log("\nThuộc tính của sản phẩm đầu tiên");
const firstP = products[0];
for (const key in firstP) {
    
    if (typeof firstP[key] !== 'function') {
        console.log(`${key}: ${firstP[key]}`);
    }
}
const availableAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("\nTên SP đang bán và còn hàng ");
console.log(availableAndInStockNames);
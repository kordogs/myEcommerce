import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <div className="product mx-[70px] lg:flex md:grid md:grid-cols-3 gap-5 mt-4">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem className="lg:block md:hidden" />
    </div>
  );
}

export default function ProductItem() {
  return (
    <>
      <div className="card border border-black">
        <img
          className="h-80 w-80 rounded-t-2xl"
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9989cd60-470b-4c37-b61c-d94a019819ce/freak-4-basketball-shoes-zmXv3D.png"
        />
        <div className="card-body p-2">
          <div className="font-bold ms-2">Product Name</div>
          <div className="price-sold flex justify-between px-2">
            <div>Price</div>
            <div>Sold</div>
          </div>
        </div>
      </div>
    </>
  );
}

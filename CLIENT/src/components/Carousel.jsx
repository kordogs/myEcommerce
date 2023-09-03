export function Carousel() {
  return (
    <div className="carousel lg:w-[660px] lg:h-[300px] md:h-[300px] md:w-[660px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://www.marketing91.com/wp-content/uploads/2020/06/COKE-Advertising-Example-Share-a-Coke-Campaign.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://static-cse.canva.com/blob/571368/advertisement161.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://www.techpluto.com/wp-content/uploads/2021/10/Loreal_advertisement-examples-1024x616.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

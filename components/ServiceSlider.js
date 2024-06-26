import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "I specialize in turning concepts into functional and user-friendly solutions.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "I breathe life into ideas, creating memorable experiences that resonate with your audience.",
  },
  {
    icon: <RxRocket />,
    title: "Email Marketing",
    description: "As a mailer, I craft impactful campaigns that drive engagement and conversions.",
  },
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "I craft cohesive narratives that resonate with your audience.",
  },

];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4"> {item.icon} </div>
              <div>
                <div> {item.title} </div>
                <p> {item.description} </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

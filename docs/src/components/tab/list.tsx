import { TabList as HeadlessTabList, TabListProps } from "@headlessui/react";
import { Swiper, SwiperClass } from "swiper/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";
import { useTabContext } from "./context";
import { cva } from "cva";

const list = cva({
  base: "flex justify-start overflow-hidden",
  variants: {
    variant: {
      underline: "border-b",
      highlight: "bg-bg rounded-lg p-1 border",
      none: ""
    }
  }
});

type Props = TabListProps<"div"> & {
  ref?: React.Ref<HTMLDivElement>;
};

export function List(props: Props) {
  const { className, children, ...otherProps } = props;
  const { selectedIndex, variant } = useTabContext();
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(selectedIndex);
  }, [selectedIndex]);

  return (
    <HeadlessTabList
      className={(bag) =>
        cn(
          list({
            variant
          }),
          typeof className === "function" ? className(bag) : className
        )
      }
      {...otherProps}
    >
      {(bag) => (
        <Swiper
          initialSlide={selectedIndex}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onResize={(swiper) => swiper.slideTo(selectedIndex)}
          slidesPerView="auto"
          centeredSlides
          centeredSlidesBounds
          loop={false}
          className={cn("!m-0 !max-w-full !overflow-visible")}
        >
          {typeof children === "function" ? children(bag) : children}
        </Swiper>
      )}
    </HeadlessTabList>
  );
}

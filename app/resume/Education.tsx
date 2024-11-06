import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Courses() {
  return (
    <TabsContent value="Education">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 pb-10 ">
        <h1 className="text-3xl font-bold">My Education</h1>
        <p className=" text-white/60">
          My university is Modern Academy major Computer Science, which helped me learn
          programming languages, problem-solving skills, and organizing my
          thoughts. However, as a web and mobile developer, I have relied
          heavily on self-learning and online courses.
        </p>
      </div>
      <ScrollArea>
        <div className="h-[400px] md:h-[35vh] grid sm:grid-cols-2 gap-5">

        </div>
      </ScrollArea>
    </TabsContent>
  );
}

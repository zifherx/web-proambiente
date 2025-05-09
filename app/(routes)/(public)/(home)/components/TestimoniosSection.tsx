import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TestimoniosData } from "@/data";
import { Star } from "lucide-react";

export function TestimoniosSection() {
  return <section className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4">
      <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonios de clientes satisfechos con nuestros servicios
            </p>
          </div>
      </FadeInWhenVisible>

      <Carousel className="w-full">
        <CarouselContent>
          {
            TestimoniosData.map(({id, stars, testimonial, author, job, avatar}) => (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-[300px] hover:border hover:border-blueAmbiente hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-0.5">
                          {
                            Array.from({length: 5},(_, index) => (
                              <Star key={index} className={`h-5 w-5 ${index < stars ? 'fill-current text-yellow-500' : 'text-gray-300'}`}/>
                            ))
                          }
                        </div>
                        <p className="text-muted-foreground">{testimonial}</p>
                        <div className="flex items-center gap-4 pt-4 border-t">
                            <Avatar className="text-blueAmbiente w-12 h-12">
                              <AvatarImage src={avatar}/>
                              <AvatarFallback>{author}</AvatarFallback>
                            </Avatar>
                          <div>
                            <p className="font-semibold">{author}</p>
                            <p className="text-sm text-muted-foreground">{job}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ) )
          }
        </CarouselContent>
        <div className="hidden md:flex md:justify-center md:gap-2 md:mt-6">
          <CarouselPrevious/>
          <CarouselNext/>
        </div>
      </Carousel>
    </div>
  </section>;
}

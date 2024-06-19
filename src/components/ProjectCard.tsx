import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { useIsVisible } from '@/hooks/useIsVisible';
import { useRef } from 'react';
import { GlowCapture, Glow } from '@codaworks/react-glow';

type Props = {
  project: {
    id: string;
    name: string;
    image: string;
    tagline: string;
    technologies: string[];
    link: string;
    github: string;
  };
};

export default function ProjectCard({ project }: Props) {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref1);

  return (
    <Card
      ref={ref1}
      className={`w-full bg-background font-primary text-primary ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in`}
    >
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              className='h-[300px] w-full rounded-t-md object-cover'
              src={project.image}
            ></img>
          </CarouselItem>
          <CarouselItem>
            <img
              className='h-[300px] w-full rounded-t-md object-cover'
              src={project.image}
            ></img>
          </CarouselItem>
          <CarouselItem>
            <img
              className='h-[300px] w-full rounded-t-md object-cover'
              src={project.image}
            ></img>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <GlowCapture>
        <Glow>
          <div className='glow:bg-accent/20'>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.tagline}</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-1'>
              {project.technologies.map((tech) => (
                <Badge variant='outline'>{tech}</Badge>
              ))}
            </CardContent>
            <CardFooter>
              <p>{project.link}</p>
            </CardFooter>
          </div>
        </Glow>
      </GlowCapture>
    </Card>
  );
}

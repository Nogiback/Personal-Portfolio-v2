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
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { useIsVisible } from '@/hooks/useIsVisible';
import { useRef } from 'react';
import { GlowCapture, Glow } from '@codaworks/react-glow';
import { Eye, Github } from 'lucide-react';

type Props = {
  project: {
    id: string;
    name: string;
    images: string[];
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
    <GlowCapture>
      <Glow>
        <Card
          ref={ref1}
          className={`w-full bg-background font-primary text-primary glow:border-accent/50 glow:bg-accent/10 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in`}
        >
          <Carousel className='z-10'>
            <CarouselContent>
              {project.images.map((image) => (
                <Dialog>
                  <DialogTrigger asChild>
                    <CarouselItem key={image}>
                      <img
                        className='h-[300px] w-full rounded-t-md object-cover object-top'
                        src={image}
                      ></img>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className='flex w-full items-center'>
                    <img
                      className='h-full w-full rounded-t-md object-cover'
                      src={image}
                    ></img>
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.tagline}</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-1'>
            {project.technologies.map((tech) => (
              <Badge key={tech} variant='outline'>
                {tech}
              </Badge>
            ))}
          </CardContent>
          <CardFooter className='flex gap-2'>
            <Button
              asChild
              variant='outline'
              size='sm'
              className='flex gap-2 glow:border-accent/30 glow:bg-accent/5'
            >
              <a href={project.link} target='_blank'>
                <Eye /> Live
              </a>
            </Button>
            {project.github ? (
              <Button
                asChild
                variant='outline'
                size='sm'
                className='flex gap-2 glow:border-accent/30 glow:bg-accent/5'
              >
                <a href={project.github} target='_blank'>
                  <Github size={20} /> Github
                </a>
              </Button>
            ) : null}
          </CardFooter>
        </Card>
      </Glow>
    </GlowCapture>
  );
}

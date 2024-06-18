import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useIsVisible } from '@/hooks/useIsVisible';
import { useRef } from 'react';

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
      <img
        className='h-[300px] w-full rounded-t-lg object-cover'
        src={project.image}
      ></img>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.tagline}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.technologies}</p>
      </CardContent>
      <CardFooter>
        <p>{project.link}</p>
      </CardFooter>
    </Card>
  );
}

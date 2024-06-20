'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { toast } from 'sonner';
import { useState } from 'react';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must contain at least 2 characters' })
    .max(50, { message: 'Name must not be longer than 50 characters' }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, { message: 'Message must contain at least 1 character' })
    .max(250, { message: 'Message must not be longer than 250 characters' }),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
    const rawFormData = {
      ...values,
      access_key: import.meta.env.VITE_FORM_API_KEY,
    };

    const json = JSON.stringify(rawFormData);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });
    const result = await response.json();
    if (result.success === true) {
      toast.success('Message successfully sent!');
      setIsSubmitted(false);
    } else {
      toast.error('Oops! Something went wrong!');
      setIsSubmitted(false);
    }
  }

  return (
    <GlowCapture>
      <Glow>
        <Card className='w-[650px] p-8 font-primary glow:border-accent/20 glow:bg-accent/20'>
          <CardTitle className='mb-8 flex items-center justify-center'>
            Send Me A Message!
          </CardTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <div className='flex items-center justify-between gap-8'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input
                          placeholder='Name'
                          className='w-full bg-primary text-secondary'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input
                          placeholder='Email'
                          className='bg-primary text-secondary'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder='Message'
                        className='resize-none bg-primary text-secondary'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant='outline'
                className='w-full hover:text-background'
                type='submit'
                disabled={isSubmitted}
              >
                Send
              </Button>
            </form>
          </Form>
        </Card>
      </Glow>
    </GlowCapture>
  );
}

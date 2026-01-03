"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const ContactDetail = () => {
  const formRef = useRef<any>();
  const [disable, setDisable] = useState(false);
  const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: "Enter your name",
      })
      .max(50),
    email: z.string().email({
      message: "Enter Valid Email",
    }),
    message: z.string().min(1, {
      message: "Enter a message",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setDisable(true);
    emailjs
      .sendForm("service_vtgndoh", "template_e136xd7", formRef.current, {
        publicKey: "g748fWlV2V3XKgPMc",
      })
      .then(
        () => {
          toast.success("Email successfully sent");
          form.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      )
      .finally(() => {
        setDisable(false);
      });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full items-center gap-6"
        ref={formRef}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="z-10">
              <FormLabel className="z-10 text-lg text-primary/60">
                Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your Name.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="z-10">
              <FormLabel className="z-10 text-lg text-primary/60">
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your Email.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="z-10">
              <FormLabel className="z-10 text-lg text-primary/60">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Send a Message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="z-10">
          <button
            className="p-[3px] relative rounded-full"
            type="submit"
            disabled={disable}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-full" />
            <div className="px-8 py-2  bg-primary-foreground rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
              Submit
            </div>
          </button>
        </div>
        <div className="z-10 mt-10">
          <Link
            href="mailto:pprayojan888@gmail.com"
            target="_blank"
            className="z-10"
          >
            <Button variant={"shimmer"} type="button">
              Send Mail Directly
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default ContactDetail;

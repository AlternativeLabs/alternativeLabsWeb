"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export function ContactSection() {
  const t = useTranslations("ContactPage");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("form.name.error"),
    }),
    email: z.string().email({
      message: t("form.email.error"),
    }),
    subject: z.string().min(5, {
      message: t("form.subject.error"),
    }),
    message: z.string().min(10, {
      message: t("form.message.error"),
    }),
  });

  if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS environment variables are not properly configured');
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      toast({
        title: t("form.toast.success.title"),
        description: t("form.toast.success.description"),
      });
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t("form.toast.error.title"),
        description: t("form.toast.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <div className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.name.label")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("form.name.placeholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.email.label")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("form.email.placeholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.subject.label")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("form.subject.placeholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.message.label")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("form.message.placeholder")}
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? t("form.submit.sending") : t("form.submit.default")}
                </Button>
              </form>
            </Form>
          </div>
        </Card>
      </div>
    </section>
  );
} 
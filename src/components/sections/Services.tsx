import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("ServicesPage");

  const services = [
    {
      title: t("services.rapidMvp.title"),
      description: t("services.rapidMvp.description"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-12 h-12 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: t("services.automation.title"),
      description: t("services.automation.description"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-12 h-12 text-purple-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: t("services.blockchain.title"),
      description: t("services.blockchain.description"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-12 h-12 text-orange-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: t("services.innovationAi.title"),
      description: t("services.innovationAi.description"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-12 h-12 text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("title")}
          </h2>
          <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {t("subtitle")}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-muted/30 w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex items-center text-primary">
                  <span className="text-sm font-medium">{t("services.learnMore")}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 
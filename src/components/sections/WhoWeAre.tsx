import { Card } from "@/components/ui/card";

export function WhoWeAreSection() {
  const teamHighlights = [
    {
      title: "Global Talent",
      description: "A diverse team spanning Ecuador, Brazil, and Costa Rica, bringing unique perspectives to every project.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-10 h-10 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Cutting-Edge Stack",
      description: "Leveraging StarkNet, AI, and blockchain technology to build the next generation of decentralized applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-10 h-10 text-primary"
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
      title: "Innovation Focus",
      description: "Dedicated to pushing boundaries in blockchain, AI, and cloud computing to solve real-world challenges.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-10 h-10 text-primary"
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
    <section id="who-we-are" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pioneering the Future of Technology
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                We are a multidisciplinary team of innovators, developers, and visionaries from across Latin America, united by our passion for breakthrough technology and exceptional software development.
              </p>
              <p className="text-lg text-muted-foreground">
                Based in Ecuador, Brazil, and Costa Rica, we bring together diverse perspectives and expertise to create solutions that push the boundaries of what&apos;s possible with emerging technologies like StarkNet, blockchain, and artificial intelligence.
              </p>
              <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Join us in building the next generation of transformative digital solutions.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6">
            {teamHighlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="p-6 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-muted/30 h-fit">
                    {highlight.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
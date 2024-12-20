import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-accent">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-left animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data Insights That Drive Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Data Analyst & Strategy Consultant helping businesses make data-driven decisions
            </p>
            <div className="flex gap-4">
              <Button size="lg">View Projects</Button>
              <Button variant="outline" size="lg">Contact Me</Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
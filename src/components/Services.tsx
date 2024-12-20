import { BarChart3, Brain, PieChart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Data Analysis",
    description: "Transform raw data into actionable insights through comprehensive analysis",
    icon: BarChart3,
  },
  {
    title: "Business Intelligence",
    description: "Create powerful dashboards and reports to track KPIs and metrics",
    icon: PieChart,
  },
  {
    title: "Strategy Consulting",
    description: "Develop data-driven strategies to optimize business performance",
    icon: Brain,
  },
  {
    title: "Growth Analytics",
    description: "Identify growth opportunities through advanced analytics",
    icon: TrendingUp,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
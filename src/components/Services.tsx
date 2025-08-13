import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Target, 
  MessageSquare, 
  BarChart3,
  Zap,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Social Media Strategy",
      description: "Comprehensive strategies tailored to your brand's goals, audience, and industry dynamics for maximum impact.",
      features: ["Platform optimization", "Content planning", "Competitor analysis"]
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description: "Data-driven ad campaigns across all major platforms with advanced targeting and optimization techniques.",
      features: ["Facebook & Instagram Ads", "LinkedIn campaigns", "TikTok advertising"]
    },
    {
      icon: MessageSquare,
      title: "Content Creation",
      description: "Engaging, brand-aligned content that resonates with your audience and drives meaningful interactions.",
      features: ["Visual storytelling", "Video production", "Copywriting"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive performance tracking and actionable insights to continuously optimize your social presence.",
      features: ["Performance reports", "ROI tracking", "Growth metrics"]
    },
    {
      icon: Zap,
      title: "Influencer Marketing",
      description: "Strategic partnerships with relevant influencers to expand your reach and build authentic connections.",
      features: ["Influencer vetting", "Campaign management", "Performance tracking"]
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Building and nurturing engaged communities around your brand with authentic, responsive interactions.",
      features: ["24/7 monitoring", "Engagement strategy", "Crisis management"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive social media solutions designed to elevate your brand and drive measurable growth across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
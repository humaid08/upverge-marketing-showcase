import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Award-Winning Expertise",
      description: "Recognized industry leaders with proven track records of success."
    },
    {
      icon: Clock,
      title: "Real-Time Results",
      description: "Fast-tracked growth with agile strategies and quick implementation."
    },
    {
      icon: Shield,
      title: "Data-Driven Security",
      description: "Secure, compliant practices with transparent reporting and analytics."
    }
  ];

  const achievements = [
    "5+ Years of Social Media Excellence",
    "500+ Successful Brand Transformations",
    "Expert Team of Certified Strategists",
    "Multi-Platform Campaign Management",
    "24/7 Support & Community Monitoring"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Upverge</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just another social media agency. We're your strategic partners in building authentic digital communities that drive real business growth. Our data-driven approach combined with creative excellence sets us apart in the competitive digital landscape.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower brands with innovative social media strategies that create lasting connections, drive engagement, and deliver measurable ROI in an ever-evolving digital world.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="animate-fade-in-up">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="service-card group" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
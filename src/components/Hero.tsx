import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Social Media Marketing" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Amplify Your
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Social Presence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Transform your brand's digital footprint with cutting-edge social media strategies that drive engagement, build communities, and deliver measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-hero group">
                Start Your Growth Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Brands Elevated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">2M+</div>
                <div className="text-sm text-muted-foreground">Followers Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">150%</div>
                <div className="text-sm text-muted-foreground">Avg. Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-primary/5 rounded-full animate-float delay-1000 opacity-40"></div>
    </section>
  );
};

export default Hero;
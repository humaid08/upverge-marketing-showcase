import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary-glow to-primary p-1 animate-glow-pulse">
          <div className="bg-background rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full mb-6 animate-float">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Ready to
                <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Dominate Social?
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Join hundreds of successful brands who've transformed their digital presence with Upverge. 
                Let's create a social media strategy that drives real results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
                <Button className="btn-hero group text-lg px-8 py-4">
                  Start Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  No commitment required • Free strategy session
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">14-Day</div>
                    <div className="text-sm text-muted-foreground">Free Trial</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">No Setup</div>
                    <div className="text-sm text-muted-foreground">Fees</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">Cancel</div>
                    <div className="text-sm text-muted-foreground">Anytime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
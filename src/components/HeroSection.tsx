import { ArrowRight, PlayCircle, BookOpen, Users, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const stats = [
    { icon: Users, label: 'Active Students', value: '50K+' },
    { icon: BookOpen, label: 'Courses & Resources', value: '1,200+' },
    { icon: Star, label: 'Average Rating', value: '4.8' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary-soft text-primary border-primary/20">
                🎉 New: AI-Powered Learning Paths Available!
              </Badge>
              
              <h1 className="font-heading font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Learn, Create, and 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Succeed</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Join thousands of learners and creators in the world's most comprehensive 
                educational marketplace. Access premium courses, ebooks, and notes from 
                industry experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 shadow-glow">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary-soft">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=40&h=40&fit=crop&crop=face&auto=format`}
                    alt={`Student ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-medium">Join 50,000+ students</div>
                <div className="text-muted-foreground">Already learning with us</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format"
                alt="Students learning"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-background rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Complete React Course</div>
                    <div className="text-xs text-muted-foreground">Progress: 67%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-warning text-warning" />
                  <div className="text-sm font-semibold">4.9/5.0</div>
                </div>
                <div className="text-xs text-muted-foreground">2,847 reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="font-heading font-bold text-2xl lg:text-3xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
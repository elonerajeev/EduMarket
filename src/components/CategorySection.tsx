import { Code, Palette, BarChart3, Brain, Camera, Music, Wrench, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CategorySection = () => {
  const categories = [
    {
      icon: Code,
      name: 'Programming',
      courses: 324,
      color: 'from-blue-500 to-cyan-500',
      description: 'Web Development, Mobile Apps, Data Science'
    },
    {
      icon: Palette,
      name: 'Design',
      courses: 189,
      color: 'from-purple-500 to-pink-500',
      description: 'UI/UX, Graphic Design, Digital Art'
    },
    {
      icon: BarChart3,
      name: 'Business',
      courses: 267,
      color: 'from-green-500 to-emerald-500',
      description: 'Marketing, Finance, Entrepreneurship'
    },
    {
      icon: Brain,
      name: 'AI & ML',
      courses: 156,
      color: 'from-orange-500 to-red-500',
      description: 'Machine Learning, Deep Learning, NLP'
    },
    {
      icon: Camera,
      name: 'Photography',
      courses: 98,
      color: 'from-teal-500 to-blue-500',
      description: 'Portrait, Landscape, Photo Editing'
    },
    {
      icon: Music,
      name: 'Music',
      courses: 142,
      color: 'from-indigo-500 to-purple-500',
      description: 'Music Production, Theory, Instruments'
    },
    {
      icon: Wrench,
      name: 'Engineering',
      courses: 203,
      color: 'from-gray-500 to-slate-500',
      description: 'Mechanical, Electrical, Civil Engineering'
    },
    {
      icon: Heart,
      name: 'Health & Wellness',
      courses: 87,
      color: 'from-pink-500 to-rose-500',
      description: 'Fitness, Nutrition, Mental Health'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl">
            Explore by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover courses, ebooks, and notes across diverse fields of knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {category.courses} courses
                      </span>
                      <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary-soft">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
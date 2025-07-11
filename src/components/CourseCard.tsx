import { Star, Clock, Users, BookOpen, Play, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  students: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  type: 'course' | 'ebook' | 'notes';
}

const CourseCard = ({
  title,
  instructor,
  price,
  originalPrice,
  rating,
  reviewCount,
  duration,
  students,
  level,
  category,
  image,
  isNew,
  isBestseller,
  type
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-secondary text-secondary-foreground';
      case 'Intermediate': return 'bg-warning text-warning-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'course': return <Play className="h-4 w-4" />;
      case 'ebook': return <BookOpen className="h-4 w-4" />;
      case 'notes': return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'course': return 'bg-primary text-primary-foreground';
      case 'ebook': return 'bg-accent text-accent-foreground';
      case 'notes': return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
      <div className="relative overflow-hidden">
        <img 
          src={`https://images.unsplash.com/${image}?w=400&h=240&fit=crop&auto=format`}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlays */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {isNew && (
            <Badge className="bg-warning text-warning-foreground">New</Badge>
          )}
          {isBestseller && (
            <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>
          )}
          <Badge className={`${getTypeColor()}`}>
            {getTypeIcon()}
            <span className="ml-1 capitalize">{type}</span>
          </Badge>
        </div>

        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 h-8 w-8 p-0 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Preview Button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="sm" className="bg-white text-black hover:bg-white/90">
            Quick Preview
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
            <Badge className={`text-xs ${getLevelColor(level)}`}>
              {level}
            </Badge>
          </div>

          <h3 className="font-heading font-semibold text-lg line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground">
            by {instructor}
          </p>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="font-medium text-foreground">{rating}</span>
              <span>({reviewCount})</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-heading font-bold text-xl text-foreground">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="text-xs">
            Preview
          </Button>
          <Button size="sm" className="bg-gradient-primary text-white hover:opacity-90">
            Buy Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
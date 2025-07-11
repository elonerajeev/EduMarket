import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseCard from './CourseCard';

const FeaturedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = {
    courses: [
      {
        id: '1',
        title: 'Complete React.js Developer Course 2024',
        instructor: 'Sarah Johnson',
        price: 89.99,
        originalPrice: 199.99,
        rating: 4.8,
        reviewCount: 2847,
        duration: '42 hours',
        students: 15430,
        level: 'Intermediate' as const,
        category: 'Web Development',
        image: 'photo-1633356122544-f134324a6cee',
        isNew: true,
        isBestseller: true,
        type: 'course' as const
      },
      {
        id: '2',
        title: 'UI/UX Design Masterclass: Figma to Frontend',
        instructor: 'Alex Chen',
        price: 79.99,
        originalPrice: 149.99,
        rating: 4.9,
        reviewCount: 1923,
        duration: '38 hours',
        students: 12850,
        level: 'Beginner' as const,
        category: 'Design',
        image: 'photo-1586717791821-3f44a563fa4c',
        isBestseller: true,
        type: 'course' as const
      },
      {
        id: '3',
        title: 'Python for Data Science & Machine Learning',
        instructor: 'Dr. Michael Rodriguez',
        price: 94.99,
        originalPrice: 179.99,
        rating: 4.7,
        reviewCount: 3156,
        duration: '55 hours',
        students: 18240,
        level: 'Advanced' as const,
        category: 'Data Science',
        image: 'photo-1551288049-bebda4e38f71',
        type: 'course' as const
      },
      {
        id: '4',
        title: 'Digital Marketing Complete Guide 2024',
        instructor: 'Emma Thompson',
        price: 69.99,
        originalPrice: 129.99,
        rating: 4.6,
        reviewCount: 2341,
        duration: '32 hours',
        students: 9876,
        level: 'Beginner' as const,
        category: 'Marketing',
        image: 'photo-1460925895917-afdab827c52f',
        isNew: true,
        type: 'course' as const
      }
    ],
    ebooks: [
      {
        id: '5',
        title: 'The Complete Guide to Modern JavaScript',
        instructor: 'David Park',
        price: 29.99,
        originalPrice: 49.99,
        rating: 4.8,
        reviewCount: 892,
        duration: '300 pages',
        students: 5420,
        level: 'Intermediate' as const,
        category: 'Programming',
        image: 'photo-1544717297-fa95b6ee9643',
        isBestseller: true,
        type: 'ebook' as const
      },
      {
        id: '6',
        title: 'Design Systems: The Ultimate Handbook',
        instructor: 'Lisa Wang',
        price: 24.99,
        rating: 4.9,
        reviewCount: 567,
        duration: '220 pages',
        students: 3890,
        level: 'Advanced' as const,
        category: 'Design',
        image: 'photo-1512486130939-2c4f79935e4f',
        type: 'ebook' as const
      },
      {
        id: '7',
        title: 'Startup Funding: From Idea to IPO',
        instructor: 'James Mitchell',
        price: 34.99,
        rating: 4.7,
        reviewCount: 445,
        duration: '280 pages',
        students: 2156,
        level: 'Intermediate' as const,
        category: 'Business',
        image: 'photo-1507003211169-0a1dd7228f2d',
        isNew: true,
        type: 'ebook' as const
      }
    ],
    notes: [
      {
        id: '8',
        title: 'Data Structures & Algorithms Cheat Sheet',
        instructor: 'Prof. Jennifer Lee',
        price: 19.99,
        rating: 4.6,
        reviewCount: 1234,
        duration: '150 pages',
        students: 7890,
        level: 'Intermediate' as const,
        category: 'Computer Science',
        image: 'photo-1516321318423-f06f85e504b3',
        type: 'notes' as const
      },
      {
        id: '9',
        title: 'Advanced Calculus Study Notes',
        instructor: 'Dr. Robert Kim',
        price: 15.99,
        rating: 4.8,
        reviewCount: 678,
        duration: '120 pages',
        students: 4560,
        level: 'Advanced' as const,
        category: 'Mathematics',
        image: 'photo-1635070041078-e363dbe005cb',
        isBestseller: true,
        type: 'notes' as const
      }
    ]
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl">
              Featured Content
            </h2>
            <p className="text-xl text-muted-foreground">
              Handpicked courses, ebooks, and notes from top creators
            </p>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-10 h-10 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-10 h-10 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-muted/50">
            <TabsTrigger value="courses" className="font-medium">Courses</TabsTrigger>
            <TabsTrigger value="ebooks" className="font-medium">Ebooks</TabsTrigger>
            <TabsTrigger value="notes" className="font-medium">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredContent.courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ebooks" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.ebooks.map((ebook) => (
                <CourseCard key={ebook.id} {...ebook} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredContent.notes.map((note) => (
                <CourseCard key={note.id} {...note} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90">
            Explore All Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
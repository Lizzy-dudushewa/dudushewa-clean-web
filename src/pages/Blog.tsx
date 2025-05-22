
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, Tag } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Keeping Your Home Clean Between Professional Cleanings",
    excerpt: "Maintain a spotless home with these simple daily habits that will keep your space clean and fresh between professional cleaning visits.",
    date: "May 15, 2023",
    readTime: "5 min read",
    author: "Elizabeth Dudushewa",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categories: ["Home Cleaning", "Tips"]
  },
  {
    id: 2,
    title: "The Ultimate Guide to Deep Cleaning Your Kitchen",
    excerpt: "Learn professional techniques for getting your kitchen spotless, from appliances to cabinets and everything in between.",
    date: "April 28, 2023",
    readTime: "8 min read",
    author: "Elizabeth Dudushewa",
    image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categories: ["Kitchen Cleaning", "Deep Cleaning"]
  },
  {
    id: 3,
    title: "How to Choose the Right Cleaning Service for Your Needs",
    excerpt: "Not all cleaning services are created equal. Here's what to look for when hiring professionals to clean your home or office.",
    date: "April 10, 2023",
    readTime: "6 min read",
    author: "Elizabeth Dudushewa",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categories: ["Hiring Tips", "Services"]
  },
  {
    id: 4,
    title: "The Environmental Impact of Cleaning Products: Making Greener Choices",
    excerpt: "Discover how your cleaning product choices affect the environment and learn about eco-friendly alternatives.",
    date: "March 22, 2023",
    readTime: "7 min read",
    author: "Elizabeth Dudushewa",
    image: "https://images.unsplash.com/photo-1604187350596-d1156c345855?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categories: ["Green Cleaning", "Eco-Friendly"]
  },
  {
    id: 5,
    title: "Preparing Your Home for a Professional Cleaning Service",
    excerpt: "Get the most out of your professional cleaning service with these simple preparation tips.",
    date: "March 5, 2023",
    readTime: "4 min read",
    author: "Elizabeth Dudushewa",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categories: ["Preparation", "Tips"]
  },
  {
    id: 6,
    title: "Office Cleaning: Creating a Healthy Workspace for Employees",
    excerpt: "How regular professional cleaning contributes to employee health, productivity, and overall workplace satisfaction.",
    date: "February 18, 2023",
    readTime: "6 min read",
    author: "Elizabeth Dudushewa",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categories: ["Office Cleaning", "Commercial"]
  }
];

const categories = [
  "Home Cleaning", "Kitchen Cleaning", "Deep Cleaning", "Office Cleaning", 
  "Green Cleaning", "Tips", "Hiring Tips", "Services", "Eco-Friendly", 
  "Commercial", "Preparation"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "" || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };
  
  const handlePostClick = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="section-padding">
          <div className="max-width">
            <div className="text-center mb-12">
              <span className="text-cleaning-primary font-medium">Our Blog</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">Cleaning Tips & Insights</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expert advice, cleaning tips, and insights to help you maintain a cleaner, healthier home.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main content */}
              <div className="w-full md:w-3/4">
                <div className="mb-8 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    placeholder="Search articles..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map(post => (
                    <Card 
                      key={post.id} 
                      className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => handlePostClick(post.id)}
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardContent>
                      <CardFooter className="pt-0 flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {post.categories.slice(0, 2).map(category => (
                            <span 
                              key={category}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {category}
                            </span>
                          ))}
                          {post.categories.length > 2 && (
                            <span className="text-xs text-gray-500">+{post.categories.length - 2} more</span>
                          )}
                        </div>
                        <Button variant="ghost" size="sm">Read More</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">No articles found</h3>
                    <p className="text-gray-600">Try adjusting your search or category filters</p>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="w-full md:w-1/4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <Button
                          key={category}
                          variant="outline"
                          size="sm"
                          className={`flex items-center ${
                            category === selectedCategory ? 'bg-cleaning-primary text-white' : ''
                          }`}
                          onClick={() => handleCategoryClick(category)}
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Subscribe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Get the latest cleaning tips and advice delivered to your inbox.
                    </p>
                    <Input 
                      placeholder="Your email address"
                      className="mb-4" 
                    />
                    <Button className="w-full gradient-bg">Subscribe</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

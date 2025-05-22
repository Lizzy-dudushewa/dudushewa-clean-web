
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Facebook, Twitter, Linkedin, Copy, ArrowLeft } from "lucide-react";

// Sample blog post data (in a real app, this would come from an API or database)
const blogPostsData = {
  "1": {
    id: 1,
    title: "10 Tips for Keeping Your Home Clean Between Professional Cleanings",
    excerpt: "Maintain a spotless home with these simple daily habits that will keep your space clean and fresh between professional cleaning visits.",
    content: `
      <p>Maintaining a clean home between professional cleaning visits is essential for a healthy living environment. Here are 10 tips to help you keep your home spotless:</p>
      
      <h2>1. Make Your Bed Every Morning</h2>
      <p>Starting your day by making your bed creates an instant sense of accomplishment and neatness in your bedroom. It takes just a few minutes but makes a significant difference in how tidy your space feels.</p>
      
      <h2>2. Follow the "One-Touch Rule"</h2>
      <p>Handle items only once before putting them away. For example, don't drop mail on the counter to sort later—deal with it immediately by recycling junk mail and filing or acting on important documents.</p>
      
      <h2>3. Clean as You Cook</h2>
      <p>While preparing meals, wash utensils and bowls as you finish using them. Wipe counters as you go and rinse dishes immediately after eating to prevent food from hardening and becoming difficult to clean later.</p>
      
      <h2>4. Implement a 15-Minute Daily Cleanup</h2>
      <p>Set a timer for 15 minutes each evening and have everyone in the household pick up and put away their belongings. It's amazing what can be accomplished in just 15 focused minutes!</p>
      
      <h2>5. Keep Cleaning Supplies Accessible</h2>
      <p>Store basic cleaning supplies in each bathroom and the kitchen so they're readily available when needed. This makes quick cleanups much more likely to happen.</p>
      
      <h2>6. Develop a Shoe-Free Home Policy</h2>
      <p>Up to 80% of household dirt comes in on the bottom of shoes. Creating a designated area for shoes near entrances can significantly reduce the amount of cleaning needed.</p>
      
      <h2>7. Address Spills Immediately</h2>
      <p>Clean up spills as soon as they happen to prevent stains and reduce the effort needed to clean them later. This is especially important for carpets and upholstery.</p>
      
      <h2>8. Establish a Laundry Routine</h2>
      <p>Do small loads of laundry throughout the week instead of saving it all for one day. This prevents clothes from piling up and makes the task more manageable.</p>
      
      <h2>9. Declutter Regularly</h2>
      <p>Less stuff means less to clean around. Take a few minutes each week to identify items you no longer need and either donate, sell, or discard them.</p>
      
      <h2>10. Wipe Down Bathroom Surfaces Daily</h2>
      <p>Keep a microfiber cloth in each bathroom and quickly wipe down counters, faucets, and mirrors after use. This prevents soap scum and toothpaste splatter from building up.</p>
      
      <p>By incorporating these simple habits into your daily routine, you'll maintain a cleaner home between professional cleanings and make your cleaning service's job more effective when they visit. Remember that consistency is key—small daily actions lead to a consistently clean home.</p>
    `,
    date: "May 15, 2023",
    readTime: "5 min read",
    author: {
      name: "Elizabeth Dudushewa",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      role: "Cleaning Expert"
    },
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categories: ["Home Cleaning", "Tips"]
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  const post = blogPostsData[postId as keyof typeof blogPostsData];
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          <div className="max-width py-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <article className="max-width py-12">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline"
                  size="icon" 
                  className="rounded-full"
                  onClick={handleCopyLink}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="icon" 
                  className="rounded-full"
                  onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="icon" 
                  className="rounded-full"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`, '_blank')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="icon" 
                  className="rounded-full"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Separator className="mb-8" />
            
            <div 
              className="prose max-w-none prose-headings:text-cleaning-primary prose-a:text-cleaning-accent"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            <Separator className="my-8" />
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.categories.map(category => (
                <span 
                  key={category}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <div className="bg-cleaning-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Need Professional Cleaning Services?</h3>
              <p className="mb-4">Let our experts handle the cleaning while you focus on what matters most to you.</p>
              <Button className="gradient-bg">Get a Quote</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

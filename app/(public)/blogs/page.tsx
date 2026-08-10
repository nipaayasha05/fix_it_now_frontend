"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CalendarDays, UserRound, ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Blog = {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
  category: string;
  content: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Choose the Right Home Service Professional",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    author: "FixItNow Team",
    date: "August 08, 2026",
    category: "Home Services",
    content:
      "Choosing the right professional for your home service is important. You should always check their experience, previous work, customer reviews, pricing, and availability before making a booking. A reliable professional can save you both time and money while ensuring quality work.",
  },
  {
    id: 2,
    title: "5 Essential Plumbing Tips Every Homeowner Should Know",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39",
    author: "John Smith",
    date: "August 05, 2026",
    category: "Plumbing",
    content:
      "Small plumbing problems can quickly become expensive repairs if they are ignored. Regularly check your pipes for leaks, avoid putting grease down the drain, keep your water pressure under control, and know where your main water shutoff valve is located.",
  },
  {
    id: 3,
    title: "Simple Electrical Safety Tips for Your Home",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
    author: "FixItNow Team",
    date: "August 02, 2026",
    category: "Electrical",
    content:
      "Electrical safety should always be a priority at home. Avoid overloaded sockets, replace damaged cables immediately, keep electrical devices away from water, and always hire a qualified technician for complex electrical work.",
  },
  {
    id: 4,
    title: "How Regular AC Maintenance Saves Money",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    author: "Michael Brown",
    date: "July 29, 2026",
    category: "AC Service",
    content:
      "Regular air conditioner maintenance helps your system run efficiently and reduces unexpected repair costs. Cleaning filters, checking refrigerant levels, and inspecting electrical components can significantly improve the lifespan of your AC.",
  },
  {
    id: 5,
    title: "Easy Ways to Keep Your Home Clean and Healthy",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    author: "FixItNow Team",
    date: "July 25, 2026",
    category: "Cleaning",
    content:
      "Keeping your home clean does not always require complicated routines. Creating a regular cleaning schedule, focusing on high-touch surfaces, maintaining proper ventilation, and keeping clutter under control can make your home healthier and more comfortable.",
  },
  {
    id: 6,
    title: "Why Professional Home Services Are Worth It",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c",
    author: "Sarah Wilson",
    date: "July 20, 2026",
    category: "Tips",
    content:
      "Professional home services provide expertise, proper tools, and reliable results. Instead of spending hours trying to solve a difficult problem yourself, hiring an experienced professional can often provide a safer and more effective solution.",
  },
  {
    id: 7,
    title: "When Should You Call a Professional Electrician?",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    author: "FixItNow Team",
    date: "July 17, 2026",
    category: "Electrical",
    content:
      "Some electrical problems should never be handled without professional experience. Frequent circuit breaker trips, burning smells, sparks, exposed wires, and unexplained power issues are all signs that you should contact a qualified electrician.",
  },
  {
    id: 8,
    title: "Complete Guide to Maintaining Your Home",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    author: "David Lee",
    date: "July 12, 2026",
    category: "Maintenance",
    content:
      "A proper home maintenance routine helps prevent unexpected problems. Inspect your plumbing, electrical systems, roof, appliances, and cooling systems regularly to identify small issues before they become major repairs.",
  },
];

const ITEMS_PER_PAGE = 6;

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {/* <Badge variant="secondary" className="mb-3">
            Our Blog
          </Badge> */}

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Helpful Tips for Your Home
          </h1>

          <p className="mt-4 text-muted-foreground">
            Discover useful home maintenance tips, expert advice, and helpful
            information from the FixItNow team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.map((blog) => (
            <Card
              key={blog.id}
              className="group cursor-pointer overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              onClick={() => setSelectedBlog(blog)}
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  unoptimized
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <CardHeader className="pb-3">
                <div className="mb-2">
                  <Badge variant="outline">{blog.category}</Badge>
                </div>

                <h2 className="line-clamp-2 text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                  {blog.title}
                </h2>
              </CardHeader>

              <CardContent className="pb-1">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <UserRound className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant="ghost"
                  className="group/button px-0 text-primary pb-1"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedBlog(blog);
                  }}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {currentBlogs.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-semibold">No blogs found</h3>
            <p className="mt-2 text-muted-foreground">
              There are no blogs available on this page.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={handlePrevious}
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              );
            })}

            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        )}

        {/* Blog Details Modal */}
        <Dialog
          open={selectedBlog !== null}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedBlog(null);
            }
          }}
        >
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
            {selectedBlog && (
              <>
                <div className="relative h-60 w-full overflow-hidden rounded-lg">
                  <Image
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 672px"
                  />
                </div>

                <DialogHeader className="mt-2">
                  <div className="mb-2">
                    <Badge>{selectedBlog.category}</Badge>
                  </div>

                  <DialogTitle className="text-2xl leading-tight sm:text-3xl">
                    {selectedBlog.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex flex-wrap gap-4 border-y py-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <UserRound className="h-4 w-4" />
                    <span>{selectedBlog.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{selectedBlog.date}</span>
                  </div>
                </div>

                <div className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {selectedBlog.content}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default BlogsPage;

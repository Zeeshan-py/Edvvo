import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { BookOpen, Microscope, Globe, Palette, Calculator, Laptop } from "lucide-react";

export const ExploreByCategorySection = (): JSX.Element => {
  // Define categories data with icons and enhanced styling
  const categories = [
    {
      name: "Science",
      icon: Microscope,
      backgroundImage: "url(../depth-7--frame-0-4.png)",
      color: "from-green-400 to-blue-500",
      count: "2,500+ books"
    },
    {
      name: "History", 
      icon: Globe,
      backgroundImage: "url(../depth-7--frame-0-5.png)",
      color: "from-amber-400 to-orange-500",
      count: "1,800+ books"
    },
    {
      name: "Literature",
      icon: BookOpen,
      backgroundImage: "url(../depth-7--frame-0-6.png)",
      color: "from-purple-400 to-pink-500",
      count: "3,200+ books"
    },
    {
      name: "Mathematics",
      icon: Calculator,
      backgroundImage: "url(../depth-7--frame-0-7.png)",
      color: "from-blue-400 to-indigo-500",
      count: "1,900+ books"
    },
    {
      name: "Technology",
      icon: Laptop,
      backgroundImage: "url(../depth-7--frame-0-8.png)",
      color: "from-cyan-400 to-teal-500",
      count: "2,100+ books"
    },
  ];

  return (
    <section id="library" className="flex flex-col gap-8 p-4 w-full py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4">
          Explore by Category
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Browse through our extensive collection organized by subject areas
        </p>
      </div>

      <div className="flex gap-6 w-full overflow-x-auto scrollbar-hide pb-4">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={index} 
              className="flex-shrink-0 border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
            >
              <CardContent className="flex flex-col gap-4 p-0 pb-6">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className="w-[200px] h-[200px] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: category.backgroundImage }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                </div>
                
                <div className="px-4 space-y-2">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white font-['Newsreader',Helvetica]">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {category.count}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

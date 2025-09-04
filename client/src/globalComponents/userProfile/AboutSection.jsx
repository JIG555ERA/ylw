// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import { 
  BookOpen, Users, Award, Globe, 
  Heart, Sparkles, Target, Shield 
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: BookOpen, label: "Books Available", value: "50,000+" },
    { icon: Users, label: "Happy Readers", value: "2M+" },
    { icon: Award, label: "Awards Won", value: "15" },
    { icon: Globe, label: "Countries Served", value: "45+" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Reading",
      description: "We believe books have the power to transform lives and open minds to new possibilities."
    },
    {
      icon: Target,
      title: "Curated Excellence",
      description: "Every book in our collection is carefully selected to ensure quality and reader satisfaction."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and transactions are protected with industry-leading security measures."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We continuously improve our platform to enhance your reading and shopping experience."
    }
  ];

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          About BookHaven
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your trusted companion in the journey of literary discovery, connecting readers with extraordinary books since 2020.
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pastel-purple/30 via-pastel-pink/20 to-pastel-blue/30 rounded-3xl p-8 mb-8 border border-white/20">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-vibrant-purple to-vibrant-pink rounded-2xl flex items-center justify-center shadow-lg">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            To make exceptional literature accessible to everyone, everywhere. We're building a world where every reader 
            can discover their next favorite book, connect with like-minded book lovers, and experience the joy of reading 
            in the digital age.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-vibrant-purple/20 to-vibrant-pink/20 rounded-xl flex items-center justify-center">
                <Icon className="h-6 w-6 text-vibrant-purple" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Our Story */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Our Story
        </h3>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Founded in 2020 by a team of passionate readers and tech enthusiasts, BookHaven started with a simple 
            vision: to create the most delightful book shopping experience on the internet. What began as a small 
            online bookstore has evolved into a comprehensive literary ecosystem.
          </p>
          <p>
            Today, we're proud to serve millions of readers worldwide, offering everything from bestselling novels 
            to rare academic texts. Our platform combines cutting-edge technology with a deep love for books, 
            ensuring that every interaction feels personal and meaningful.
          </p>
          <p>
            We work directly with publishers, authors, and distributors to bring you the latest releases, exclusive 
            editions, and timeless classics. Our team of literary experts curates recommendations, and our advanced 
            algorithms help you discover books you'll love.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          What We Stand For
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-vibrant-purple/20 to-vibrant-pink/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-vibrant-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">
              Customer Support
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>📧 support@bookhaven.com</p>
              <p>📞 1-800-BOOKS-24 (1-800-266-5724)</p>
              <p>💬 Live chat available 24/7</p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">
              Business Inquiries
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>🏢 partnerships@bookhaven.com</p>
              <p>📍 123 Literary Lane, San Francisco, CA 94105</p>
              <p>🌐 Available in 45+ countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import { motion } from 'motion/react';
import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

const officers = [
  {
    name: "Sarah Martinez",
    role: "President",
    major: "Business Administration",
    year: "Senior",
    bio: "Passionate about product strategy and user experience. Previously interned at Microsoft and Disney.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "sarah.martinez@ucf.edu",
    github: "#"
  },
  {
    name: "Alex Chen",
    role: "Vice President",
    major: "Computer Science",
    year: "Junior",
    bio: "Full-stack developer with a passion for building scalable products. Loves bridging tech and business.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "alex.chen@ucf.edu",
    github: "#"
  },
  {
    name: "Maya Patel",
    role: "Secretary",
    major: "Industrial Engineering",
    year: "Sophomore",
    bio: "Data-driven problem solver focused on optimizing user journeys and product analytics.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "maya.patel@ucf.edu",
    github: "#"
  },
  {
    name: "Jordan Williams",
    role: "Treasurer",
    major: "Finance",
    year: "Junior",
    bio: "Entrepreneurial mindset with experience in fintech startups. Passionate about product monetization.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "jordan.williams@ucf.edu",
    github: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Events Coordinator",
    major: "Marketing",
    year: "Junior",
    bio: "Creative strategist who loves organizing impactful events and building community connections.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "emily.rodriguez@ucf.edu",
    github: "#"
  },
  {
    name: "David Kim",
    role: "Tech Lead",
    major: "Computer Engineering",
    year: "Senior",
    bio: "Machine learning enthusiast building the next generation of intelligent products and platforms.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    email: "david.kim@ucf.edu",
    github: "#"
  }
];

export default function OfficersSection() {
  return (
    <section id="officers" className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-100/80 rounded-full text-blue-700 text-sm mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Meet the Team
          </motion.div>

          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Officers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate leaders driving Loop's mission to empower the next generation of product managers and innovators.
          </p>
        </motion.div>

        {/* Officers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <motion.div
              key={officer.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-white to-blue-50/30 border-blue-100/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 group">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <motion.div
                    className="relative w-24 h-24 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="w-full h-full rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {officer.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{officer.role}</p>
                  <div className="text-sm text-gray-500">
                    <p>{officer.major}</p>
                    <p>{officer.year}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {officer.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <motion.a
                    href={officer.linkedin}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  
                  <motion.a
                    href={`mailto:${officer.email}`}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                  
                  <motion.a
                    href={officer.github}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Leadership Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl mb-4">Want to Lead?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate students to join our leadership team. 
            Applications for officer positions open each semester.
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn About Leadership Opportunities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
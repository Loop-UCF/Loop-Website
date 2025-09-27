import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Rocket, TrendingUp, Code } from 'lucide-react';
import { Card } from './ui/card';

const missions = [
  {
    icon: Target,
    title: "Strategic Thinking",
    description: "Develop product management skills through real-world case studies, workshops, and hands-on projects that bridge theory with practice."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Foster connections between students, professionals, and industry leaders to create lasting relationships and mentorship opportunities."
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Provide a platform for creative problem-solving, ideation sessions, and collaborative projects that push technological boundaries."
  }
];

const goals = [
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Prepare members for successful careers in product management, tech, and entrepreneurship through comprehensive skill development."
  },
  {
    icon: TrendingUp,
    title: "Industry Impact",
    description: "Create meaningful connections with UCF alumni and industry professionals to expand our network and influence."
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Bridge the gap between business and technology by fostering technical literacy alongside strategic thinking."
  }
];

export default function MissionSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-100/80 rounded-full text-blue-700 text-sm mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Our Purpose & Vision
          </motion.div>

          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Mission & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Goals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Loop, we're committed to empowering the next generation of product leaders and innovators 
            through hands-on learning, community, and real-world impact.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-900 mb-8 text-center"
          >
            Our Mission
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-white to-blue-50/50 border-blue-100/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 group">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl mb-6 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <mission.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  
                  <h4 className="text-xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {mission.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Goals Cards */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-900 mb-8 text-center"
          >
            Our Goals
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-blue-50/50 to-white border-blue-100/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 group">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <goal.icon className="w-8 h-8 text-white transition-colors duration-300" />
                  </motion.div>
                  
                  <h4 className="text-xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {goal.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ready to Loop In? Join Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
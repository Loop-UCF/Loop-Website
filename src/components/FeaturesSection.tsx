import { motion } from 'motion/react';
import { Infinity, Zap, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Infinity,
    title: "Continuous Innovation",
    description: "Experience seamless workflows that adapt and evolve with your needs, creating an endless cycle of improvement."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed and efficiency, Loop ensures your ideas move at the pace of thought."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Connect with like-minded individuals and teams to create something greater than the sum of its parts."
  },
  {
    icon: Sparkles,
    title: "Intelligent Design",
    description: "Smart algorithms and intuitive interfaces work together to anticipate your needs and streamline your workflow."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-gray-900">
            Why Choose Loop?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make Loop the perfect platform for your creative journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="w-8 h-8 text-blue-600" />
              </motion.div>
              
              <h3 className="text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
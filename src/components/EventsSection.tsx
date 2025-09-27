import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const upcomingEvents = [
  {
    id: 1,
    title: "Product Strategy Workshop",
    description: "Learn to build comprehensive product roadmaps with industry experts from Meta and Google.",
    date: "March 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Student Union, Room 316",
    attendees: 45,
    type: "Workshop",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Tech Talk: AI in Product Management",
    description: "Explore how artificial intelligence is transforming product management practices.",
    date: "March 22, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "Engineering Building II, Auditorium",
    attendees: 120,
    type: "Tech Talk",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    description: "Present your product ideas to a panel of venture capitalists and entrepreneurs.",
    date: "April 5, 2024",
    time: "5:00 PM - 9:00 PM",
    location: "UCF Downtown Campus",
    attendees: 80,
    type: "Competition",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
  }
];

const pastEvents = [
  {
    title: "Product Management 101",
    date: "February 28, 2024",
    attendees: 95,
    type: "Workshop"
  },
  {
    title: "Design Thinking Bootcamp", 
    date: "February 15, 2024",
    attendees: 67,
    type: "Bootcamp"
  },
  {
    title: "Industry Networking Night",
    date: "January 30, 2024", 
    attendees: 140,
    type: "Networking"
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-white">
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
            <Calendar className="w-4 h-4 mr-2" />
            What's Coming Up
          </motion.div>

          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Upcoming <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for workshops, tech talks, and networking events designed to accelerate your product management journey.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 border-blue-100/50">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white border-none">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2 text-blue-500" />
                      {event.attendees} registered
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group/button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Past Events Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-gray-900 mb-8 text-center">Recent Events</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Badge className="bg-blue-100 text-blue-700 border-none mb-3">
                  {event.type}
                </Badge>
                <h4 className="text-lg text-gray-900 mb-2">{event.title}</h4>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{event.date}</span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {event.attendees}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to stay updated on all our events?
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Community for Updates
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
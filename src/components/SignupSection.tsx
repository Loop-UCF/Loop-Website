import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle, Mail, User, ArrowRight, GraduationCap, BookOpen } from 'lucide-react';

export default function SignupSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    major: '',
    interest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (isSubmitted) {
    return (
      <section id="join" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-12 bg-white/95 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
              >
                <CheckCircle className="w-10 h-10 text-green-600" />
              </motion.div>
              
              <h3 className="text-3xl mb-4 text-gray-900">
                Welcome to Loop, {formData.name}!
              </h3>
              
              <p className="text-xl text-gray-600 mb-8">
                You're now part of UCF's premier product management community. 
                Check your email for event updates and next steps!
              </p>
              
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', year: '', major: '', interest: '' });
                }}
              >
                Add Another Member
              </motion.button>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-blue-100 text-sm mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Ready to Start Your Journey?
          </motion.div>

          <h2 className="text-4xl lg:text-5xl mb-6 text-white">
            Join the <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Loop</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Become part of UCF's most innovative product management community. 
            Connect, learn, and build the future together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-white/95 backdrop-blur-md shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4 text-blue-600" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-blue-600" />
                    UCF Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.name@ucf.edu"
                    className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    Academic Year
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('year', value)}>
                    <SelectTrigger className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freshman">Freshman</SelectItem>
                      <SelectItem value="sophomore">Sophomore</SelectItem>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="graduate">Graduate Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-700">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    Major
                  </Label>
                  <Input
                    name="major"
                    type="text"
                    required
                    value={formData.major}
                    onChange={handleInputChange}
                    placeholder="e.g., Business, Computer Science, Engineering"
                    className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interest" className="text-gray-700">
                  What interests you most about product management? (Optional)
                </Label>
                <Input
                  id="interest"
                  name="interest"
                  type="text"
                  value={formData.interest}
                  onChange={handleInputChange}
                  placeholder="e.g., Product strategy, UX design, Data analytics, Entrepreneurship..."
                  className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading || !formData.name || !formData.email || !formData.major}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg shadow-lg shadow-blue-600/25"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Joining the Community...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Join the Community
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>
            
            <p className="text-sm text-gray-500 text-center mt-6">
              By joining, you'll receive updates about events, workshops, and opportunities. 
              We respect your privacy and will never spam you.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
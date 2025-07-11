import React from 'react';
import { Code, Briefcase, GraduationCap, Smile } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '6+' },
    { icon: Briefcase, label: 'Years Experience', value: 'Fresher' },
    { icon: GraduationCap, label: 'Certifications', value: '6+' },
    { icon: Smile, label: 'Happy Clients', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies and process automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
             <div className="prose prose-lg dark:prose-invert max-w-none">
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               Hello! I'm Niranjan Singh, a fresher full-stack developer based in Noida, India, passionate about building modern web applications and smart automation solutions. I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) and have a strong foundation in <strong>HTML, CSS, JavaScript</strong>, and <strong>CPP</strong>, with knowledge of OOP, data structures, and asynchronous programming.
             </p>
             
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               I have hands-on experience through academic projects and certifications, including working with <strong>UiPath</strong> for robotic process automation (RPA). I'm also proficient with tools like <strong>Git/GitHub</strong>, <strong>Render</strong>, and <strong>Postman</strong>, and certified in RPA development.
             </p>
             
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and spending time outdoors. I'm a fast learner, a strong team player, and committed to continuous learning and staying updated with the latest industry trends.
             </p>

            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Noida, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">Fresher</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specialization</h4>
                <p className="text-gray-600 dark:text-gray-300">Full Stack & RPA</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h4>
                <p className="text-gray-600 dark:text-gray-300">Open to Work</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow card-hover"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
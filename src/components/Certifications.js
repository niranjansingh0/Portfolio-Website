import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Search } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCertifications, setFilteredCertifications] = useState(certifications);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredCertifications(certifications);
    } else {
      const filtered = certifications.filter(cert =>
        cert.title.toLowerCase().includes(term.toLowerCase()) ||
        cert.organization.toLowerCase().includes(term.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(term.toLowerCase()))
      );
      setFilteredCertifications(filtered);
    }
  };

  // Helper function to determine if certification is active
  const isActiveCertification = (cert) => {
    // Check if certification has expiry date and is not expired
    if (cert.expiryDate) {
      const expiryDate = new Date(cert.expiryDate);
      const currentDate = new Date();
      return expiryDate > currentDate;
    }
    
    // If no expiry date, consider verified certifications as active
    return cert.verified === true;
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* No Results Message */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No certifications found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or browse all certifications.
            </p>
          </div>
        )}

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-1"
                    >
                      {cert.title}
                      {/* <ExternalLink className="h-4 w-4 ml-1" /> */}
                    </a>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {cert.organization}
                    </p>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="flex items-center space-x-2">
                  {isActiveCertification(cert) ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      Expired
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {cert.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>
              )}

              {/* Date and Expiry */}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  Issued: {cert.date}
                </span>
                {cert.expiryDate && (
                  <>
                    <span className="mx-2">•</span>
                    <span className={`${
                      new Date(cert.expiryDate) <= new Date() 
                        ? 'text-red-500 dark:text-red-400' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      Expires: {cert.expiryDate}
                    </span>
                  </>
                )}
              </div>

              {/* Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>

                {/* Credential ID */}
                <div className="text-right">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              {cert.score && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Score:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {cert.score}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Statistics */}
        {filteredCertifications.length > 0 && (
          <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {filteredCertifications.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Total Certifications
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {filteredCertifications.filter(cert => isActiveCertification(cert)).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Active Certifications
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {new Set(filteredCertifications.flatMap(cert => cert.skills || [])).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Skills Covered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {new Set(filteredCertifications.map(cert => cert.organization)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Organizations
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
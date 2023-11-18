import React from 'react';

const Schema = () => {
    const schema = {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Your Dunedin Motorbike Rental Business',
        'description': 'Explore Dunedin on Two Wheels | Motorcycle Rentals in Dunedin, NZ',
        // Add more properties according to your business details
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Highgate',
          'addressLocality': 'Dunedin',
          'addressRegion': 'Otago',
          'postalCode': '9011',
          'addressCountry': 'New Zealand'
        },
        'telephone': '123-456-7890',
        'url': 'https://www.yourmotorbikerentalwebsite.com',
        // Add more relevant properties for your business
      };
    
      return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
    };

export default Schema;

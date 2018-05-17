const filterTree = [
  {
    name: 'cpus',
    children: [
      {
        name: 'Intel'
      },
      {
        name: 'AMD'
      }
    ]
  },
  {
    name: 'motherboards',
    children: [
      {
        name: 'ATX'
      },
      {
        name: 'Micro ATX'
      },
      {
        name: 'Mini ITX'
      }
    ]
  },
  {
    name: 'storage',
    children: [
      {
        name: 'SSD',
        children: [
          {
            name: '100GB'
          },
          {
            name: '200GB'
          },
          {
            name: '250GB'
          },
          {
            name: '500GB'
          },
          {
            name: '700GB'
          },
          {
            name: '1TB'
          }
        ]
      },
      {
        name: 'Hybrid',
        children: [
          {
            name: '250GB'
          },
          {
            name: '500GB'
          },
          {
            name: '750GB'
          },
          {
            name: '1TB'
          },
          {
            name: '2TB'
          }
        ]
      },
      {
        name: '5400 RPM',
        children: [
          {
            name: '1TB'
          },
          {
            name: '2TB'
          },
          {
            name: '3TB'
          },
          {
            name: '4TB'
          },
          {
            name: '6TB'
          },
          {
            name: '8TB'
          }
        ]
      },
      {
        name: '7200 RPM',
        children: [
          {
            name: '1TB'
          },
          {
            name: '2TB'
          },
          {
            name: '3TB'
          },
          {
            name: '4TB'
          },
          {
            name: '6TB'
          },
          {
            name: '8TB'
          }
        ]
      }
    ]
  }
]

module.exports = filterTree

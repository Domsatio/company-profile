export type ServicesProps = {
  title: string
  body: string
  points: string[]
}

export const Services: ServicesProps[] = [
  {
    title: 'Web Development',
    body: 'Create modern, responsive websites and web applications tailored to your business needs.',
    points: ['React', 'Next.js', 'WordPress', 'Webflow']
  },
  {
    title: 'Mobile Development',
    body: 'Build native and cross-platform mobile applications that deliver exceptional user experiences.',
    points: ['iOS', 'Android', 'React Native', 'Flutter']
  },
  {
    title: 'UI/UX Design',
    body: 'Design intuitive and engaging user interfaces that enhance user satisfaction and conversion rates.',
    points: ['Wireframing', 'Prototyping', 'User Research', 'Visual Design']
  },
  {
    title: 'IT Consulting',
    body: 'Strategic technology consulting to help your business make informed decisions and achieve goals.',
    points: ['Strategy', 'Architecture', 'Security', 'Integration']
  }
]

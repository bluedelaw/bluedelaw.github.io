export const projects = [
  {
    title: "CityConnect",
    description:
      "CityConnect is an app that connects citizens with their local government, making it easier to report issues, share ideas, and engage with the community.",
    websiteUrl: "https://comp1800-bby19.web.app/",
    githubUrl: "https://github.com/bluedelaw/CityConnect",
    imageUrl: "/cityConnect.jpg?height=300&width=400",
  },
  {
    title: "café de A",
    description:
      "A website built for a local Hong Kong cafe in Richmond, BC. The website is built using React and Tailwind CSS.",
    websiteUrl: "https://cafedea.ca",
    githubUrl: "https://github.com/bluedelaw/cafedeA",
    imageUrl: "/cafedea.jpg?height=300&width=400",
  },
  {
    title: "DanielLaw",
    description: "Personal Portfolio Website built using Next.js and Tailwind CSS.",
    githubUrl: "https://github.com/bluedelaw/bluedelaw.github.io",
    imageUrl: "/portfolioPicture.jpg?height=300&width=300",
    sourceOnly: false, // Flag to indicate only show source button
  },
  {
    title: "Waitlist App",
    description:
      "A waitlist management application for restaurants to efficiently manage customer queues and reservations. Features include real-time updates, SMS notifications, and analytics.",
    hasDetailsPage: false, // Flag to indicate this project has a details page
    detailsUrl: "/projects/waitlist-app", // URL to the details page
    githubUrl: "https://github.com/bluedelaw/CafedeaWaitlist",
    imageUrl: "/Waitlist.png?height=300&width=300", // Replace with actual image
    sourceOnly: true, // Flag to indicate only show source button
  },
]

export type Project = {
  title: string
  description: string
  websiteUrl?: string
  githubUrl: string
  imageUrl: string
  hasDetailsPage?: boolean
  detailsUrl?: string
  sourceOnly?: boolean
}

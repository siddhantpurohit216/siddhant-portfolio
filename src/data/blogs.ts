export interface Blog {
  id: number;
  title: string;
  description: string;
  link: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Spring Transaction Propagation",
    description: "A deep dive into how transaction propagation defines behavior in nested method calls.",
    link: "https://www.linkedin.com/posts/siddhantpurohit216_springboot-java-transactional-activity-7406037434389491712-3zjO",
    date: "Feb 2024"
  },
  {
    id: 2,
    title: "Demystifying @Transactional",
    description: "Exploring the proxy mechanism and AOP principles that power Spring's transaction management.",
    link: "https://www.linkedin.com/posts/siddhantpurohit216_aop-aspect-oriented-programming-is-one-activity-7403498391999057920-4ePa",
    date: "Jan 2024"
  },
  {
    id: 3,
    title: "Understanding Spring AOP",
    description: "Breaking down Aspect Oriented Programming and how it handles cross-cutting concerns in Spring.",
    link: "https://www.linkedin.com/posts/siddhantpurohit216_aop-aspect-oriented-programming-is-one-activity-7400922403368783872-V8qO",
    date: "Jan 2024"
  },
  {
    id: 4,
    title: "Bean Scopes & Singleton Pattern",
    description: "Mastering fundamental Spring Boot concepts: from Bean Scopes to the Singleton design pattern.",
    link: "https://www.linkedin.com/posts/siddhantpurohit216_springboot-java-dependencyinjection-activity-7398426063644712960-3egy",
    date: "Dec 2023"
  }
];

[Live link.](https://abelchiao.github.io/genetic-algorithm-visualization/)

## Background
Having come from a biotechnology background, I was inspired to pursue software by the revolutionary effect of advances in computation and data science on biological innovation.
Genetic algorithms are an embodiment of the intersection between computer science and biology, and so this project marries my past experience in genetics with my more recently acquired coding capabilities.

Genetic algorithms are optimization algorithms inspired by the principle of Darwinian natural selection.
Solutions to a problem are represented as individual chromosomes within a population and are evaluated for individual fitness/performance.
The fittest individuals in the population reproduce, producing offspring with a combination of the parents' traits; the least fit individuals are removed from the population and replaced with the children.
Further population variance/diversity is driven by random events modeled after chromosomal crossover and genetic mutation, resulting in a population that converges toward a more optimal solution with each generation. 

This project visualizes the use of a genetic algorithm to solve the traveling salesman problem - points are chosen on a map/plane and the algorithm attempts to find the shortest path that traverses every point.
Individual solutions are comprised of combinations of routes between two points on a map (genes).
The individual's fitness is defined by the combined total distance covered by its component routes.


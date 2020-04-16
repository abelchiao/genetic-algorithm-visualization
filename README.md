# Genetic algorithm visualization

[Live link.](https://abelchiao.github.io/genetic-algorithm-visualization/)

## Background
___
Having come from a biotechnology background, I was inspired to pursue software by the revolutionary effect of advances in computation and data science on biological innovation.
Genetic algorithms are an embodiment of the intersection between computer science and biology, and so this project marries my past experience in genetics with my more recently acquired coding capabilities.

Genetic algorithms are optimization algorithms inspired by the principle of Darwinian natural selection.
Solutions to a problem are represented as individual chromosomes within a population and are evaluated for individual fitness/performance.
The fittest individuals in the population reproduce, producing offspring with a combination of the parents' traits; the least fit individuals are removed from the population and replaced with the children.
Further population variance/diversity is driven by random events modeled after chromosomal crossover and genetic mutation, resulting in a population that converges toward a more optimal solution with each generation. 

This project visualizes the use of a genetic algorithm to solve the traveling salesman problem - points are chosen on a map/plane and the algorithm attempts to find the shortest path that traverses every point.
Individual solutions are comprised of combinations of routes between two points on a map (genes).
The individual's fitness is defined by the combined total distance covered by its component routes.


## Features
___
### Visualize the algorithm's progression as the solution population converges toward the shortest distance.


### Populate the map with a custom set of points and find the shortest route between them.


### Manipulate algorithm parameters and test the algorithm under new conditions.


## Algorithm implementation
___
In accordance with the theme of natural selection, solutions in genetic algorithms are represented as individuals in a population. 


#### Implementation: 
Logic is divided between ```Individual``` and ```Population``` classes.
```
class Individual {
  constructor(mutProb, ...coordinates) {
    this.geneCount = coordinates.length;
    this.mutProb = mutProb;
    this.chromosome = coordinates.slice();
    this.calculateFitness();
  }
}
```
```
class Population {
  constructor(popSize, crossProb, mutProb, elitismRate, ...coordinates) {
    this.coordinates = coordinates
    this.popSize = popSize;
    this.crossProb = crossProb;
    this.mutProb = mutProb;
    this.elitismRate = elitismRate
    this.totalFitness = 0;
    this.currentGen = [];
    this.genNumber = 0;
    this.numPossibleRoutes = factorial(coordinates.length)
    
    for (let i = 0; i < popSize; i++) {
      let chromosome = coordinates.slice().shuffle();
      let individual = new Individual(mutProb, ...chromosome);
      this.totalFitness += individual.fitness;
      this.currentGen.push(individual);
    }

    this.fittestEver = this.getFittest();
  }
}
```

## Technologies
___
This project was implemented using only vanilla JavaScript and HTML5 Canvas (and HTML/CSS).